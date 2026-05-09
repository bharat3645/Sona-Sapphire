import Image from "next/image";
import { ABOUT_BODY, QUOTE } from "@/data/content";

export function StatsAbout() {
  return (
    <section
      id="about"
      className="about"
      aria-label="About"
    >
      <div className="shell">
        <span
          className="eyebrow"
          data-string="parallax"
          data-string-id="about-eyebrow"
          data-string-parallax="0.14"
        >
          About — Sona Sapphire
        </span>
        <div className="about__head">
          <blockquote
            className="about__quote"
            data-string="parallax"
            data-string-id="about-quote"
            data-string-parallax="-0.08"
          >
            <p>
              We don&rsquo;t decorate brands. We build the <em>system</em> that{" "}
              <em>grows</em> them — and then we hand it back to your team, fully
              instrumented.
            </p>
            <span className="about__quote-attr">— {QUOTE.attr}</span>
          </blockquote>
          <div
            data-string="parallax"
            data-string-id="about-side"
            data-string-parallax="0.1"
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
      </div>
    </section>
  );
}
