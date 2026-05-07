import type { CSSProperties } from "react";
import type { StatDef } from "@/data/content";

interface Props {
  readonly stat: StatDef;
  readonly index: number;
}

export function RollingStat({ stat, index }: Props) {
  const styleVars = {
    "--rolled": `calc(var(--stats, 0) * ${stat.target})`,
    "--idx": index,
  } as CSSProperties & Record<"--rolled" | "--idx", string | number>;

  return (
    <div
      className="rolling-stat"
      style={styleVars}
      data-string="parallax"
      data-string-id={`stat-${index}`}
      data-string-parallax={(0.04 + index * 0.03).toFixed(2)}
    >
      <div
        className="rolling-stat__value"
        data-suffix={stat.suffix ?? ""}
        aria-label={`${stat.target}${stat.suffix ?? ""} ${stat.label}`}
      />
      <div className="rolling-stat__label">{stat.label}</div>
      <div className="rolling-stat__bar" aria-hidden="true" />
    </div>
  );
}
