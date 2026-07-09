# Sona Sapphire Global Solutions

Cinematic agency site — Next.js (App Router) + StringTune. Dark-mode exclusive. CSS-first scroll choreography.

## Stack

- Next.js 16 (Turbopack), React 19.2, TypeScript 5.9 (strict)
- Tailwind CSS 4 with CSS-first `@theme` tokens
- `@fiddle-digital/string-tune` — exclusive scroll/cursor engine
- `resend` — inquiry-mailer

## Clone-and-go

After `git clone`, exactly three commands:

```bash
pnpm install
pnpm setup        # creates .env.local from the committed template
pnpm dev          # http://localhost:3000
```

`pnpm setup` is a tiny Node script (`scripts/setup.mjs`) that:
- copies `.env.local.example` → `.env.local` if it doesn't exist (so you're
  editing one real file instead of authoring it from scratch),
- prints a checklist of what's still needed — including your own
  `RESEND_API_KEY` (get one free at https://resend.com/api-keys).

### Files that are intentionally **not** in git

- `node_modules/` (~500 MB, platform-specific binaries — `pnpm install`
  rebuilds it from `pnpm-lock.yaml`).
- `.next/` (build cache — Vercel and `pnpm build` regenerate it).
- `next-env.d.ts`, `*.tsbuildinfo` (auto-generated TypeScript artefacts).
- `.env.local` itself (the **template** ships, the actual file is created
  by `pnpm setup` so accidental local edits don't end up in commits).

If you need a brand-new clone to be runnable end-to-end, the three steps
above are the entire flow — there's no other gitignored file you'd want.

### Vercel production setup

Vercel doesn't read `.env.local` from git. Add the same env vars to your
project at **Settings → Environment Variables**:

```
RESEND_API_KEY        re_…  (your key from https://resend.com/api-keys)
INQUIRY_TO            info@sonasapphire.com
INQUIRY_FROM          Sona Sapphire <onboarding@resend.dev>
NEXT_PUBLIC_SITE_URL   https://sonasapphire.com   (real production domain, once decided)
```

Or via CLI:

```bash
vercel env add RESEND_API_KEY production   # paste the key when prompted
vercel env add INQUIRY_TO production
vercel env add INQUIRY_FROM production
vercel env add NEXT_PUBLIC_SITE_URL production
```

Without `RESEND_API_KEY`, the inquiry modal still opens and surfaces a
graceful `mailto:` fallback (the API route returns 503 instead of crashing).

Without `NEXT_PUBLIC_SITE_URL`, canonical links, `robots.txt`, `sitemap.xml`,
and JSON-LD all fall back to the Vercel preview origin
(`https://sona-sapphire.vercel.app`) instead of the real domain — set this
as soon as the production domain is live.

## Reels (videos)

The hero currently ships with two real client cuts hosted in `public/videos/`:
- `public/videos/IMG_9966.mp4` (reel 01 — advertisement)
- `public/videos/pal-college.mp4` (reel 02 — long-form / education)

`VideoStack` renders exactly what's listed in the `REELS` array in
`src/data/content.ts` — there's no image-only placeholder slot for a 3rd or
4th reel today. To add one: append an entry to `REELS` with a real `src`
pointing at an MP4 in `public/videos/`, and update the reel-count label in
`VideoStack.tsx`. `pnpm fetch:stock` can pull temporary CC0 stock clips into
`public/videos/` as visual filler while real cuts are pending — swap the
files out later without touching any component.

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
INQUIRY_TO=info@sonasapphire.com
INQUIRY_FROM=Sona Sapphire <onboarding@resend.dev>
```

The defaults work without a verified domain (Resend's `onboarding@resend.dev`
is a sandbox sender) — Resend will reject the primary send in that mode, and
the route reports the failure honestly (the client-side form then shows the
"email us directly" fallback message). For production, verify your sending
domain in Resend and update `INQUIRY_FROM`; once verified, the primary send
succeeds and every inquiry lands directly in `INQUIRY_TO`.

If `RESEND_API_KEY` is unset, the route returns 503 and the modal surfaces a
graceful fallback offering the `mailto:` link.

Optional: `INQUIRY_DEV_FALLBACK` (unset by default) reroutes sandbox-blocked
sends to a second address instead of just failing — only meant for local
testing with your own inbox. Never set this in production without telling
whoever's inbox it points at.

On Vercel: add the same env vars under Project → Settings → Environment (see
"Vercel production setup" above for the full list).

### Resend — SMTP alternative (not used here)

The site uses Resend's HTTP API via the official `resend` SDK — no extra
runtime, ~30 KB gzipped, edge-compatible. If you ever migrate to a stack
that prefers SMTP (a queueing service, a third-party CRM that mails out, a
non-Node runtime), Resend exposes SMTP on the same key:

```
host:     smtp.resend.com
port:     465 (TLS) or 587 (STARTTLS)
user:     resend
password: <your RESEND_API_KEY>
```

For the current Next.js + Vercel deployment, the HTTP path in
`src/app/api/inquiry/route.ts` is the right call — SMTP requires keeping a
TCP connection open, which is incompatible with Vercel's serverless / edge
runtimes anyway.

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
pnpm build          # next build (also runs tsc + lint)
```

**On every PR**, Vercel runs `pnpm install --frozen-lockfile` followed by
`pnpm build` and posts the result as a check. `next build` already runs
TypeScript validation and ESLint internally, so the Vercel build is the
single source of truth for "does this PR ship". There's no separate
GitHub Actions workflow.

Manual fluid sweep at 320, 375, 414, 480, 600, 720, 820, 1024, 1180, 1280,
1440, 1920, 2560 widths. Confirm:
- Reels 01–02 scrub smoothly.
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
- **Email:** info@sonasapphire.com
