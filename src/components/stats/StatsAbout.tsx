import { ABOUT_COPY, STATS } from "@/data/content";
import { RollingStat } from "./RollingStat";

export function StatsAbout() {
  return (
    <section
      id="about"
      className="stats"
      data-string="progress"
      data-string-id="stats"
      data-string-key="--stats"
      data-string-enter-el=".stats"
      data-string-enter-vp="bottom"
      data-string-exit-el=".stats"
      data-string-exit-vp="center"
      aria-label="About and metrics"
    >
      <div className="about">
        <span className="about__eyebrow">About — Sona Sapphire</span>
        <p className="about__copy">
          We engineer <em>digital growth</em> for brands that refuse the
          average. Sona Sapphire pairs <em>cinematic creative</em> with{" "}
          <em>measurable systems</em> — videos that convert, social that
          compounds, and websites that hold a room.
        </p>
        <span className="sr-only">{ABOUT_COPY}</span>
      </div>

      <div className="stats__grid">
        {STATS.map((s) => (
          <RollingStat key={s.label} stat={s} />
        ))}
      </div>
    </section>
  );
}
