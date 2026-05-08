import Link from "next/link";
import Image from "next/image";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export function TopNav() {
  return (
    <header className="nav">
      <Link href="/" className="nav__brand" aria-label="Sona Sapphire — Home">
        <span className="logo-gem nav__brand-mark" aria-hidden="true">
          <Image src="/brand/sapphire-gem.png" alt="" width={64} height={64} />
        </span>
        <span className="nav__brand-name">
          Sona <b>Sapphire</b>
        </span>
      </Link>

      <nav className="nav__links" aria-label="Primary">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} className="nav__link">
            {l.label}
          </a>
        ))}
      </nav>

      <a
        href="#contact"
        className="nav__cta"
        data-string="magnetic"
        data-string-id="nav-cta"
        data-string-strength="0.35"
        data-string-radius="160"
      >
        Start a project
      </a>
    </header>
  );
}
