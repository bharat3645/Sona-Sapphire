"use client";

import { useEffect } from "react";

/**
 * Writes a 0..1 `--progress` value to the `.stack` element based on its
 * scroll position. Uses requestAnimationFrame to coalesce scroll events
 * and only writes when the value actually changed.
 *
 * Range guard: on landscape phones / short windows, `rect.height -
 * innerHeight` collapses to a tiny number and the scrub becomes erratic.
 * We floor the range at `innerHeight * 2` so progress always travels a
 * sensible scroll budget.
 */
export function StackProgress() {
  useEffect(() => {
    const stack = document.querySelector<HTMLElement>(".stack");
    if (!stack) return;

    let raf = 0;
    let last = -1;

    const tick = () => {
      raf = 0;
      const rect = stack.getBoundingClientRect();
      const naturalRange = rect.height - window.innerHeight;
      const range = Math.max(naturalRange, window.innerHeight * 2);
      if (range <= 0) {
        if (last !== 0) {
          stack.style.setProperty("--progress", "0");
          last = 0;
        }
        return;
      }
      const scrolled = -rect.top;
      const p = Math.max(0, Math.min(1, scrolled / range));
      if (Math.abs(p - last) > 0.001) {
        stack.style.setProperty("--progress", p.toFixed(4));
        last = p;
      }
    };

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    tick();

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
