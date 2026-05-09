import Image from "next/image";
import type { WorkTile as WorkTileDef } from "@/data/content";

interface Props {
  readonly tile: WorkTileDef;
  readonly index: number;
}

export function WorkTile({ tile, index }: Props) {
  const Tag = tile.href ? "a" : "div";
  const props = tile.href
    ? { href: tile.href, target: tile.href.startsWith("http") ? "_blank" : undefined, rel: "noreferrer noopener" as const }
    : {};

  return (
    <Tag
      className="work-tile"
      data-feature={tile.feature ? "true" : undefined}
      data-string="parallax"
      data-string-id={`work-${tile.id}`}
      data-string-parallax={(0.06 + (index % 3) * 0.05).toFixed(2)}
      {...props}
    >
      <div className="work-tile__image">
        <Image
          src={tile.poster}
          alt={tile.title}
          fill
          sizes={tile.feature ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
        />
      </div>
      <div className="work-tile__overlay" aria-hidden="true" />
      <div className="work-tile__body">
        <span className="work-tile__tag">{tile.tag}</span>
        <h3 className="work-tile__title">{tile.title}</h3>
        {tile.subtitle ? <p className="work-tile__subtitle">{tile.subtitle}</p> : null}
        {tile.feature ? <span className="work-tile__cta">Brief a build →</span> : null}
      </div>
    </Tag>
  );
}
