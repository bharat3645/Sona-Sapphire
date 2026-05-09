import { CONTACT, SOCIALS } from "@/data/content";
import { SocialIcon } from "@/components/social/SocialIcon";
import { InquiryTrigger } from "@/components/inquiry/InquiryTrigger";

export function Footer() {
  return (
    <>
      <div
        className="peel-sentinel"
        id="contact"
        data-string="progress"
        data-string-id="peel"
        data-string-key="--peel"
        data-string-enter-el=".peel-sentinel"
        data-string-enter-vp="bottom"
        data-string-exit-el=".peel-sentinel"
        data-string-exit-vp="bottom"
        aria-hidden="true"
      />
      <footer className="footer" aria-label="Contact">
        <div className="footer__top">
          <span>Let&rsquo;s talk · IST &amp; everywhere</span>
          <span>{CONTACT.est}</span>
        </div>

        <div className="footer__inner">
          <span className="footer__cta-tag">Drop a line — we reply within 24h</span>
          <InquiryTrigger
            className="footer__cta"
            dataAttrs={{
              "data-string": "magnetic",
              "data-string-id": "cta",
              "data-string-strength": "0.5",
              "data-string-radius": "240",
            }}
          >
            Let&rsquo;s Build
          </InquiryTrigger>

          <div className="footer__lines">
            <a
              href={CONTACT.phoneHref}
              className="footer__line"
              data-string="magnetic"
              data-string-id="line-phone"
              data-string-strength="0.18"
              data-string-radius="180"
            >
              <span className="footer__line-label">Call · WhatsApp</span>
              <span className="footer__line-value">{CONTACT.phone}</span>
            </a>
            <a
              href={CONTACT.emailHref}
              className="footer__line footer__line--email"
              data-string="magnetic"
              data-string-id="line-email"
              data-string-strength="0.18"
              data-string-radius="180"
            >
              <span className="footer__line-label">Email</span>
              <span className="footer__line-value">{CONTACT.email}</span>
            </a>
          </div>
        </div>

        <div className="footer__meta">
          <span>
            © {new Date().getFullYear()} {CONTACT.legal} · {CONTACT.alt} · Inquiry data
            is used only to reply to your message — never shared or sold. ·{" "}
            <a href="/privacy" className="footer__meta-link">
              Privacy
            </a>
          </span>
          <div className="footer__socials">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                className="footer__social"
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${s.label} — ${s.handle}`}
                data-string="magnetic"
                data-string-id={`social-${s.kind}`}
                data-string-strength="0.25"
                data-string-radius="120"
              >
                <SocialIcon kind={s.kind} title={s.label} />
                <span>{s.label}</span>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
