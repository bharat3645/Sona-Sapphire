import { SERVICES } from "@/data/content";
import { ServiceRow } from "./ServiceRow";

export function ServicesGlide() {
  return (
    <section id="services" className="services" aria-label="Services">
      <div className="shell">
        <div className="services__head">
          <div>
            <span className="eyebrow">Capabilities · 2026</span>
            <h2 className="services__title">
              Cinematic <em>creative</em>. Measurable <em>growth</em>.
            </h2>
          </div>
          <p className="services__lede">
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
