import { MARQUEE } from "@/data/content";

interface Props {
  readonly invert?: boolean;
}

export function Marquee({ invert = false }: Props) {
  const items = MARQUEE;
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
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
