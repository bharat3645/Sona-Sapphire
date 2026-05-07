import type { CSSProperties } from "react";
import type { ReelDef } from "@/data/content";

interface Props {
  readonly reel: ReelDef;
  readonly index: 0 | 1 | 2 | 3;
  readonly priority?: boolean;
}

export function VideoStackItem({ reel, index, priority = false }: Props) {
  const styleVars = { "--i": index } as CSSProperties & Record<"--i", number>;

  return (
    <div
      className="stack-item"
      data-string="parallax"
      data-string-id={`stack-parallax-${reel.id}`}
      data-string-parallax={reel.parallax}
    >
      <div className="stack-item__scale" style={styleVars}>
        <div className="stack-item__viewport">
          <div className="stack-item__overlay" aria-hidden="true" />
          <video
            className="stack-item__video"
            data-string="video-autoplay"
            data-string-id={`reel-${reel.id}`}
            src={reel.src}
            poster={reel.poster}
            muted
            playsInline
            loop
            preload={priority ? "auto" : "metadata"}
            aria-label={reel.label}
          />
          <div className="stack-item__caption">
            <span>{String(index + 1).padStart(2, "0")} / 04</span>
            <strong>{reel.label}</strong>
            <span>{reel.tag}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
