import Image from "next/image";
import { ABOUT_BODY, ABOUT_HEAD, STATS } from "@/data/content";
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
        <h2 className="about__head">
          We don&rsquo;t decorate brands. We build the <em>system</em> that{" "}
          <em>grows</em> them.
        </h2>
        <p className="about__body">{ABOUT_BODY}</p>
        <div className="about__signature">
          <Image
            src="/brand/sapphire-logo.svg"
            alt=""
            width={32}
            height={32}
            className="about__signature-mark"
          />
          <span>Built in India · Working worldwide</span>
        </div>
        <span className="sr-only">{ABOUT_HEAD}</span>
      </div>

      <div className="stats__grid">
        {STATS.map((s) => (
          <RollingStat key={s.label} stat={s} />
        ))}
      </div>
    </section>
  );
}
