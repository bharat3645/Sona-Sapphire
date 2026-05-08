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
    <div className="stack-item" style={styleVars}>
      <div
        className="stack-item__poster"
        data-burn={index}
        data-string="parallax"
        data-string-id={`reel-poster-${reel.id}`}
        data-string-parallax={reel.parallax}
      >
        <Image src={reel.poster} alt="" fill sizes="100vw" priority={priority} />
      </div>

      <div className="stack-item__overlay" aria-hidden="true" />

      <figcaption
        className="stack-item__caption"
        data-string="parallax"
        data-string-id={`reel-cap-${reel.id}`}
        data-string-parallax={(0.45 - index * 0.04).toFixed(2)}
      >
        <span className="stack-item__caption-tag">{reel.tag}</span>
        <h2 className="stack-item__caption-title">{reel.label}</h2>
        <span className="stack-item__caption-meta">{reel.client}</span>
      </figcaption>

      <span
        className="stack-item__index"
        aria-hidden="true"
        data-string="parallax"
        data-string-id={`reel-idx-${reel.id}`}
        data-string-parallax={(0.36 - index * 0.04).toFixed(2)}
      >
        0{index + 1}
      </span>
    </div>
  );
}
