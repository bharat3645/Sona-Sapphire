import Image from "next/image";
import { LEADERSHIP, TEAM_EXPERIENCE } from "@/data/content";

export function Leadership() {
  return (
    <section
      id="leadership"
      className="leadership"
      aria-label="Leadership"
    >
      <div className="shell">
        <div className="leadership__head">
          <span
            className="eyebrow"
            data-string="parallax"
            data-string-id="lead-eyebrow"
            data-string-parallax="0.12"
          >
            The Studio · 2026
          </span>
          <h2
            className="leadership__title"
            data-string="parallax"
            data-string-id="lead-title"
            data-string-parallax="-0.06"
          >
            The people <em>behind</em> the work.
          </h2>
          <p
            className="leadership__lede"
            data-string="parallax"
            data-string-id="lead-lede"
            data-string-parallax="0.08"
          >
            A small founding team plus a deep media + engineering bench. Every
            project ships with one of the founders on it; every craft seat is
            held by someone with years on the practice, not weeks.
          </p>
        </div>

        <div className="leadership__experience" aria-label="Team experience">
          {TEAM_EXPERIENCE.map((t) => (
            <div key={t.team} className="leadership__exp-card">
              <span className="leadership__exp-years">{t.years}</span>
              <div className="leadership__exp-body">
                <span className="leadership__exp-label">{t.team}</span>
                <span className="leadership__exp-note">{t.note}</span>
                <span className="leadership__exp-unit">
                  years on the bench
                </span>
              </div>
            </div>
          ))}
        </div>

        <ul className="leadership__grid">
          {LEADERSHIP.map((leader, i) => (
            <li
              key={leader.id}
              className="leadership__card"
              data-string="parallax"
              data-string-id={`lead-card-${leader.id}`}
              data-string-parallax={(0.06 + i * 0.05).toFixed(2)}
            >
              <div className="leadership__photo">
                <Image
                  src={leader.photo}
                  alt={`${leader.name} — ${leader.role}`}
                  fill
                  sizes="(min-width: 880px) 33vw, 100vw"
                />
                <div className="leadership__photo-overlay" aria-hidden="true" />
              </div>
              <div className="leadership__body">
                <span className="leadership__role">{leader.role}</span>
                <h3 className="leadership__name">{leader.name}</h3>
                <p className="leadership__bio">{leader.bio}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
