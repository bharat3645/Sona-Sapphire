import { MARQUEE } from "@/data/content";

interface Props {
  readonly invert?: boolean;
}

/**
 * Two-track marquee with edge-fade gradients. The OUTER wrapper carries a
 * StringGlide so the strip drifts with scroll inertia (left when scrolling
 * down, right when scrolling up) on top of the base CSS animation.
 */
export function Marquee({ invert = false }: Props) {
  const items = MARQUEE;
  return (
    <div className="marquee" aria-hidden="true">
      <div
        className="marquee__track"
        data-string="glide"
        data-string-id={`marquee-${invert ? "alt" : "main"}`}
        data-string-glide="0.35"
      >
        <div>
          {items.map((w, i) => (
            <span
              key={`a-${w}`}
              className={(invert ? i % 2 : (i + 1) % 2) ? "marquee__item--alt" : undefined}
            >
              {w}
            </span>
          ))}
        </div>
        <div>
          {items.map((w, i) => (
            <span
              key={`b-${w}`}
              className={(invert ? i % 2 : (i + 1) % 2) ? "marquee__item--alt" : undefined}
            >
              {w}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
