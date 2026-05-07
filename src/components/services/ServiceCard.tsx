import type { ServiceDef } from "@/data/content";

interface Props {
  readonly service: ServiceDef;
}

export function ServiceCard({ service }: Props) {
  return (
    <article className="service-card" data-hue={service.hue}>
      <div className="service-card__decor" aria-hidden="true" />
      <svg
        className="service-card__diamond"
        viewBox="0 0 100 100"
        aria-hidden="true"
        style={{ color: "var(--c-gold)" }}
      >
        <g fill="none" stroke="currentColor" strokeWidth="0.6">
          <path d="M20 50 L50 10 L80 50 L50 90 Z" />
          <path d="M30 50 L50 25 L70 50 L50 75 Z" />
          <path d="M20 50 H80" />
          <path d="M50 10 V90" />
        </g>
      </svg>

      <header className="service-card__top">
        <span className="service-card__index">0{service.index}</span>
        <span className="service-card__subtitle">{service.subtitle}</span>
      </header>

      <div className="service-card__body">
        <h3
          className="service-card__title"
          data-string="magnetic"
          data-string-id={`svc-${service.hue}`}
          data-string-strength="0.4"
          data-string-radius="180"
        >
          {service.title}
        </h3>
        <p className="service-card__desc">{service.description}</p>
        <ul className="service-card__bullets">
          {service.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>

      <a
        href="#contact"
        className="service-card__cta"
        data-string="magnetic"
        data-string-id={`svc-cta-${service.hue}`}
        data-string-strength="0.3"
        data-string-radius="140"
      >
        Explore service
      </a>
    </article>
  );
}
