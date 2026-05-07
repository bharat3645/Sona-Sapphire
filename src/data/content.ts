export interface ReelDef {
  readonly id: string;
  readonly src: string;
  readonly poster: string;
  readonly label: string;
  readonly tag: string;
  readonly client: string;
  readonly parallax: number;
}

export interface ServiceDef {
  readonly index: 1 | 2 | 3 | 4;
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
  readonly bullets: readonly string[];
  readonly samples: readonly { readonly src: string; readonly label: string }[];
  readonly hue: "ad" | "social" | "web" | "brand";
}

export interface StatDef {
  readonly target: number;
  readonly label: string;
  readonly suffix?: string;
}

export interface SocialDef {
  readonly label: string;
  readonly handle: string;
  readonly href: string;
}

export interface ProcessStep {
  readonly index: 1 | 2 | 3 | 4;
  readonly title: string;
  readonly body: string;
}

const UNS = (id: string, w = 1920) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

/* ────────────────────────────────────────────────────────────────────────── */
/*  Reels — Mixkit CC0 streams; posters from Unsplash. Swap by editing src.  */
/* ────────────────────────────────────────────────────────────────────────── */

export const REELS: readonly ReelDef[] = [
  {
    id: "reel-1",
    src: "https://assets.mixkit.co/videos/4775/4775-720.mp4",
    poster: UNS("1492691527719-9d1e07e534b4"),
    label: "Brand Films",
    tag: "Hero · 2026",
    client: "D2C · Education · Fintech",
    parallax: 0.18,
  },
  {
    id: "reel-2",
    src: "https://assets.mixkit.co/videos/41540/41540-720.mp4",
    poster: UNS("1611162616305-c69b3fa7fbe0"),
    label: "Performance Ads",
    tag: "Conversion · Scale",
    client: "Avg. ROAS lift +320%",
    parallax: 0.22,
  },
  {
    id: "reel-3",
    src: "https://assets.mixkit.co/videos/22755/22755-720.mp4",
    poster: UNS("1540575467063-178a50c2df87"),
    label: "Social Reels",
    tag: "IG · YT · FB",
    client: "600+ shorts shipped",
    parallax: 0.28,
  },
  {
    id: "reel-4",
    src: "https://assets.mixkit.co/videos/5060/5060-720.mp4",
    poster: UNS("1467232004584-a241de8bcf5d"),
    label: "Product Showcase",
    tag: "E-comm · D2C",
    client: "Catalogues · Launches",
    parallax: 0.34,
  },
] as const;

/* ────────────────────────────────────────────────────────────────────────── */
/*  Services                                                                  */
/* ────────────────────────────────────────────────────────────────────────── */

export const SERVICES: readonly ServiceDef[] = [
  {
    index: 1,
    title: "Advertisement Videos",
    subtitle: "Stories that sell",
    description:
      "Cinematic ads built around a single insight — frame-perfect storytelling with the production rigour of a studio and the speed of a creator team. From classroom to checkout.",
    bullets: [
      "School ads & education spots",
      "Business promos & TVCs",
      "Product reels & explainers",
      "Cut-downs for every channel",
    ],
    samples: [
      { src: UNS("1486312338219-ce68d2c6f44d", 900), label: "Education" },
      { src: UNS("1556761175-5973dc0f32e7", 900), label: "Business" },
      { src: UNS("1542038784456-1ea8e935640e", 900), label: "Product" },
    ],
    hue: "ad",
  },
  {
    index: 2,
    title: "Social Media Handling",
    subtitle: "Compounding attention",
    description:
      "Strategy, content, community — engineered to grow channels weekly, not yearly. We run the calendar, the studio, and the engagement loop end-to-end.",
    bullets: [
      "Instagram growth systems",
      "Facebook & Meta Ads",
      "YouTube channel architecture",
      "Community + DM ops",
    ],
    samples: [
      { src: UNS("1611162616475-46b635cb6868", 900), label: "Instagram" },
      { src: UNS("1550745165-9bc0b252726f", 900), label: "Engagement" },
      { src: UNS("1497366216548-37526070297c", 900), label: "Calendar" },
    ],
    hue: "social",
  },
  {
    index: 3,
    title: "Website Development",
    subtitle: "Sites that convert",
    description:
      "Business sites, landing pages, and software products built on the same stack as Awwwards winners — with the conversion instrumentation that actually moves revenue.",
    bullets: [
      "Business websites",
      "Landing pages & funnels",
      "Software products & dashboards",
      "Headless commerce",
    ],
    samples: [
      { src: UNS("1521737604893-d14cc237f11d", 900), label: "Web build" },
      { src: UNS("1559136555-9303baea8ebd", 900), label: "Product" },
      { src: UNS("1556745753-b2904692b3cd", 900), label: "E-comm" },
    ],
    hue: "web",
  },
  {
    index: 4,
    title: "Brand Development",
    subtitle: "Identity, end to end",
    description:
      "Naming, voice, mark, and a launch playbook — wrapped into a single delivery a small team can run. We make sure the brand survives first contact with growth.",
    bullets: [
      "Identity systems & wordmarks",
      "Voice, messaging, copy decks",
      "Launch & rollout playbooks",
      "Guidelines & governance",
    ],
    samples: [
      { src: UNS("1492691527719-9d1e07e534b4", 900), label: "Mark" },
      { src: UNS("1467232004584-a241de8bcf5d", 900), label: "Tone" },
      { src: UNS("1540575467063-178a50c2df87", 900), label: "System" },
    ],
    hue: "brand",
  },
] as const;

