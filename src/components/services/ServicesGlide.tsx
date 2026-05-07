import { SERVICES } from "@/data/content";
import { ServiceCard } from "./ServiceCard";

export function ServicesGlide() {
  return (
    <section id="services" className="services" aria-label="Services">
      <div className="services__head">
        <span className="services__eyebrow">Capabilities · 2026</span>
        <h2 className="services__title">
          Cinematic creative. <em>Measurable</em> growth.
        </h2>
      </div>

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
    </section>
  );
}
