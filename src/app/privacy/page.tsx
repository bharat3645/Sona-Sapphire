import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/data/content";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How Sona Sapphire Global Solutions handles personal data submitted via the inquiry form, the Resend mailer, and analytics on this site.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "10 May 2026";

export default function PrivacyPage() {
  return (
    <main className="legal">
      <article className="legal__shell">
        <header className="legal__head">
          <span className="eyebrow">Legal · {LAST_UPDATED}</span>
          <h1 className="legal__title">Privacy.</h1>
          <p className="legal__lede">
            How {CONTACT.legal} handles personal data submitted through the
            inquiry form, the Resend mailer, and the analytics on this site.
            Plain English, no dark patterns.
          </p>
        </header>

        <section className="legal__section">
          <h2>The short version</h2>
          <p>
            We collect the bare minimum needed to reply to your inquiry and to
            understand how the site is performing. We don&rsquo;t sell data,
            run targeted ad pixels, or share contact details with third parties
            outside the email pipeline.
          </p>
        </section>

        <section className="legal__section">
          <h2>What we collect</h2>
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
              user-agent for each request. Used for debugging and rate-
              limiting only; not joined with the inquiry form data.
            </li>
          </ul>
        </section>

        <section className="legal__section">
          <h2>How we use it</h2>
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
        </section>

        <section className="legal__section">
          <h2>Cookies</h2>
          <p>
            This site doesn&rsquo;t set any first-party cookies. Vercel
            Analytics is cookie-less by design and operates from{" "}
            <code>vitals.vercel-insights.com</code>. The browser may set a
            short-lived <code>__vercel_*</code> cookie if you visit a Vercel
            preview deployment, controlled by Vercel&rsquo;s own policy.
          </p>
        </section>

        <section className="legal__section">
          <h2>Third-party services</h2>
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
        </section>

        <section className="legal__section">
          <h2>Your rights</h2>
          <p>
            You can request access, correction, or deletion of any data you
            submitted. Email{" "}
            <a href={CONTACT.emailHref}>{CONTACT.email}</a> with the subject
            line &ldquo;Privacy request&rdquo; and we&rsquo;ll respond within
            30 days.
          </p>
        </section>

        <section className="legal__section">
          <h2>Contact</h2>
          <p>
            {CONTACT.legal}
            <br />
            Email: <a href={CONTACT.emailHref}>{CONTACT.email}</a>
            <br />
            Phone: <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
          </p>
        </section>

        <p className="legal__back">
          <Link href="/">← Back to the studio</Link>
        </p>
      </article>
    </main>
  );
}
