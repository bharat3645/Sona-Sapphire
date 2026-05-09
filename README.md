# Sona Sapphire Global Solutions

Cinematic agency site — Next.js (App Router) + StringTune. Dark-mode exclusive. CSS-first scroll choreography.

## Stack

- Next.js 16 (Turbopack), React 19.2, TypeScript 5.9 (strict)
- Tailwind CSS 4 with CSS-first `@theme` tokens
- `@fiddle-digital/string-tune` — exclusive scroll/cursor engine
- `resend` — inquiry-mailer

## Getting started

```bash
pnpm install
cp .env.local.example .env.local      # add your Resend key
pnpm dev                              # http://localhost:3000
```

## Reels (videos)

Reels 1 and 2 reference real client cuts hosted in `public/videos/`:
- `public/videos/IMG_9966.mp4` (reel 01 — advertisement)
- `public/videos/pal-college.mp4` (reel 02 — long-form / education)

Reels 3 and 4 are image-only until you have more cuts. To wire a video,
set `reel.src` on the slot in `src/data/content.ts` and drop the MP4 in
`public/videos/`.

## Layout map

| Section                 | Component                                | StringTune modules used                                 |
| ----------------------- | ---------------------------------------- | ------------------------------------------------------- |
| Top nav                 | `nav/TopNav.tsx`                         | `StringMagnetic`                                        |
| Kinetic stack hero      | `stack/VideoStack.tsx`                   | `StringParallax`, `StringVideoAutoplay`; `--progress` driven by `stack/StackProgress.tsx` |
| Services accordion      | `services/ServicesGlide.tsx`             | `StringMagnetic`, `StringParallax`                      |
| About + stats + process | `stats/StatsAbout.tsx`                   | `StringProgress` (counter), `StringParallax`            |
| Work showcase           | `work/WorkShowcase.tsx`                  | `StringParallax` (per tile)                             |
| Marquee strip           | `marquee/Marquee.tsx`                    | `StringGlide`                                           |
| Peeling footer          | `footer/Footer.tsx`                      | `StringProgress` (peel sentinel), `StringMagnetic`      |
| Inquiry modal           | `inquiry/InquiryDialog.tsx`              | —                                                       |

A single StringTune runtime lives in `components/stringtune/StringTuneProvider.tsx`. The module list is in `modules.ts`.

## Inquiry form

`src/app/api/inquiry/route.ts` posts to Resend. Configure in `.env.local`:

```
RESEND_API_KEY=re_…
INQUIRY_TO=sonassapphireglobalsolution@gmail.com
INQUIRY_FROM=Sona Sapphire <onboarding@resend.dev>
```

The defaults work without a verified domain (Resend's `onboarding@resend.dev`
is a sandbox sender). For production, verify your sending domain in Resend
and update `INQUIRY_FROM`.

If `RESEND_API_KEY` is unset, the route returns 503 and the modal surfaces a
graceful fallback offering the `mailto:` link.

On Vercel: add the same three env vars under Project → Settings → Environment.

## Tokens

Brand colors and the type scale live as CSS variables on `:root` in
`src/app/globals.css`:

```
--c-navy            #0B1B3A   Deep Sapphire
--c-gold            #D4A24C   Brilliant Gold
--c-blue            #2E6BE6   Diamond Blue
--c-ink             #F5EFE0   Warm off-white
--type-display-1    clamp(2.6rem, 9vw, 8rem)
--type-display-2    clamp(2rem, 6.5vw, 5.5rem)
--type-headline     clamp(1.85rem, 5vw, 4rem)   ← floor 30px so heads never go unreadably small
--type-lead/body/meta/eyebrow … shared scale
--space-section / --space-block / --space-stack
```

## Responsive policy

- **Peel** is a desktop / tablet-portrait luxury — gated behind
  `@media (min-width: 1024px) and (min-height: 720px) and (pointer: fine)`.
  Below that, the footer is a normal-flow auto-height block; `<main>` has
  no transform.
- **Service samples** reflow 1 → 2 → 3 columns at 480 / 880px.
- **Stats grid** reflows 1 → 2 → 3 columns (3 stats, "Reels produced 600+"
  was dropped).
- **All interactive controls** carry `min-height: 44px` per WCAG 2.5.5.
- The hero's `StackProgress.tsx` floors its scroll range at
  `2 * innerHeight` so reel scrub stays smooth on landscape phones.

## Verification

```bash
pnpm typecheck      # tsc --noEmit
pnpm lint           # eslint .
pnpm build          # next build
```

Manual fluid sweep at 320, 375, 414, 480, 600, 720, 820, 1024, 1180, 1280,
1440, 1920, 2560 widths. Confirm:
- Reels 01–04 scrub smoothly.
- "Let's Build" never crops.
- Service-row samples remain legible at every width.
- Stats numbers fit their column.
- Inquiry modal opens from "Start a project" and "Let's Build" CTAs;
  Esc / backdrop / × button all close it; submit calls `/api/inquiry`.

## Reduced motion

`prefers-reduced-motion: reduce` collapses kinetic transforms to plain
stacking, freezes the marquee + Ken-Burns animations, and disables the
peel — see the block at the bottom of `globals.css`.

## Contact

- **Phone:** +91 88818 57060
- **Email:** sonassapphireglobalsolution@gmail.com
