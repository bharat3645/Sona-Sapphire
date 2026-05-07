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
      <div className="stack__hud" aria-hidden="true">
        <div className="stack__hud-top">
          <span>Work · 2026</span>
          <span>Cinematic Reels</span>
        </div>
        <div />
        <div className="stack__hud-bottom">
          <span>Scroll to unfurl</span>
          <span className="stack__hud-counter">04</span>
        </div>
      </div>

      <h1 className="stack__wordmark" aria-label="Sona Sapphire Global Solutions">
        <span>Sona</span>
        <span>Sapphire</span>
      </h1>

      {REELS.map((reel, idx) => (
        <VideoStackItem
          key={reel.id}
          reel={reel}
          index={idx as 0 | 1 | 2 | 3}
          priority={idx === 0}
        />
      ))}
    </section>
  );
}
