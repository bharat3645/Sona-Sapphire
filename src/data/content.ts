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

/**
 * Reel sources — Mixkit CC0 cinematic clips referenced via CDN. Replace any
 * `src` with a path under `/videos/` once you have real client cuts ready.
 */
export const REELS: readonly ReelDef[] = [
  {
    id: "reel-1",
    src: "https://assets.mixkit.co/videos/4775/4775-720.mp4",
    poster:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80",
    label: "Cinematic Brand Films",
    tag: "Hero · 2026",
    client: "Industries — D2C, Education, Fintech",
    parallax: 0.18,
  },
  {
    id: "reel-2",
    src: "https://assets.mixkit.co/videos/41540/41540-720.mp4",
    poster:
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=1920&q=80",
    label: "Performance Ads",
    tag: "Conversion · Scale",
    client: "Avg. ROAS lift +320%",
    parallax: 0.22,
  },
  {
    id: "reel-3",
    src: "https://assets.mixkit.co/videos/22755/22755-720.mp4",
    poster:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1920&q=80",
    label: "Social Reels",
    tag: "IG · YT · FB",
    client: "600+ shorts shipped",
    parallax: 0.28,
  },
  {
    id: "reel-4",
    src: "https://assets.mixkit.co/videos/5060/5060-720.mp4",
    poster:
      "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1920&q=80",
    label: "Product Showcase",
    tag: "E-comm · D2C",
    client: "Catalogues · Launches",
    parallax: 0.34,
  },
] as const;

export const SERVICES: readonly ServiceDef[] = [
  {
    index: 1,
    title: "Advertisement Videos",
    subtitle: "Stories that sell",
    description:
      "Cinematic ads that move minds and metrics. From school spots to scroll-stopping product films.",
    bullets: ["School & education ads", "Business promos & TVCs", "Reels & cut-downs"],
    hue: "ad",
  },
  {
    index: 2,
    title: "Social Media Handling",
    subtitle: "Compounding attention",
    description:
      "Strategy, content, and community — engineered to grow channels weekly, not yearly.",
    bullets: ["Instagram growth systems", "Facebook & Meta Ads", "YouTube channel architecture"],
    hue: "social",
  },
  {
    index: 3,
    title: "Website Development",
    subtitle: "Sites that convert",
    description:
      "High-craft business sites and landing pages built on the same stack as Awwwards winners.",
    bullets: ["Business websites", "Landing pages & funnels", "Software products & dashboards"],
    hue: "web",
  },
  {
    index: 4,
    title: "Brand Development",
    subtitle: "Identity, end to end",
    description:
      "Naming, voice, mark, and a launch playbook — wrapped into a single delivery your team can run.",
    bullets: ["Identity systems", "Brand messaging", "Launch playbooks"],
    hue: "brand",
  },
] as const;

export const STATS: readonly StatDef[] = [
  { target: 120, label: "Projects shipped" },
  { target: 48, label: "Active clients" },
  { target: 600, label: "Reels produced", suffix: "+" },
  { target: 320, label: "Avg. growth", suffix: "%" },
] as const;

export const ABOUT_HEAD = "We don't decorate brands. We build the system that grows them.";

export const ABOUT_BODY =
  "Sona Sapphire is a creative-and-growth studio working at the intersection of cinema and analytics. We pair frame-perfect storytelling with the operating systems — funnels, content engines, websites — that turn attention into revenue.";

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
