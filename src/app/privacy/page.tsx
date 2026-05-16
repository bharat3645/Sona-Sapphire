import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT, SOCIALS } from "@/data/content";
import { TopNav } from "@/components/nav/TopNav";
import { MobileMenu } from "@/components/nav/MobileMenu";
import { SocialIcon } from "@/components/social/SocialIcon";
import { Grain } from "@/components/overlays/Grain";
import { Spotlight } from "@/components/overlays/Spotlight";
import { ScrollProgress } from "@/components/overlays/ScrollProgress";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How Sona Sapphire Global Solutions handles personal data submitted via the inquiry form, the Resend mailer, and analytics on this site.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "10 May 2026";

interface LegalSection {
  readonly title: string;
  readonly body: React.ReactNode;
}

const SECTIONS: readonly LegalSection[] = [
  {
    title: "The short version",
    body: (
      <p>
        We collect the bare minimum needed to reply to your inquiry and to
        understand how the site is performing. We don&rsquo;t sell data,
        run targeted ad pixels, or share contact details with third parties
        outside the email pipeline.
      </p>
    ),
  },
  {
    title: "What we collect",
    body: (
      <ul>
        <li>
          <strong>Inquiry form data</strong> — name, email, project type,
          and message you submit via the &ldquo;Start a project&rdquo; or
          &ldquo;Let&rsquo;s Build&rdquo; CTAs.
        </li>
        <li>
          <strong>Anonymous traffic data</strong> — page views, viewport
          size, referrer, and Core Web Vitals (LCP, INP, CLS, FCP, TTFB)
          collected by Vercel Analytics and Vercel Speed Insights. These
          are aggregate, cookie-less, and do not identify you.
        </li>
        <li>
          <strong>Server logs</strong> — Vercel records IP address and
          user-agent for each request. Used for debugging and rate-limiting
          only; not joined with the inquiry form data.
        </li>
      </ul>
    ),
  },
  {
    title: "How we use it",
    body: (
      <ul>
        <li>
          <strong>Inquiry data</strong> is sent via the Resend API to{" "}
          <a href={CONTACT.emailHref}>{CONTACT.email}</a> so we can reply.
          Resend stores the message in their delivery logs for up to 30
          days. After we reply (or after 90 days if we don&rsquo;t), we
          treat the message as closed; we don&rsquo;t add you to any
          marketing list.
        </li>
        <li>
          <strong>Analytics</strong> tells us which sections see the most
          attention so we can improve the site. It is never tied back to
          your name or email.
        </li>
        <li>
          <strong>Logs</strong> are kept for the standard Vercel retention
          window (a few weeks).
        </li>
      </ul>
    ),
  },
  {
    title: "Cookies",
    body: (
      <p>
        This site doesn&rsquo;t set any first-party cookies. Vercel
        Analytics is cookie-less by design and operates from{" "}
        <code>vitals.vercel-insights.com</code>. The browser may set a
        short-lived <code>__vercel_*</code> cookie if you visit a Vercel
        preview deployment, controlled by Vercel&rsquo;s own policy.
      </p>
    ),
  },
  {
    title: "Third-party services",
    body: (
      <ul>
        <li>
          <strong>Vercel</strong> &mdash; hosting, edge network, analytics.{" "}
          <a
            href="https://vercel.com/legal/privacy-policy"
            rel="noreferrer noopener"
            target="_blank"
          >
            Vercel privacy policy
          </a>
          .
        </li>
        <li>
          <strong>Resend</strong> &mdash; transactional email delivery for
          the inquiry form.{" "}
          <a
            href="https://resend.com/legal/privacy-policy"
            rel="noreferrer noopener"
            target="_blank"
          >
            Resend privacy policy
          </a>
          .
        </li>
        <li>
          <strong>Unsplash &amp; Google Fonts</strong> &mdash; serve static
          imagery and webfonts. No personal data leaves the browser to
          these CDNs aside from the standard request metadata.
        </li>
      </ul>
    ),
  },
  {
    title: "Your rights",
    body: (
      <p>
        You can request access, correction, or deletion of any data you
        submitted. Email{" "}
        <a href={CONTACT.emailHref}>{CONTACT.email}</a> with the subject
        line &ldquo;Privacy request&rdquo; and we&rsquo;ll respond within
        30 days.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Grain />
      <Spotlight />
      <ScrollProgress />
      <TopNav />
      <MobileMenu />
      <main className="legal">
        <article className="legal__shell">
          <header className="legal__head">
            <span className="eyebrow">Legal · Updated {LAST_UPDATED}</span>
            <h1 className="legal__title">
              Privacy<em className="legal__title-stop">.</em>
            </h1>
            <p className="legal__lede">
              How {CONTACT.legal} handles personal data submitted through the
              inquiry form, the Resend mailer, and the analytics on this site.
              Plain English, no dark patterns.
            </p>
            <div className="legal__meta">
              <span>Effective {LAST_UPDATED}</span>
              <span>
                Contact <a href={CONTACT.emailHref}>{CONTACT.email}</a> for any
                privacy request.
              </span>
            </div>
          </header>

          <ol className="legal__sections">
            {SECTIONS.map((s, i) => (
              <li key={s.title} className="legal__section">
                <div className="legal__section-head">
                  <span className="legal__section-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="legal__section-title">{s.title}</h2>
                </div>
                <div className="legal__section-body">{s.body}</div>
              </li>
            ))}
          </ol>

          <footer className="legal__close">
            <h2 className="legal__close-title">Reach the studio.</h2>
            <p className="legal__close-body">
              {CONTACT.legal} · {CONTACT.alt}
            </p>
            <div className="legal__close-grid">
              <a href={CONTACT.emailHref} className="legal__close-line">
                <span>Email</span>
                <strong>{CONTACT.email}</strong>
              </a>
              <a href={CONTACT.phoneHref} className="legal__close-line">
                <span>Phone · WhatsApp</span>
                <strong>{CONTACT.phone}</strong>
              </a>
            </div>
            <div className="legal__close-foot">
              <Link href="/" className="legal__back">
                ← Back to the studio
              </Link>
              <div className="legal__close-socials">
                {SOCIALS.map((s) => (
                  <a
                    key={s.kind}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${s.label} — ${s.handle}`}
                  >
                    <SocialIcon kind={s.kind} title={s.label} />
                  </a>
                ))}
              </div>
            </div>
          </footer>
        </article>
      </main>
    </>
  );
}