/* ────────────────────────────────────────────────────────────────────────── */
/*  Process                                                                   */
/* ────────────────────────────────────────────────────────────────────────── */

export const PROCESS: readonly ProcessStep[] = [
  {
    index: 1,
    title: "Diagnose",
    body:
      "We map the funnel — where attention enters, where it stalls, where revenue actually closes — before a single frame is shot.",
  },
  {
    index: 2,
    title: "Direct",
    body:
      "Concept, script, and storyboard. A single creative director on every project, briefed on the metric we're moving.",
  },
  {
    index: 3,
    title: "Deliver",
    body:
      "Cinematic production + paid distribution + content engines — running on a weekly drumbeat, not a quarterly campaign.",
  },
  {
    index: 4,
    title: "Defend",
    body:
      "Test, learn, and compound. Every win turns into a system we hand back to your team, with documentation and dashboards.",
  },
] as const;

/* ────────────────────────────────────────────────────────────────────────── */
/*  Stats                                                                     */
/* ────────────────────────────────────────────────────────────────────────── */

export const STATS: readonly StatDef[] = [
  { target: 120, label: "Projects shipped" },
  { target: 48, label: "Active clients" },
  { target: 600, label: "Reels produced", suffix: "+" },
  { target: 320, label: "Avg. growth", suffix: "%" },
] as const;

/* ────────────────────────────────────────────────────────────────────────── */
/*  Editorial copy                                                            */
/* ────────────────────────────────────────────────────────────────────────── */

export const HERO_TAGLINE =
  "A creative-and-growth studio for brands that refuse the average. Cinematic ads, social systems, websites, and brand — built end to end.";

export const ABOUT_BODY =
  "Sona Sapphire is a creative-and-growth studio working at the intersection of cinema and analytics. We pair frame-perfect storytelling with the operating systems — funnels, content engines, websites — that turn attention into revenue.";

export const QUOTE = {
  body:
    "We don't decorate brands. We build the system that grows them — and then we hand it back to your team, fully instrumented.",
  attr: "Sona Sapphire — Studio Note",
};

export const MARQUEE: readonly string[] = [
  "Digital Growth",
  "Creative Media",
  "Web Solutions",
  "Brand Systems",
  "Performance Ads",
  "Social at Scale",
];

/* ────────────────────────────────────────────────────────────────────────── */
/*  Contact                                                                   */
/* ────────────────────────────────────────────────────────────────────────── */

export const SOCIALS: readonly SocialDef[] = [
  { label: "Instagram", handle: "@sonasapphire", href: "https://instagram.com" },
  { label: "YouTube", handle: "/sonasapphire", href: "https://youtube.com" },
  { label: "LinkedIn", handle: "Sona Sapphire", href: "https://linkedin.com" },
] as const;

export const CONTACT = {
  phone: "+91 88818 57060",
  phoneHref: "tel:+918881857060",
  email: "sonassapphireglobalsolution@gmail.com",
  emailHref: "mailto:sonassapphireglobalsolution@gmail.com",
  legal: "Sona Sapphire Global Solutions",
  alt: "Sona's Sapphire Media International",
  est: "Est. 2024 · Based in India · Working worldwide",
} as const;
