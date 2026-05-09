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
  const videoRef = useRef<HTMLVideoElement>(null);

  // Aggressive autoplay kicker for the big client MP4s. Hooks every readiness
  // event we know of so playback starts the second the browser has any
  // usable buffer. .play() rejection (Safari TP / Android edge cases) is
  // swallowed silently — muted+playsInline already passes every modern
  // browser's autoplay policy.
  useEffect(() => {
    const v = videoRef.current;
    if (!v || !reel.src) return;
    let played = false;
    const kick = () => {
      if (played) return;
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
      played = true;
    };
    const events = ["loadedmetadata", "loadeddata", "canplay"] as const;
    events.forEach((e) => v.addEventListener(e, kick));
    if (v.readyState >= 2) kick();
    return () => {
      events.forEach((e) => v.removeEventListener(e, kick));
    };
  }, [reel.src]);

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

      {/* When a reel has an MP4 source, the video composites above the
          poster. autoplay + muted + playsInline + loop matches every modern
          browser's silent-autoplay policy; the useEffect above is the
          safety net. preload="auto" on the first reel so it has buffer
          ready by the time the user finishes the curtain reveal. */}
      {reel.src ? (
        <video
          ref={videoRef}
          className="stack-item__media"
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
