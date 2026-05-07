import { REELS } from "@/data/content";
import { VideoStackItem } from "./VideoStackItem";
import { SplitText } from "@/components/text/SplitText";

export function VideoStack() {
  return (
    <section
      id="work"
      className="stack"
      data-string="progress"
      data-string-id="stack"
      data-string-key="--progress"
      data-string-enter-el=".stack"
      data-string-enter-vp="bottom"
      data-string-exit-el=".stack"
      data-string-exit-vp="top"
      aria-label="Featured work — kinetic reel stack"
    >
      <div className="stack__sticky">
        <div className="stack__items">
          {REELS.map((reel, idx) => (
            <VideoStackItem
              key={reel.id}
              reel={reel}
              index={idx as 0 | 1 | 2 | 3}
              priority={idx === 0}
            />
          ))}
        </div>

        {/* Diamond grid lines — parallax */}
        <div
          className="stack__grid"
          aria-hidden="true"
          data-string="parallax"
          data-string-id="stack-grid"
          data-string-parallax="0.12"
        />

        {/* Wordmark — split chars + counter parallax */}
        <h1
          className="stack__wordmark"
          aria-label="Sona Sapphire Global Solutions"
          data-string="parallax"
          data-string-id="stack-wordmark"
          data-string-parallax="-0.18"
        >
          <span className="stack__wordmark-line">
            <SplitText text="Sona" stagger={0.05} delay={1.4} />
          </span>
          <span className="stack__wordmark-line stack__wordmark-line--alt">
            <SplitText text="Sapphire" stagger={0.045} delay={1.7} />
          </span>
        </h1>

        {/* HUD — top */}
        <div
          className="stack__hud-top"
          data-string="parallax"
          data-string-id="stack-hud-top"
          data-string-parallax="0.05"
        >
          <span className="stack__rec" aria-label="Recording">
            <span className="stack__rec-dot" /> REC · ON THE AIR
          </span>
          <span className="stack__hud-brand">Sona Sapphire — Global Solutions</span>
        </div>

        {/* Vertical timecode rail (left) */}
        <aside
          className="stack__rail-left"
          aria-hidden="true"
          data-string="parallax"
          data-string-id="stack-rail-left"
          data-string-parallax="0.08"
        >
          <span className="stack__rail-label">TIMECODE</span>
          <span className="stack__rail-tc">01:00:14:08</span>
          <span className="stack__rail-rule" />
          <span className="stack__rail-meta">SR · 24p</span>
        </aside>

        {/* Vertical reel selector (right) */}
        <aside
          className="stack__rail-right"
          aria-hidden="true"
          data-string="parallax"
          data-string-id="stack-rail-right"
          data-string-parallax="0.08"
        >
          <span className="stack__rail-label">REEL OF FOUR</span>
          <ol className="stack__reels">
            {REELS.map((_, i) => (
              <li
                key={i}
                className="stack__reel-mark"
                style={{ "--idx": i } as React.CSSProperties}
              >
                <span className="stack__reel-num">0{i + 1}</span>
                <span className="stack__reel-bar" />
              </li>
            ))}
          </ol>
        </aside>

        {/* HUD — bottom */}
        <div
          className="stack__hud-bottom"
          data-string="parallax"
          data-string-id="stack-hud-bot"
          data-string-parallax="0.04"
        >
          <span className="stack__hud-scroll">Scroll to unfurl</span>
          <span className="stack__hud-counter">04 reels</span>
        </div>
      </div>
    </section>
  );
}
