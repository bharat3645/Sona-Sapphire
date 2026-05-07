export interface ReelDef {
  readonly id: string;
  readonly src?: string;
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
/*  Reels                                                                     */
/*                                                                            */
/*  Each reel slot represents one practice the agency runs. We use            */
/*  cinematic Unsplash imagery (with a subtle Ken-Burns slow-zoom) so the     */
/*  hero is never empty and every frame is visibly on-brand. When real        */
/*  client cuts are ready, set `src` on a reel to the MP4 URL and the         */
/*  player will overlay the still — no other code change required.            */
/* ────────────────────────────────────────────────────────────────────────── */

export const REELS: readonly ReelDef[] = [
  {
    id: "reel-1",
    poster: UNS("1485846234645-a62644f84728"),
    label: "Cinematic Brand Films",
    tag: "Reel 01 · Advertisement Videos",
    client: "School ads · Business promos · Reels",
    parallax: 0.16,
  },
  {
    id: "reel-2",
    poster: UNS("1611162616475-46b635cb6868"),
    label: "Social, At Scale",
    tag: "Reel 02 · Social Media Handling",
    client: "Instagram · Facebook · YouTube",
    parallax: 0.22,
  },
  {
    id: "reel-3",
    poster: UNS("1551836022-deb4988cc6c0"),
    label: "Sites That Convert",
    tag: "Reel 03 · Website Development",
    client: "Business sites · Landing pages · Software",
    parallax: 0.28,
  },
  {
    id: "reel-4",
    poster: UNS("1525909002-1b05e0c869d8"),
    label: "Brand Systems",
    tag: "Reel 04 · Brand Development",
    client: "Identity · Messaging · Launch playbooks",
    parallax: 0.32,
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
      { src: UNS("1485827404703-89b55fcc595e", 900), label: "Set" },
      { src: UNS("1518929458119-e5bf444c30f4", 900), label: "Lens" },
      { src: UNS("1517245386807-bb43f82c33c4", 900), label: "Studio" },
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
      { src: UNS("1611162616475-46b635cb6868", 900), label: "Mobile" },
      { src: UNS("1611605698335-8b1569810432", 900), label: "Reels" },
      { src: UNS("1611162617213-7d7a39e9b1d7", 900), label: "Channel" },
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
      { src: UNS("1551434678-e076c223a692", 900), label: "Build" },
      { src: UNS("1593642632559-0c6d3fc62b89", 900), label: "Code" },
      { src: UNS("1505740420928-5e560c06d30e", 900), label: "Product" },
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
      { src: UNS("1581094794329-c8112a89af12", 900), label: "System" },
      { src: UNS("1559056199-641a0ac8b55e", 900), label: "Studio" },
      { src: UNS("1496181133206-80ce9b88a853", 900), label: "Print" },
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
      "Concept, script, storyboard. A single creative director on every project, briefed on the metric we're moving.",
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
