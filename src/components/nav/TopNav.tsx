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
        <Image
          src="/brand/sapphire-logo.svg"
          alt=""
          width={28}
          height={28}
          className="nav__brand-mark"
          priority
        />
        <span>SONA SAPPHIRE</span>
      </Link>

      <nav className="nav__links" aria-label="Primary">
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="nav__link"
            data-string="magnetic"
            data-string-strength="0.25"
            data-string-radius="120"
          >
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
