import { CONTACT, SOCIALS } from "@/data/content";

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
          <a
            href={CONTACT.emailHref}
            className="footer__cta"
            data-string="magnetic"
            data-string-id="cta"
            data-string-strength="0.5"
            data-string-radius="240"
          >
            Let&rsquo;s Build
          </a>

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
              className="footer__line"
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
            © {new Date().getFullYear()} {CONTACT.legal} · {CONTACT.alt}
          </span>
          <div className="footer__socials">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                className="footer__social"
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                data-string="magnetic"
                data-string-id={`social-${s.label.toLowerCase()}`}
                data-string-strength="0.25"
                data-string-radius="120"
              >
                {s.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
