"use client";

import { useEffect } from "react";

/**
 * Writes a 0..1 `--progress` value to the `.stack` element based on its
 * scroll position. Uses requestAnimationFrame to coalesce scroll events
 * and only writes when the value actually changed (to avoid layout thrash).
 *
 * StringTune's StringProgress is a great general tool but its default
 * timeline geometry on a 400svh sticky container did not consistently
 * scrub from 0 at first paint to 1 at sticky release. This guarantees it.
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
      const range = rect.height - window.innerHeight;
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
