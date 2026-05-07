export interface ReelDef {
  readonly id: string;
  readonly src: string;
  readonly poster: string;
  readonly label: string;
  readonly tag: string;
  readonly parallax: number;
}

export interface ServiceDef {
  readonly index: 1 | 2 | 3 | 4;
  readonly title: string;
  readonly bullets: readonly string[];
  readonly hue: "ad" | "social" | "web" | "brand";
}

export interface StatDef {
  readonly target: number;
  readonly label: string;
  readonly suffix?: string;
}

export const REELS: readonly ReelDef[] = [
  {
    id: "reel-1",
    src: "/videos/reel-1.mp4",
    poster: "/videos/reel-1.poster.jpg",
    label: "Cinematic Brand Films",
    tag: "Hero · Best Reel",
    parallax: 0.18,
  },
  {
    id: "reel-2",
    src: "/videos/reel-2.mp4",
    poster: "/videos/reel-2.poster.jpg",
    label: "Performance Ads",
    tag: "Conversion · Scale",
    parallax: 0.24,
  },
  {
    id: "reel-3",
    src: "/videos/reel-3.mp4",
    poster: "/videos/reel-3.poster.jpg",
    label: "Social Reels",
    tag: "IG · YT · FB",
    parallax: 0.3,
  },
  {
    id: "reel-4",
    src: "/videos/reel-4.mp4",
    poster: "/videos/reel-4.poster.jpg",
    label: "Product Showcase",
    tag: "E-comm · D2C",
    parallax: 0.36,
  },
] as const;

export const SERVICES: readonly ServiceDef[] = [
  {
    index: 1,
    title: "Advertisement Videos",
    bullets: ["School ads", "Business promos", "Reels & TVCs"],
    hue: "ad",
  },
  {
    index: 2,
    title: "Social Media Handling",
    bullets: ["Instagram growth", "Facebook management", "YouTube engineering"],
    hue: "social",
  },
  {
    index: 3,
    title: "Website Development",
    bullets: ["Business sites", "Landing pages", "Software products"],
    hue: "web",
  },
  {
    index: 4,
    title: "Brand Development",
    bullets: ["Identity systems", "Messaging", "Launch playbooks"],
    hue: "brand",
  },
] as const;

export const STATS: readonly StatDef[] = [
  { target: 120, label: "Projects shipped" },
  { target: 48, label: "Active clients" },
  { target: 600, label: "Reels produced", suffix: "+" },
  { target: 320, label: "Avg. growth", suffix: "%" },
] as const;

export const ABOUT_COPY =
  "We engineer digital growth for brands that refuse the average. Sona Sapphire pairs cinematic creative with measurable systems — videos that convert, social that compounds, and websites that hold a room.";

export const CONTACT = {
  phone: "+91 88818 57060",
  phoneHref: "tel:+918881857060",
  email: "sonassapphireglobalsolution@gmail.com",
  emailHref: "mailto:sonassapphireglobalsolution@gmail.com",
  legal: "Sona Sapphire Global Solutions",
  alt: "Sona's Sapphire Media International",
} as const;
