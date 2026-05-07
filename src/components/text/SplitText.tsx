import type { CSSProperties } from "react";
import { cx } from "@/lib/classnames";

interface Props {
  readonly text: string;
  readonly className?: string;
  /** delay multiplier per char (s) */
  readonly stagger?: number;
  /** initial delay (s) — keeps text covered until curtain rises */
  readonly delay?: number;
  /** "char" splits each character; "word" splits each word */
  readonly mode?: "char" | "word";
  /** wrap with a `data-string="progress"` to drive --reveal in CSS */
  readonly progressId?: string;
}

/**
 * Pure-CSS split-text reveal driven by per-token CSS variables. When a
 * `progressId` is supplied the wrapper carries a StringProgress so the
 * reveal can also be scrubbed by scroll (`--reveal`); otherwise the chars
 * just stagger in via the `text-rev` keyframes once the curtain rises.
 */
export function SplitText({
  text,
  className,
  stagger = 0.035,
  delay = 1.6,
  mode = "char",
  progressId,
}: Props) {
  const tokens = mode === "char" ? Array.from(text) : text.split(" ");

  const wrapperProps = progressId
    ? {
        "data-string": "progress",
        "data-string-id": progressId,
        "data-string-key": "--reveal",
        "data-string-enter-el": `[data-string-id="${progressId}"]`,
        "data-string-enter-vp": "bottom",
        "data-string-exit-el": `[data-string-id="${progressId}"]`,
        "data-string-exit-vp": "top",
      }
    : {};

  return (
    <span
      className={cx("split-text", progressId && "split-text--scrub", className)}
      style={{ "--total": tokens.length } as CSSProperties}
      {...wrapperProps}
    >
      {tokens.map((tok, i) => (
        <span
          key={`${tok}-${i}`}
          className="split-text__tok"
          style={
            {
              "--char": i,
              animationDelay: `${delay + i * stagger}s`,
            } as CSSProperties
          }
          aria-hidden={tok === " " ? "true" : undefined}
        >
          {tok === " " ? " " : tok}
        </span>
      ))}
      <span className="sr-only">{text}</span>
    </span>
  );
}
