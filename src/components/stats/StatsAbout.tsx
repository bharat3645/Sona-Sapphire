import Image from "next/image";
import { ABOUT_BODY, PROCESS, QUOTE, STATS } from "@/data/content";
import { RollingStat } from "./RollingStat";
import { SplitText } from "@/components/text/SplitText";

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
        <span
          className="eyebrow"
          data-string="parallax"
          data-string-id="about-eyebrow"
          data-string-parallax="0.1"
        >
          About — Sona Sapphire
        </span>
        <div className="about__head">
          <blockquote
            className="about__quote"
            data-string="parallax"
            data-string-id="about-quote"
            data-string-parallax="-0.06"
          >
            <p>
              <SplitText
                text="We don't decorate brands. We build the"
                mode="word"
                stagger={0.05}
                delay={0}
                progressId="about-q1"
              />{" "}
              <em>
                <SplitText text="system" mode="word" stagger={0.05} delay={0} progressId="about-q2" />
              </em>{" "}
              <SplitText text="that" mode="word" stagger={0.05} delay={0} progressId="about-q3" />{" "}
              <em>
                <SplitText text="grows" mode="word" stagger={0.05} delay={0} progressId="about-q4" />
              </em>{" "}
              <SplitText
                text="them — and then we hand it back to your team, fully instrumented."
                mode="word"
                stagger={0.04}
                delay={0}
                progressId="about-q5"
              />
            </p>
            <span className="about__quote-attr">— {QUOTE.attr}</span>
          </blockquote>
          <div
            data-string="parallax"
            data-string-id="about-side"
            data-string-parallax="0.08"
          >
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
          {PROCESS.map((p, i) => (
            <div
              key={p.index}
              className="process__step"
              style={{ "--idx": i } as React.CSSProperties}
              data-string="parallax"
              data-string-id={`process-${p.index}`}
              data-string-parallax={(0.04 + i * 0.04).toFixed(2)}
            >
              <h3 className="process__title">{p.title}</h3>
              <p className="process__body">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
