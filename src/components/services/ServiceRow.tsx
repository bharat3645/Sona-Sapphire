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
          data-string-id={`svc-title-${service.hue}`}
          data-string-strength="0.18"
          data-string-radius="220"
        >
          {service.title}
        </span>
        <span
          className="service-row__plus"
          aria-hidden="true"
          data-string="magnetic"
          data-string-id={`svc-plus-${service.hue}`}
          data-string-strength="0.45"
          data-string-radius="100"
        />
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
              data-string-strength="0.3"
              data-string-radius="160"
            >
              Brief us on this →
            </a>
          </div>

          <div className="service-row__samples">
            {service.samples.map((s, i) => (
              <div
                key={s.src}
                className="service-row__sample"
                data-label={s.label}
                data-string="parallax"
                data-string-id={`svc-${service.hue}-sample-${i}`}
                data-string-parallax={(0.08 + i * 0.06).toFixed(2)}
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
