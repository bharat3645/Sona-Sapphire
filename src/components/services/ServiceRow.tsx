"use client";

import Image from "next/image";
import { useState } from "react";
import type { ServiceDef } from "@/data/content";

interface Props {
  readonly service: ServiceDef;
  readonly defaultOpen?: boolean;
}

export function ServiceRow({ service, defaultOpen = false }: Props) {
  const [open, setOpen] = useState(defaultOpen);
  const idx = `0${service.index}`;
  const panelId = `svc-panel-${service.index}`;

  return (
    <li className="service-row" data-open={open} data-hue={service.hue}>
      <button
        type="button"
        className="service-row__toggle"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="service-row__index">{idx}</span>
        <span
          className="service-row__title"
          data-string="magnetic"
          data-string-id={`svc-${service.hue}`}
          data-string-strength="0.3"
          data-string-radius="180"
        >
          {service.title}
        </span>
        <span className="service-row__plus" aria-hidden="true" />
      </button>

      <div
        id={panelId}
        role="region"
        aria-label={service.title}
        className="service-row__panel"
      >
        <div className="service-row__panel-inner">
          <div className="service-row__copy">
            <span className="service-row__subtitle">{service.subtitle}</span>
            <p className="service-row__desc">{service.description}</p>
            <ul className="service-row__bullets">
              {service.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <a
              href="#contact"
              className="service-row__cta"
              data-string="magnetic"
              data-string-id={`svc-cta-${service.hue}`}
              data-string-strength="0.25"
              data-string-radius="140"
            >
              Brief us on this →
            </a>
          </div>

          <div className="service-row__samples">
            {service.samples.map((s) => (
              <div
                key={s.src}
                className="service-row__sample"
                data-label={s.label}
              >
                <Image
                  src={s.src}
                  alt={`${service.title} sample — ${s.label}`}
                  fill
                  sizes="(min-width: 880px) 32vw, 90vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
}
