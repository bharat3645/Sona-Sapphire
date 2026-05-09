"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#work-showcase", label: "Selected" },
  { href: "#inquiry", label: "Inquiry" },
] as const;

/**
 * Hamburger overlay menu for narrow viewports. Hidden on screens wider
 * than the nav-collapse breakpoint (920px) where the inline nav already
 * shows. Opens to a full-screen panel with the same anchor links plus
 * the contact CTA. Closes on link click, on Esc, on backdrop click.
 */
export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="mobile-menu__toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="mobile-menu__toggle-bar" />
        <span className="mobile-menu__toggle-bar" />
      </button>

      <div
        id="mobile-menu-panel"
        className="mobile-menu__panel"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        data-open={open}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
      >
        <div className="mobile-menu__inner">
          <span className="mobile-menu__eyebrow">Navigate</span>
          <ul className="mobile-menu__list">
            {LINKS.map((l, i) => (
              <li
                key={l.href}
                className="mobile-menu__item"
                style={{ "--idx": i } as React.CSSProperties}
              >
                <a href={l.href} onClick={() => setOpen(false)}>
                  <span className="mobile-menu__index">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="mobile-menu__label">{l.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-menu__footer">
            <a href="#contact" className="mobile-menu__cta" onClick={() => setOpen(false)}>
              Start a project →
            </a>
            <a href="/privacy" className="mobile-menu__legal" onClick={() => setOpen(false)}>
              Privacy
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
