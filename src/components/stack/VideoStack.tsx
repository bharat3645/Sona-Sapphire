import { REELS } from "@/data/content";
import { VideoStackItem } from "./VideoStackItem";

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

        <h1
          className="stack__wordmark"
          aria-label="Sona Sapphire Global Solutions"
        >
          <span>Sona</span>
          <span>Sapphire</span>
        </h1>

        <div className="stack__hud">
          <div className="stack__hud-top">
            <span className="stack__hud-badge">Reel · 2026 — Now shipping</span>
            <span>Sona Sapphire — Global Solutions</span>
          </div>
          <div />
          <div className="stack__hud-bottom">
            <span className="stack__hud-scroll">Scroll to unfurl</span>
            <span className="stack__hud-counter">04 reels</span>
          </div>
        </div>
      </div>
    </section>
  );
}
