import { NextResponse } from "next/server";
import { Resend } from "resend";
import { SERVICE_TYPES, type ServiceType } from "@/data/content";

const KEY = process.env.RESEND_API_KEY;
const TO = process.env.INQUIRY_TO ?? "sonassapphireglobalsolution@gmail.com";
const FROM = process.env.INQUIRY_FROM ?? "Sona Sapphire <onboarding@resend.dev>";

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
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return map[c] ?? c;
  });

export async function POST(req: Request) {
  if (!KEY) {
    return NextResponse.json(
      { ok: false, error: "Inquiry mailer is not configured." },
      { status: 503 },
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

  // Honeypot — silently 200 so bots don't learn what tripped them
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
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
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

  const resend = new Resend(KEY);
  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `Inquiry — ${type} — ${name}`,
      html: `
        <div style="font-family: system-ui, sans-serif; line-height: 1.55; color: #0B1B3A;">
          <h2 style="margin: 0 0 1rem; font-size: 1.1rem;">New project inquiry</h2>
          <p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>
          <p><strong>Project type:</strong> ${escapeHtml(type)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });
    if (error) {
      return NextResponse.json(
        { ok: false, error: error.message ?? "Mailer rejected the request." },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Unknown mailer error.";
    return NextResponse.json({ ok: false, error: msg }, { status: 502 });
  }
}
