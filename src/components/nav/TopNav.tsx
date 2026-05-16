import Link from "next/link";
import Image from "next/image";
import { InquiryTrigger } from "@/components/inquiry/InquiryTrigger";
import { MobileMenu } from "./MobileMenu";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export function TopNav() {
  return (
    <header className="nav">
      <Link
        href="/"
        className="nav__brand"
        aria-label="Sona Sapphire — Home"
        data-string="magnetic"
        data-string-id="nav-brand"
        data-string-strength="0.18"
        data-string-radius="120"
      >
        <span className="logo-gem nav__brand-mark" aria-hidden="true">
          <Image src="/brand/sapphire-gem.png" alt="" width={96} height={96} priority />
        </span>
        <span className="nav__brand-block">
          <span className="nav__brand-name">
            Sona <b>Sapphire</b>
          </span>
          <span className="nav__brand-tag">Global Solutions · Est. 2024</span>
        </span>
      </Link>

      <nav className="nav__links" aria-label="Primary">
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="nav__link"
            data-string="magnetic"
            data-string-id={`nav-${l.label.toLowerCase()}`}
            data-string-strength="0.22"
            data-string-radius="120"
          >
            {l.label}
          </a>
        ))}
      </nav>

      <div className="nav__end">
        <span className="nav__status" aria-label="Studio booking status">
          <span className="nav__status-dot" aria-hidden="true" />
          <span className="nav__status-label">Booking 2026</span>
        </span>
        <InquiryTrigger
          className="nav__cta"
          dataAttrs={{
            "data-string": "magnetic",
            "data-string-id": "nav-cta",
            "data-string-strength": "0.35",
            "data-string-radius": "160",
          }}
        >
          Start a project
        </InquiryTrigger>
      </div>

      <MobileMenu />
    </header>
  );
}
