import Image from "next/image";
import { ABOUT_BODY, PROCESS, QUOTE, STATS } from "@/data/content";
import { RollingStat } from "./RollingStat";

export function StatsAbout() {
  return (
    <section
      id="about"
      className="about"
      data-string="progress"
      data-string-id="stats"
      data-string-key="--stats"
      data-string-enter-el=".about"
      data-string-enter-vp="bottom"
      data-string-exit-el=".about"
      data-string-exit-vp="center"
      aria-label="About and metrics"
    >
      <div className="shell">
        <span className="eyebrow">About — Sona Sapphire</span>
        <div className="about__head">
          <blockquote className="about__quote">
            <p>
              We don&rsquo;t decorate brands. We build the <em>system</em> that{" "}
              <em>grows</em> them — and then we hand it back to your team, fully
              instrumented.
            </p>
            <span className="about__quote-attr">— {QUOTE.attr}</span>
          </blockquote>
          <div>
            <p className="about__body">{ABOUT_BODY}</p>
            <div className="about__signature">
              <span className="logo-gem about__signature-mark" aria-hidden="true">
                <Image
                  src="/brand/sapphire-gem.png"
                  alt=""
                  width={72}
                  height={72}
                />
              </span>
              <span>Built in India · Working worldwide</span>
            </div>
          </div>
        </div>

        <div className="stats" aria-label="Key metrics">
          {STATS.map((s, i) => (
            <RollingStat key={s.label} stat={s} index={i} />
          ))}
        </div>

        <div className="process" aria-label="How we work">
          {PROCESS.map((p) => (
            <div key={p.index} className="process__step">
              <h3 className="process__title">{p.title}</h3>
              <p className="process__body">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
