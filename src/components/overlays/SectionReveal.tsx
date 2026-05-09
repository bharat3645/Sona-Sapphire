"use client";

import { useEffect } from "react";

/**
 * Adds an `is-revealed` class to every <section> in <main> as it
 * intersects the viewport. CSS uses the class to fade + slide each
 * section in from below the first time it appears. One-shot — the
 * observer disconnects per section after the reveal so subsequent
 * scroll-up passes don't re-trigger.
 *
 * The hero (.stack) is excluded because it must paint immediately
 * on first load.
 */
export function SectionReveal() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(
      "main > section:not(.stack)",
    );
    if (sections.length === 0) return;

    // Mark them as not-yet-revealed so CSS hides them up-front.
    sections.forEach((s) => s.classList.add("section-reveal"));

    if (typeof IntersectionObserver === "undefined") {
      // Fallback: reveal everything immediately.
      sections.forEach((s) => s.classList.add("is-revealed"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "-8% 0px -8% 0px", threshold: 0 },
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return null;
}
