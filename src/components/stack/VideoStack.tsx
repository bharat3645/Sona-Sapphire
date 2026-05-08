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

        {/* Subtle watermark wordmark — single line, soft tone, no glitchy blend */}
        <h1
          className="stack__wordmark"
          aria-label="Sona Sapphire Global Solutions"
        >
          Sapphire
        </h1>

        {/* Bottom info bar: reel index + scroll cue */}
        <div className="stack__hud">
          <span className="stack__hud-index">
            <span className="stack__hud-index-num">
              0{Math.min(4, Math.max(1, 1)) /* always start at 01 */}
            </span>
            <span className="stack__hud-index-total">/ 04</span>
          </span>
          <span className="stack__hud-scroll">Scroll to unfurl</span>
        </div>
      </div>
    </section>
  );
}
