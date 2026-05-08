import { SERVICES } from "@/data/content";
import { ServiceRow } from "./ServiceRow";

export function ServicesGlide() {
  return (
    <section id="services" className="services" aria-label="Services">
      <div className="shell">
        <div className="services__head">
          <div>
            <span
              className="eyebrow"
              data-string="parallax"
              data-string-id="svc-eyebrow"
              data-string-parallax="0.14"
            >
              Capabilities · 2026
            </span>
            <h2
              className="services__title"
              data-string="parallax"
              data-string-id="svc-title"
              data-string-parallax="-0.06"
            >
              Cinematic <em>creative</em>.
              <br />
              Measurable <em>growth</em>.
            </h2>
          </div>
          <p
            className="services__lede"
            data-string="parallax"
            data-string-id="svc-lede"
            data-string-parallax="0.1"
          >
            Four practices, one studio. We pair frame-perfect storytelling with
            the operating systems — funnels, content engines, websites — that
            turn attention into revenue.
          </p>
        </div>

        <ul className="services__list">
          {SERVICES.map((s, i) => (
            <ServiceRow key={s.index} service={s} defaultOpen={i === 0} />
          ))}
        </ul>
      </div>
    </section>
  );
}
