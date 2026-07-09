import { NextResponse } from "next/server";
import { Resend } from "resend";
import { SERVICE_TYPES, type ServiceType } from "@/data/content";

const KEY = process.env.RESEND_API_KEY;
// Primary destination. Defaults to the business inbox; override via env if
// a shared inbox is added later (e.g. sales@ / studio@).
const TO = process.env.INQUIRY_TO ?? "info@sonasapphire.com";
const FROM = process.env.INQUIRY_FROM ?? "Sona Sapphire <onboarding@resend.dev>";
// Optional fallback inbox for while Resend is in sandbox mode (only the
// key-owner address is a permitted recipient there). Unset by default: a
// sandbox-blocked send just fails honestly (502) so the visitor sees the
// "email us directly" fallback instead of a false success. To opt in for
// local/dev testing, set INQUIRY_DEV_FALLBACK to an address you control —
// never set it in production without telling whoever's inbox it points at.
// Verifying the sending domain at https://resend.com/domains makes this
// branch stop being reachable at all.
const DEV_FALLBACK = process.env.INQUIRY_DEV_FALLBACK;

interface InquiryBody {
  readonly name?: string;
  readonly email?: string;
  readonly type?: ServiceType;
  readonly message?: string;
  readonly website?: string;
}

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => {
    const map: Record<string, string> = {
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    };
    return map[c] ?? c;
  });

const SANDBOX_RX = /testing emails|verify a domain|resend\.com\/domains|own email address/i;

/* ─── Rate limit ───────────────────────────────────────────────────────────
   In-memory IP bucket: 5 submissions per minute per IP. Survives within a
   warm Vercel instance, resets on cold start.                            */
const RATE_LIMIT = 5;
const WINDOW_MS = 60_000;
type Bucket = { count: number; resetAt: number };
const buckets = new Map<string, Bucket>();

const clientIp = (req: Request): string => {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]!.trim();
  const real = req.headers.get("x-real-ip");
  if (real) return real.trim();
  return "anon";
};

const isLimited = (ip: string): boolean => {
  const now = Date.now();
  if (buckets.size > 1024) {
    for (const [k, b] of buckets) if (b.resetAt < now) buckets.delete(k);
  }
  const bucket = buckets.get(ip);
  if (!bucket || bucket.resetAt < now) {
    buckets.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (bucket.count >= RATE_LIMIT) return true;
  bucket.count += 1;
  return false;
};

export async function POST(req: Request) {
  if (!KEY) {
    return NextResponse.json(
      { ok: false, error: "Inquiry mailer is not configured." },
      { status: 503 },
    );
  }

  const ip = clientIp(req);
  if (isLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many submissions. Try again in a minute." },
      {
        status: 429,
        headers: { "retry-after": String(Math.ceil(WINDOW_MS / 1000)) },
      },
    );
  }

  let body: InquiryBody;
  try {
    body = (await req.json()) as InquiryBody;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON" },
      { status: 400 },
    );
  }

  // Honeypot — silently 200 so bots don't learn what tripped them.
  if (body.website && body.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();
  const type = String(body.type ?? "Other") as ServiceType;

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields." },
      { status: 400 },
    );
  }
  if (name.length > 200 || message.length > 4000) {
    return NextResponse.json(
      { ok: false, error: "Field too long." },
      { status: 400 },
    );
  }
  if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Invalid email." },
      { status: 400 },
    );
  }
  if (!SERVICE_TYPES.includes(type)) {
    return NextResponse.json(
      { ok: false, error: "Unknown project type." },
      { status: 400 },
    );
  }

  const baseHtml = `
    <div style="font-family: system-ui, sans-serif; line-height: 1.55; color: #0B1B3A;">
      <h2 style="margin: 0 0 1rem; font-size: 1.1rem;">New project inquiry</h2>
      <p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>
      <p><strong>Project type:</strong> ${escapeHtml(type)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
    </div>
  `;
  const baseSubject = `Inquiry — ${type} — ${name}`;

  const resend = new Resend(KEY);

  try {
    // Primary attempt: deliver to the configured business inbox.
    const primary = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: baseSubject,
      html: baseHtml,
    });

    if (!primary.error) {
      return NextResponse.json({ ok: true });
    }

    // Sandbox fallback: Resend rejects unverified recipients while the
    // sending domain is unverified. Only reachable when INQUIRY_DEV_FALLBACK
    // is explicitly set (see comment above) — retries to the dev-verified
    // address with a clearly-flagged subject + a banner in the body so the
    // recipient sees the original intended destination. Once the domain is
    // verified (DNS records + INQUIRY_FROM switched to a domain address),
    // the primary send succeeds and this branch never runs.
    const errMsg = primary.error.message ?? "";
    if (DEV_FALLBACK && SANDBOX_RX.test(errMsg)) {
      const fallbackHtml = `
        <div style="font-family: system-ui, sans-serif; background: #FFF7DD; border-left: 3px solid #D4A24C; padding: 0.65rem 0.9rem; margin: 0 0 1rem; color: #4A3210;">
          <strong>Sandbox fallback:</strong> Resend declined the primary
          delivery to <code>${escapeHtml(TO)}</code>. Verify the sending
          domain at <code>resend.com/domains</code> to receive future
          inquiries directly there.
        </div>
        ${baseHtml}
      `;
      const fallback = await resend.emails.send({
        from: FROM,
        to: DEV_FALLBACK,
        replyTo: email,
        subject: `[FALLBACK → ${TO}] ${baseSubject}`,
        html: fallbackHtml,
      });
      if (!fallback.error) {
        return NextResponse.json({ ok: true, fallback: true });
      }
      return NextResponse.json(
        { ok: false, error: fallback.error.message ?? errMsg },
        { status: 502 },
      );
    }

    return NextResponse.json(
      { ok: false, error: errMsg || "Mailer rejected the request." },
      { status: 502 },
    );
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Unknown mailer error.";
    return NextResponse.json({ ok: false, error: msg }, { status: 502 });
  }
}
