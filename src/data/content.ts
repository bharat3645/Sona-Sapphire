export interface ReelDef {
  readonly id: string;
  readonly src?: string;
  readonly poster: string;
  readonly label: string;
  readonly tag: string;
  readonly client: string;
  readonly format: string;
  readonly tc: string;
  readonly parallax: number;
}

export interface ServiceDef {
  readonly index: 1 | 2 | 3 | 4;
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
  readonly capabilities: readonly string[];
  readonly bullets: readonly string[];
  readonly samples: readonly { readonly src: string; readonly label: string }[];
  readonly hue: "ad" | "social" | "web" | "brand";
}

export interface StatDef {
  readonly target: number;
  readonly label: string;
  readonly suffix?: string;
}

export type SocialKind = "instagram" | "youtube" | "linkedin";

export interface SocialDef {
  readonly kind: SocialKind;
  readonly label: string;
  readonly handle: string;
  readonly href: string;
}

export interface ProcessStep {
  readonly index: 1 | 2 | 3 | 4;
  readonly title: string;
  readonly body: string;
}

export interface WorkTile {
  readonly id: string;
  readonly title: string;
  readonly tag: string;
  readonly poster: string;
  readonly href?: string;
  readonly feature?: boolean;
  readonly subtitle?: string;
}

const UNS = (id: string, w = 1920) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

/* ────────────────────────────────────────────────────────────────────────── */
/*  Reels                                                                     */
/* ────────────────────────────────────────────────────────────────────────── */

export const REELS: readonly ReelDef[] = [
  {
    id: "reel-1",
    src: "/videos/IMG_9966.mp4",
    poster: UNS("1485846234645-a62644f84728"),
    label: "Cinematic Brand Films",
    tag: "Reel 01 · Advertisement",
    client: "School ads · Promos · Reels",
    format: "4K · 2.35:1 · 24p",
    tc: "01:00:14:08",
    parallax: 0.16,
  },
  {
    id: "reel-2",
    src: "/videos/pal-college.mp4",
    poster: UNS("1611162616475-46b635cb6868"),
    label: "PAL College — Long-form",
    tag: "Reel 02 · Education",
    client: "Campus film · Profile · Recruitment",
    format: "1080p · 16:9 · 25fps",
    tc: "01:00:38:21",
    parallax: 0.22,
  },
] as const;

/* ────────────────────────────────────────────────────────────────────────── */
/*  Services — four practices, each one a deep vertical the studio runs       */
/*  end to end. The `capabilities` array surfaces the breadth of each;        */
/*  `bullets` are the at-a-glance scope pitched to a CMO.                     */
/* ────────────────────────────────────────────────────────────────────────── */

