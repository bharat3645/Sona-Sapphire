"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef } from "react";
import Image from "next/image";
import type { ReelDef } from "@/data/content";

interface Props {
  readonly reel: ReelDef;
  readonly index: 0 | 1 | 2 | 3;
  readonly priority?: boolean;
}

export function VideoStackItem({ reel, index, priority = false }: Props) {
  const styleVars = { "--i": index } as CSSProperties & Record<"--i", number>;
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v || !reel.src) return;
    const kick = () => v.play().catch(() => {});
    if (v.readyState >= 2) kick();
    v.addEventListener("loadedmetadata", kick, { once: true });
    return () => v.removeEventListener("loadedmetadata", kick);
  }, [reel.src]);

  return (
    <div className="stack-item" style={styleVars}>
      {/* Layer 1 — poster (slowest parallax) */}
      <div
        className="stack-item__poster"
        data-burn={index}
        data-string="parallax"
        data-string-id={`reel-poster-${reel.id}`}
        data-string-parallax={reel.parallax}
      >
        <Image src={reel.poster} alt="" fill sizes="100vw" priority={priority} />
      </div>

      {reel.src ? (
        <video
          ref={ref}
          className="stack-item__media"
          data-string="video-autoplay"
          data-string-id={`reel-${reel.id}`}
          src={reel.src}
          poster={reel.poster}
          autoPlay
          muted
          playsInline
          loop
          preload={priority ? "auto" : "metadata"}
          aria-label={reel.label}
        />
      ) : null}

      <div className="stack-item__overlay" aria-hidden="true" />

      {/* Cinematic corner brackets */}
      <div className="stack-item__brackets" aria-hidden="true">
        <span className="stack-item__bracket stack-item__bracket--tl" />
        <span className="stack-item__bracket stack-item__bracket--tr" />
        <span className="stack-item__bracket stack-item__bracket--bl" />
        <span className="stack-item__bracket stack-item__bracket--br" />
      </div>

      {/* Layer 2 — reel index (parallax up) */}
      <div
        className="stack-item__index"
        aria-hidden="true"
        data-string="parallax"
        data-string-id={`reel-idx-${reel.id}`}
        data-string-parallax={(0.45 - index * 0.06).toFixed(2)}
      >
        <span className="stack-item__index-num">0{index + 1}</span>
        <span className="stack-item__index-rule" />
        <span className="stack-item__index-total">04</span>
      </div>

      {/* Layer 3 — caption (parallax up faster) */}
      <figcaption
        className="stack-item__caption"
        data-string="parallax"
        data-string-id={`reel-cap-${reel.id}`}
        data-string-parallax={(0.55 - index * 0.05).toFixed(2)}
      >
        <span className="stack-item__caption-row">
          <span className="stack-item__caption-play" aria-hidden="true">▶</span>
          <span>Now playing</span>
          <span className="stack-item__caption-tag">{reel.tag}</span>
        </span>
        <h2 className="stack-item__caption-title">{reel.label}</h2>
        <div className="stack-item__caption-meta">
          <span>{reel.client}</span>
          <span className="stack-item__caption-format">{reel.format}</span>
        </div>
      </figcaption>
    </div>
  );
}
