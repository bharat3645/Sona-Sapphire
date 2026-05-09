import { CONTACT, SOCIALS } from "@/data/content";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sona-sapphire.vercel.app";

/**
 * JSON-LD structured data block. Renders in <head> via a single
 * <script type="application/ld+json"> tag. Search engines (and AI
 * surfaces that read schema.org graphs) parse this for the knowledge
 * panel — agency name, social handles, contact, services list.
 */
export function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}#organization`,
        name: CONTACT.legal,
        alternateName: CONTACT.alt,
        url: SITE_URL,
        logo: `${SITE_URL}/icon.png`,
        image: `${SITE_URL}/opengraph-image`,
        description:
          "A creative-and-growth studio for brands that refuse the average. Cinematic ads, social systems, websites, and brand — built end to end.",
        foundingDate: "2024",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: CONTACT.phone,
          email: CONTACT.email,
          contactType: "customer support",
          areaServed: "Worldwide",
          availableLanguage: ["English", "Hindi"],
        },
        sameAs: SOCIALS.map((s) => s.href),
        knowsAbout: [
          "Advertisement Videos",
          "Social Media Management",
          "Website Development",
          "Brand Development",
          "Digital Marketing",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}#website`,
        url: SITE_URL,
        name: CONTACT.legal,
        publisher: { "@id": `${SITE_URL}#organization` },
        inLanguage: "en-US",
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}#service`,
        name: CONTACT.legal,
        url: SITE_URL,
        image: `${SITE_URL}/opengraph-image`,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressCountry: "IN",
        },
        areaServed: { "@type": "Country", name: "Worldwide" },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Practices",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Advertisement Videos" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Handling" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Development" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brand Development" } },
          ],
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // Server-rendered; the JSON is already escaped via JSON.stringify and
      // contains no user input, so this dangerouslySetInnerHTML usage is safe.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