export const SERVICES: readonly ServiceDef[] = [
  {
    index: 1,
    title: "Advertisement Videos",
    subtitle: "Cinema for brands · Frame-perfect storytelling",
    description:
      "A full production house under one roof. We take a single insight from kickoff to broadcast — concepting and scripting, directing on set, finishing in colour and sound, then cutting for every channel a campaign needs. Every frame is briefed against the metric we're moving.",
    capabilities: [
      "Concept & script",
      "Storyboard & moodboards",
      "Director · DOP · sound",
      "Colour & post",
      "Motion graphics",
      "Channel-native cut-downs",
    ],
    bullets: [
      "School & education campaigns",
      "Business promos, TVCs, founder films",
      "Product reels, demos, explainers",
      "Performance creative (A/B variants at scale)",
      "Brand films & manifesto cinema",
      "Channel cut-downs (TV / IG / YT / OOH)",
    ],
    samples: [
      { src: UNS("1485827404703-89b55fcc595e", 900), label: "Director" },
      { src: UNS("1500917293891-ef795e70e1a3", 900), label: "Lens" },
      { src: UNS("1517245386807-bb43f82c33c4", 900), label: "Studio" },
    ],
    hue: "ad",
  },
  {
    index: 2,
    title: "Social Media Handling",
    subtitle: "A weekly drumbeat · Compounding attention",
    description:
      "Your channel team without the headcount. We own the calendar, shoot the assets, write the captions, place the paid spend, and reply in the DMs — running as a single operating system across Instagram, YouTube, Facebook, and LinkedIn. Reports land monthly with the next month already scripted.",
    capabilities: [
      "Channel strategy",
      "Content calendar",
      "In-house creator team",
      "Paid distribution (Meta · Google)",
      "Community + DM ops",
      "Monthly reporting",
    ],
    bullets: [
      "Instagram growth & reels engine",
      "YouTube channel architecture & long-form",
      "Meta Ads (Facebook + Instagram)",
      "LinkedIn for founders & B2B",
      "Influencer & creator collaborations",
      "Analytics, attribution, monthly playbooks",
    ],
    samples: [
      { src: UNS("1611162616475-46b635cb6868", 900), label: "Mobile" },
      { src: UNS("1611605698335-8b1569810432", 900), label: "Reels" },
      { src: UNS("1611162617213-7d7a39e9b1d7", 900), label: "Channel" },
    ],
    hue: "social",
  },
  {
    index: 3,
    title: "Website Development",
    subtitle: "Sites engineered for revenue · Built on the same stack as Awwwards winners",
    description:
      "Marketing sites, landing pages, e-commerce, and full software products built in Next.js, React, and headless CMSes. Every build ships with conversion instrumentation, SEO foundations, and the operations docs so your team can run it after launch.",
    capabilities: [
      "Marketing & business sites",
      "Landing pages & funnels",
      "E-commerce (Shopify · headless)",
      "Software products & dashboards",
      "Headless CMS integration",
      "Performance + SEO baked in",
    ],
    bullets: [
      "Cinematic business websites (Next.js + Sanity/Contentful)",
      "High-converting landing pages (full A/B instrumentation)",
      "Software apps & internal dashboards",
      "Shopify storefronts & headless commerce",
      "API integrations · auth · payments",
      "Core Web Vitals tuned, indexable from day one",
    ],
    samples: [
      { src: UNS("1551434678-e076c223a692", 900), label: "Build" },
      { src: UNS("1593642632559-0c6d3fc62b89", 900), label: "Code" },
      { src: UNS("1505740420928-5e560c06d30e", 900), label: "Product" },
    ],
    hue: "web",
  },
  {
    index: 4,
    title: "Brand Development",
    subtitle: "Identity, end to end · Naming through rollout",
    description:
      "Foundations work. We sit with founders to find the brand's real position, name it, draw its mark, set its palette, write its voice, and ship the playbook your team uses every quarter. Built to survive first contact with growth.",
    capabilities: [
      "Brand strategy & positioning",
      "Naming & verbal identity",
      "Logo, palette, typography",
      "Voice & messaging decks",
      "Launch playbooks",
      "Guidelines & governance",
    ],
    bullets: [
      "Brand strategy workshops (founder + leadership)",
      "Naming sprints with verification",
      "Identity systems — logo, palette, typography, motion",
      "Tone-of-voice & messaging frameworks",
      "Launch playbooks for marketing, sales, HR",
      "Rebrands & evolution of existing identities",
    ],
    samples: [
      { src: UNS("1581094794329-c8112a89af12", 900), label: "System" },
      { src: UNS("1559056199-641a0ac8b55e", 900), label: "Studio" },
      { src: UNS("1496181133206-80ce9b88a853", 900), label: "Print" },
    ],
    hue: "brand",
  },
] as const;

/* ────────────────────────────────────────────────────────────────────────── */
/*  Selected Work — feature tile leads with the website-build story, then     */
/*  five tiles rotate across the other practices for variety. The poster     */
/*  imagery was re-curated to read more like a production reel than stock.   */
/* ────────────────────────────────────────────────────────────────────────── */

