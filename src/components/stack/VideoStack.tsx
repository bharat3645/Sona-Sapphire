import { REELS } from "@/data/content";
import { VideoStackItem } from "./VideoStackItem";
import { StackProgress } from "./StackProgress";

export function VideoStack() {
  return (
    <section
      id="work"
      className="stack"
      aria-label="Featured work — kinetic reel stack"
    >
      <StackProgress />
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

        {/* Cream watermark wordmark — large, soft, behind the caption */}
        <h1
          className="stack__wordmark"
          aria-label="Sona Sapphire Global Solutions"
        >
          Sapphire
        </h1>

        {/* Bottom info bar: live reel index + scroll cue */}
        <div className="stack__hud">
          <span className="stack__hud-index">
            <span className="stack__hud-index-num">
              {/* Synthetic reel counter — driven by --progress on .stack via
                  CSS counter(); mirrors which item is currently sliding up. */}
            </span>
            <span className="stack__hud-index-label">/ 04 reels</span>
          </span>
          <span className="stack__hud-scroll">Scroll to unfurl</span>
        </div>
      </div>
    </section>
  );
}
