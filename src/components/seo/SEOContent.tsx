import { CONTACT, SERVICES } from "@/data/content";

/**
 * Long-form, crawlable copy block. Lives at the foot of the page above the
 * footer. Search engines and AI surfaces need actual prose to understand
 * what the studio does — the hero is image-and-animation heavy, so this is
 * the keyword-rich text body that anchors topical authority for each
 * practice. Visible, semantic, and styled like editorial endnotes.
 */
export function SEOContent() {
  return (
    <section
      id="about-studio"
      className="seo-content"
      aria-label="About Sona Sapphire Global Solutions"
    >
      <div className="shell seo-content__inner">
        <header className="seo-content__head">
          <span className="eyebrow">About the studio</span>
          <h2 className="seo-content__title">
            Sona Sapphire Global Solutions — a creative-and-growth studio
            based in India, working worldwide.
          </h2>
          <p className="seo-content__lede">
            Sona Sapphire Global Solutions (also known as Sona&rsquo;s Sapphire
            Media International) is a full-service creative agency offering
            cinematic advertisement videos, end-to-end social media handling,
            custom website development in Next.js, and brand development —
            all built under one roof. Founded in 2024, the studio pairs a
            seven-year media production team with a three-year web and
            software development bench so every project ships with both
            cinematic craft and the operating system to compound it.
          </p>
        </header>

        <div className="seo-content__grid">
          {SERVICES.map((s) => (
            <article key={s.title} className="seo-content__pillar">
              <h3 className="seo-content__pillar-title">{s.title}</h3>
              <p className="seo-content__pillar-body">{s.description}</p>
              <ul className="seo-content__pillar-list">
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="seo-content__faq">
          <h3 className="seo-content__faq-title">Frequently asked</h3>

          <details className="seo-content__faq-item">
            <summary>What kind of agency is Sona Sapphire?</summary>
            <p>
              A creative-and-growth studio. We run advertisement video
              production, social media handling, website development, and
              brand development as four end-to-end practices, then weave them
              together so a single client brief can land cinema, channels,
              and conversion in one engagement.
            </p>
          </details>

          <details className="seo-content__faq-item">
            <summary>Where is the studio based?</summary>
            <p>
              Sona Sapphire is based in India and works with clients
              worldwide. Production crews ship across India for on-set work;
              the development bench is remote-first and delivers across
              APAC, the Middle East, the UK, and North America.
            </p>
          </details>

          <details className="seo-content__faq-item">
            <summary>What types of videos do you produce?</summary>
            <p>
              Cinematic brand films, TVCs, founder films, education and
              campus films, product reels and demos, Instagram and YouTube
              reels, performance-creative A/B variants, OOH cut-downs, and
              long-form documentary content. Every shoot is briefed against
              the metric the campaign is moving.
            </p>
          </details>

          <details className="seo-content__faq-item">
            <summary>What does social media handling include?</summary>
            <p>
              Channel strategy, content calendar, asset production, captions,
              paid distribution on Meta and Google, community and DM
              operations, and monthly reporting — running as one operating
              system across Instagram, YouTube, Facebook, and LinkedIn.
            </p>
          </details>

          <details className="seo-content__faq-item">
            <summary>Which technologies do you use for websites?</summary>
            <p>
              Next.js, React, TypeScript, Tailwind CSS, and headless CMSes
              including Sanity and Contentful. We build marketing sites,
              landing pages, Shopify and headless storefronts, software
              products, internal dashboards, and API integrations — all
              tuned for Core Web Vitals and indexable from day one.
            </p>
          </details>

          <details className="seo-content__faq-item">
            <summary>How do I start a project?</summary>
            <p>
              Submit the inquiry form at the top of the page, email{" "}
              <a href={CONTACT.emailHref}>{CONTACT.email}</a>, or call{" "}
              <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>. We typically
              reply within 24 hours, IST or anywhere.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
