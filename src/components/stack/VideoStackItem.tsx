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

  // If a video src is set on this reel, kick play() once metadata is ready.
  useEffect(() => {
    const v = ref.current;
    if (!v || !reel.src) return;
    const kick = () => v.play().catch(() => {});
    if (v.readyState >= 2) kick();
    v.addEventListener("loadedmetadata", kick, { once: true });
    return () => v.removeEventListener("loadedmetadata", kick);
  }, [reel.src]);

  return (
    <div
      className="stack-item"
      style={styleVars}
      data-string="parallax"
      data-string-id={`stack-parallax-${reel.id}`}
      data-string-parallax={reel.parallax}
    >
      <div className="stack-item__poster" data-burn={index}>
        <Image
          src={reel.poster}
          alt=""
          fill
          sizes="100vw"
          priority={priority}
        />
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

      <div className="stack-item__index" aria-hidden="true">
        0{index + 1}
        <span>Reel · 04</span>
      </div>

      <figcaption className="stack-item__caption">
        <span className="stack-item__caption-row">
          <span>{reel.tag}</span>
        </span>
        <span className="stack-item__caption-title">{reel.label}</span>
        <span className="stack-item__caption-meta">{reel.client}</span>
      </figcaption>
    </div>
  );
}
