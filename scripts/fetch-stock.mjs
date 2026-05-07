#!/usr/bin/env node
/**
 * Fetches four CC0 cinematic clips from Mixkit into public/videos/
 * (intentionally swappable: drop any reel-N.mp4 in place to override).
 *
 * Usage: pnpm fetch:stock
 */
import { mkdirSync, existsSync, createWriteStream } from "node:fs";
import { resolve } from "node:path";
import { pipeline } from "node:stream/promises";

const OUT = resolve(process.cwd(), "public/videos");
mkdirSync(OUT, { recursive: true });

// Mixkit free-license CDN clips. If a URL ever 404s, swap with any direct .mp4.
const REELS = [
  {
    id: "reel-1",
    url: "https://assets.mixkit.co/videos/4775/4775-720.mp4",
  },
  {
    id: "reel-2",
    url: "https://assets.mixkit.co/videos/2783/2783-720.mp4",
  },
  {
    id: "reel-3",
    url: "https://assets.mixkit.co/videos/4434/4434-720.mp4",
  },
  {
    id: "reel-4",
    url: "https://assets.mixkit.co/videos/4434/4434-720.mp4",
  },
];

async function download(url, dest) {
  if (existsSync(dest)) {
    process.stdout.write(`  • exists: ${dest}\n`);
    return;
  }
  process.stdout.write(`  ↓ ${url} → ${dest}\n`);
  const res = await fetch(url);
  if (!res.ok || !res.body) {
    throw new Error(`Failed ${url}: ${res.status}`);
  }
  await pipeline(res.body, createWriteStream(dest));
}

(async () => {
  process.stdout.write(`Fetching ${REELS.length} reels into ${OUT}\n`);
  for (const r of REELS) {
    await download(r.url, resolve(OUT, `${r.id}.mp4`));
  }
  process.stdout.write("Done. Replace any reel-N.mp4 with a real cut anytime.\n");
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
