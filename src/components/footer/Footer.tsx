import { CONTACT } from "@/data/content";

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
        <div className="footer__inner">
          <span className="footer__eyebrow">Let&rsquo;s talk · IST &amp; everywhere</span>
          <a
            href={CONTACT.emailHref}
            className="footer__cta"
            data-string="magnetic"
            data-string-id="cta"
            data-string-strength="0.55"
            data-string-radius="240"
          >
            Let&rsquo;s Build
          </a>
          <div className="footer__lines">
            <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
            <a href={CONTACT.emailHref}>{CONTACT.email}</a>
          </div>
          <div className="footer__meta">
            <span>© {new Date().getFullYear()} {CONTACT.legal}</span>
            <span>{CONTACT.alt}</span>
          </div>
        </div>
      </footer>
    </>
  );
}
