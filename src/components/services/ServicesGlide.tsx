import { SERVICES } from "@/data/content";
import { ServiceCard } from "./ServiceCard";

export function ServicesGlide() {
  return (
    <section id="services" className="services" aria-label="Services">
      <div className="services__head">
        <div>
          <span className="services__eyebrow">Capabilities · 2026</span>
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

      <div className="services__rail-wrap">
        <div
          className="services__rail"
          data-string="glide"
          data-string-id="services-rail"
          data-string-glide="0.45"
        >
          {SERVICES.map((s) => (
            <ServiceCard key={s.index} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
