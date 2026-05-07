import {
  StringGlide,
  StringMagnetic,
  StringParallax,
  StringProgress,
  StringVideoAutoplay,
} from "@fiddle-digital/string-tune";

/**
 * Modules registered with the global StringTune runtime. StringVideoAutoplay
 * stays registered even when reels are image-only, so client video drops
 * (set `reel.src` in `src/data/content.ts`) just work without a code change.
 */
export const STRINGTUNE_MODULES = [
  StringProgress,
  StringParallax,
  StringGlide,
  StringMagnetic,
  StringVideoAutoplay,
] as const;
