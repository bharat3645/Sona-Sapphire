import {
  CONTACT,
  LEADERSHIP,
  SERVICES,
  SOCIALS,
} from "@/data/content";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sona-sapphire.vercel.app";

const FAQ: readonly { readonly q: string; readonly a: string }[] = [
  {
    q: "What does Sona Sapphire Global Solutions do?",
    a: "Sona Sapphire Global Solutions is a creative-and-growth studio offering advertisement video production, social media handling, custom website development, and brand development. We run each practice end-to-end — from strategy and concept through production, launch, and measurement.",
  },
  {
    q: "Where is Sona Sapphire based, and which regions do you serve?",
    a: "Sona Sapphire is based in India and works with clients worldwide. The studio operates remotely-first with on-set production crews across India and a development bench that ships for clients in APAC, the Middle East, the UK, and North America.",
  },
  {
    q: "What kind of video projects do you produce?",
    a: "Cinematic brand films, TVCs, founder films, product reels, education and campus films, Instagram and YouTube reels, performance-creative A/B variants, OOH cut-downs, and long-form documentary content. Every shoot is briefed against the metric the campaign is moving.",
  },
  {
    q: "What is included in your social media handling service?",
    a: "End-to-end channel management for Instagram, YouTube, Facebook, and LinkedIn — strategy, content calendar, asset production, captions, paid distribution on Meta and Google, community and DM operations, and monthly reporting with the next month already scripted.",
  },
  {
    q: "What technologies do you use for website development?",
    a: "Next.js, React, TypeScript, Tailwind CSS, and headless CMSes including Sanity and Contentful. We build marketing sites, landing pages, Shopify and headless storefronts, software products, internal dashboards, and API integrations — all tuned for Core Web Vitals and indexable from day one.",
  },
  {
    q: "How does the brand development process work?",
    a: "We start with founder and leadership workshops to find the brand's real position. Then naming, logo and identity system, palette, typography, motion, tone-of-voice, messaging frameworks, and launch playbooks for marketing, sales, and HR. The deliverable is a system your team can run after we hand it back.",
  },
  {
    q: "How long does the team have in the industry?",
    a: "The media team has seven years on set — production, post, and paid distribution — and the development bench has three years shipping web and software products across e-commerce and SaaS.",
  },
  {
    q: "How do I start a project with Sona Sapphire?",
    a: `Submit the inquiry form at ${SITE_URL}#inquiry, email ${CONTACT.email}, or call ${CONTACT.phone}. We typically reply within 24 hours, IST or anywhere in the world.`,
  },
];

const SERVICE_NODE = (s: (typeof SERVICES)[number]) => ({
  "@type": "Service",
  "@id": `${SITE_URL}#service-${s.hue}`,
  name: s.title,
  alternateName: s.subtitle,
  description: s.description,
  serviceType: s.title,
  provider: { "@id": `${SITE_URL}#organization` },
  areaServed: { "@type": "Place", name: "Worldwide" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: `${s.title} — Capabilities`,
    itemListElement: s.bullets.map((b, i) => ({
      "@type": "Offer",
      position: i + 1,
      itemOffered: { "@type": "Service", name: b },
    })),
  },
});

const PERSON_NODE = (p: (typeof LEADERSHIP)[number]) => ({
  "@type": "Person",
  "@id": `${SITE_URL}#person-${p.id}`,
  name: p.name,
  jobTitle: p.role,
  description: p.bio,
  image: `${SITE_URL}${p.photo}`,
  worksFor: { "@id": `${SITE_URL}#organization` },
});

/**
 * JSON-LD knowledge graph. Renders one <script type="application/ld+json">
 * with an @graph containing Organization + LocalBusiness, WebSite (with
 * SiteNavigationElement + SearchAction), four Service nodes, leadership
 * Person entries, FAQPage, and BreadcrumbList. Search engines and AI
 * surfaces use this for knowledge panels, rich results, and topic
 * understanding across the agency's domains of expertise.
 */
export function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
        "@id": `${SITE_URL}#organization`,
        name: CONTACT.legal,
        alternateName: [CONTACT.alt, "Sona Sapphire", "Sona Sapphire GS"],
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/icon.png`,
          width: 512,
          height: 512,
        },
        image: `${SITE_URL}/opengraph-image`,
        description:
          "Sona Sapphire Global Solutions is a creative-and-growth studio. Cinematic advertisement videos, end-to-end social media handling, custom website development in Next.js, and brand development — all built under one roof for brands that refuse the average.",
        slogan: "Cinematic creative. Measurable growth.",
        foundingDate: "2024",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressCountry: "IN",
          addressRegion: "India",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: CONTACT.phone,
            email: CONTACT.email,
            contactType: "customer support",
            areaServed: "Worldwide",
            availableLanguage: ["English", "Hindi"],
          },
          {
            "@type": "ContactPoint",
            telephone: CONTACT.phone,
            email: CONTACT.email,
            contactType: "sales",
            areaServed: "Worldwide",
            availableLanguage: ["English", "Hindi"],
          },
        ],
        sameAs: SOCIALS.map((s) => s.href),
        knowsAbout: [
          "Advertisement Videos",
          "Cinematic Brand Films",
          "TVC Production",
          "Reels Production",
          "Education Campaign Films",
          "Social Media Management",
          "Instagram Marketing",
          "YouTube Channel Strategy",
          "Meta Ads",
          "LinkedIn for Founders",
          "Website Development",
          "Next.js Web Development",
          "React Web Applications",
          "Shopify and Headless Commerce",
          "Core Web Vitals Optimization",
          "Search Engine Optimization",
          "Brand Strategy",
          "Naming and Verbal Identity",
          "Logo and Identity Systems",
          "Tone of Voice and Messaging",
          "Launch Playbooks",
          "Digital Marketing",
          "Creative Direction",
          "Performance Creative",
        ],
        knowsLanguage: ["en", "hi"],
        areaServed: [
          { "@type": "Country", name: "India" },
          { "@type": "Place", name: "Worldwide" },
        ],
        makesOffer: SERVICES.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@id": `${SITE_URL}#service-${s.hue}` },
        })),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Practices",
          itemListElement: SERVICES.map((s, i) => ({
            "@type": "Offer",
            position: i + 1,
            itemOffered: { "@id": `${SITE_URL}#service-${s.hue}` },
          })),
        },
        employee: LEADERSHIP.map((p) => ({ "@id": `${SITE_URL}#person-${p.id}` })),
        numberOfEmployees: { "@type": "QuantitativeValue", minValue: 10, maxValue: 30 },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}#website`,
        url: SITE_URL,
        name: CONTACT.legal,
        alternateName: "Sona Sapphire",
        description:
          "Sona Sapphire Global Solutions — creative-and-growth studio for advertisement videos, social media handling, website development, and brand development.",
        publisher: { "@id": `${SITE_URL}#organization` },
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE_URL}/?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      ...SERVICES.map(SERVICE_NODE),
      ...LEADERSHIP.map(PERSON_NODE),
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}#faq`,
        mainEntity: FAQ.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Work", item: `${SITE_URL}#work` },
          { "@type": "ListItem", position: 3, name: "Services", item: `${SITE_URL}#services` },
          { "@type": "ListItem", position: 4, name: "About", item: `${SITE_URL}#about` },
          { "@type": "ListItem", position: 5, name: "Selected Work", item: `${SITE_URL}#work-showcase` },
          { "@type": "ListItem", position: 6, name: "Leadership", item: `${SITE_URL}#leadership` },
          { "@type": "ListItem", position: 7, name: "Inquiry", item: `${SITE_URL}#inquiry` },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
