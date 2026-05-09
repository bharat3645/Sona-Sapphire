import { WORK } from "@/data/content";
import { WorkTile } from "./WorkTile";

export function WorkShowcase() {
  return (
    <section id="work-showcase" className="work" aria-label="Selected work">
      <div className="shell">
        <div className="work__head">
          <span
            className="eyebrow"
            data-string="parallax"
            data-string-id="work-eyebrow"
            data-string-parallax="0.12"
          >
            Selected Work · 2024–2026
          </span>
          <h2
            className="work__title"
            data-string="parallax"
            data-string-id="work-title"
            data-string-parallax="-0.06"
          >
            <em>Work</em> that compounds.
          </h2>
          <p
            className="work__lede"
            data-string="parallax"
            data-string-id="work-lede"
            data-string-parallax="0.08"
          >
            Recent cuts across our four practices. The feature on the left is
            our latest website build — Next.js, conversion-instrumented, fully
            handed back. The rest are samples from advertisement, social,
            education, and brand work.
          </p>
        </div>

        <div className="work__grid">
          {WORK.map((tile, idx) => (
            <WorkTile key={tile.id} tile={tile} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
