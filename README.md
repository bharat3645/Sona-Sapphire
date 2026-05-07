# Sona Sapphire Global Solutions

Cinematic agency site — Next.js (App Router) + StringTune. Dark-mode exclusive. CSS-first scroll choreography.

## Stack

- Next.js 16 (Turbopack), React 19.2, TypeScript 5.9 (strict)
- Tailwind CSS 4 with CSS-first `@theme` tokens
- `@fiddle-digital/string-tune` — exclusive scroll/cursor engine

## Getting started

```bash
pnpm install
pnpm dev              # http://localhost:3000
```

The four hero reels stream from the Mixkit CDN (CC0). Posters come from
Unsplash. To swap in real client cuts, edit `src/data/content.ts` — change
each `src` to `/videos/your-cut.mp4` and drop the file in `public/videos/`.
A `pnpm fetch:stock` helper remains in `scripts/` if you want a local
mirror of the demo clips.

## Layout map

| Section                    | Component                            | StringTune modules used                              |
| -------------------------- | ------------------------------------ | ---------------------------------------------------- |
| Top nav                    | `nav/TopNav.tsx`                     | `StringMagnetic` (subtle pull on links)              |
| Kinetic stack hero         | `stack/VideoStack.tsx`               | `StringProgress`, `StringParallax`, `StringVideoAutoplay` |
| Services rail              | `services/ServicesGlide.tsx`         | `StringGlide`, `StringMagnetic`                      |
| Stats + about              | `stats/StatsAbout.tsx`               | `StringProgress` (drives CSS counter)                |
| Peeling footer             | `footer/Footer.tsx`                  | `StringProgress`, `StringMagnetic`                   |

A single StringTune runtime lives in `components/stringtune/StringTuneProvider.tsx`. The module list is in `modules.ts` — extend there.

## Tokens

All brand colors are CSS variables on `:root` in `src/app/globals.css`:
- `--c-navy` Deep Sapphire `#0B1B3A`
- `--c-gold` Brilliant Gold `#D4A24C`
- `--c-blue` Diamond Blue `#2E6BE6`
- `--c-ink`  Warm off-white `#F5EFE0`

Tailwind reads them via `theme.extend.colors`.

## Verification

```bash
pnpm typecheck   # tsc --noEmit
pnpm lint        # next lint
pnpm build       # prod build
```

Manual: scroll the page slowly. Each reel should unfurl (scale 0.86 → 1.0, fade), only the dominant clip plays muted, the SAPPHIRE wordmark stays sticky with `mix-blend-mode: difference`. At the bottom, the body peels up to reveal the gold "Let's Build" footer.

## Reduced motion

`prefers-reduced-motion: reduce` collapses kinetic transforms to opacity-only fades and disables the peel — verified via the media-query block at the bottom of `globals.css`.

## Contact

- **Phone:** +91 88818 57060
- **Email:** sonassapphireglobalsolution@gmail.com