export const WORK: readonly WorkTile[] = [
  {
    id: "feature-web",
    feature: true,
    title: "Sites That Convert",
    subtitle: "Next.js builds · Conversion-instrumented · Hand-back ready",
    tag: "Featured · Web Build",
    poster: UNS("1551434678-e076c223a692"),
    href: "#inquiry",
  },
  {
    id: "work-ad",
    title: "On Set — Brand Film",
    tag: "Advertisement",
    poster: UNS("1485827404703-89b55fcc595e", 1200),
  },
  {
    id: "work-social",
    title: "Reels That Compound",
    tag: "Social Media",
    poster: UNS("1611162616475-46b635cb6868", 1200),
  },
  {
    id: "work-product",
    title: "Product Stories",
    tag: "E-commerce",
    poster: UNS("1556761175-5973dc0f32e7", 1200),
  },
  {
    id: "work-edu",
    title: "Education — Long Form",
    tag: "Campus Film",
    poster: UNS("1486312338219-ce68d2c6f44d", 1200),
  },
  {
    id: "work-brand",
    title: "Identity Systems",
    tag: "Brand",
    poster: UNS("1581094794329-c8112a89af12", 1200),
  },
] as const;

/* ────────────────────────────────────────────────────────────────────────── */

export const PROCESS: readonly ProcessStep[] = [
  { index: 1, title: "Diagnose", body: "We map the funnel — where attention enters, where it stalls, where revenue actually closes — before a single frame is shot." },
  { index: 2, title: "Direct",   body: "Concept, script, storyboard. A single creative director on every project, briefed on the metric we're moving." },
  { index: 3, title: "Deliver",  body: "Cinematic production + paid distribution + content engines — running on a weekly drumbeat, not a quarterly campaign." },
  { index: 4, title: "Defend",   body: "Test, learn, and compound. Every win turns into a system we hand back to your team, with documentation and dashboards." },
] as const;

export const STATS: readonly StatDef[] = [
  { target: 120, label: "Projects shipped" },
  { target: 48,  label: "Active clients" },
  { target: 320, label: "Avg. growth", suffix: "%" },
] as const;

export const ABOUT_BODY =
  "Sona Sapphire is a creative-and-growth studio working at the intersection of cinema and analytics. We pair frame-perfect storytelling with the operating systems — funnels, content engines, websites — that turn attention into revenue.";

export const QUOTE = {
  body:
    "We don't decorate brands. We build the system that grows them — and then we hand it back to your team, fully instrumented.",
  attr: "Sona Sapphire — Studio Note",
};

export const MARQUEE: readonly string[] = [
  "Advertisement Videos",
  "Social Media Handling",
  "Website Development",
  "Brand Development",
  "Cinematic Creative",
  "Measurable Growth",
];

export const SOCIALS: readonly SocialDef[] = [
  { kind: "instagram", label: "Instagram", handle: "@sonasapphire", href: "https://www.instagram.com/sonasapphire" },
  { kind: "youtube",   label: "YouTube",   handle: "@sonasapphire", href: "https://www.youtube.com/@sonasapphire" },
  { kind: "linkedin",  label: "LinkedIn",  handle: "Sona Sapphire", href: "https://www.linkedin.com/company/sona-sapphire" },
] as const;

export const SERVICE_TYPES = [
  "Advertisement Videos",
  "Social Media Handling",
  "Website Development",
  "Brand Development",
  "Other",
] as const;

export type ServiceType = (typeof SERVICE_TYPES)[number];

export const CONTACT = {
  phone: "+91 88818 57060",
  phoneHref: "tel:+918881857060",
  email: "info@sonasapphire.com",
  emailHref: "mailto:info@sonasapphire.com",
  legal: "Sona Sapphire Global Solutions",
  alt: "Sona's Sapphire Media International",
  est: "Est. 2024 · Based in India · Working worldwide",
} as const;
