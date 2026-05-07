import type { ServiceDef } from "@/data/content";

interface Props {
  readonly service: ServiceDef;
}

export function ServiceCard({ service }: Props) {
  return (
    <article className="service-card" data-hue={service.hue}>
      <div className="service-card__glow" aria-hidden="true" />
      <header className="service-card__index">
        {String(service.index).padStart(2, "0")} / 04
      </header>
      <h3
        className="service-card__title"
        data-string="magnetic"
        data-string-id={`svc-${service.hue}`}
        data-string-strength="0.4"
        data-string-radius="180"
      >
        {service.title}
      </h3>
      <ul className="service-card__bullets">
        {service.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </article>
  );
}
