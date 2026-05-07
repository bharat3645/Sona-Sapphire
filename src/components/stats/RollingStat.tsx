import type { CSSProperties } from "react";
import type { StatDef } from "@/data/content";

interface Props {
  readonly stat: StatDef;
}

export function RollingStat({ stat }: Props) {
  const styleVars = {
    "--rolled": `calc(var(--stats, 0) * ${stat.target})`,
  } as CSSProperties & Record<"--rolled", string>;

  return (
    <div className="rolling-stat">
      <div
        className="rolling-stat__value"
        style={styleVars}
        data-suffix={stat.suffix ?? ""}
        aria-label={`${stat.target}${stat.suffix ?? ""} ${stat.label}`}
      />
      <div className="rolling-stat__label">{stat.label}</div>
      <div className="rolling-stat__bar" aria-hidden="true" />
    </div>
  );
}
