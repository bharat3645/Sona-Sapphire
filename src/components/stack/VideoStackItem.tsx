import type { CSSProperties } from "react";
import Image from "next/image";
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
          <Image
            src={reel.poster}
            alt=""
            fill
            sizes="100vw"
            className="stack-item__poster"
            priority={priority}
            unoptimized
          />
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
          <div className="stack-item__overlay" aria-hidden="true" />

          <span className="stack-item__index" aria-hidden="true">
            0{index + 1}
          </span>

          <figcaption className="stack-item__caption">
            <span className="stack-item__caption-row">
              <span>{reel.tag}</span>
            </span>
            <span className="stack-item__caption-title">{reel.label}</span>
            <span className="stack-item__caption-meta">{reel.client}</span>
          </figcaption>
        </div>
      </div>
    </div>
  );
}
