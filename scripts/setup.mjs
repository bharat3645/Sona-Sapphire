#!/usr/bin/env node
/**
 * pnpm setup — one-step bootstrap after `git clone`.
 *
 * Creates .env.local from .env.local.example if missing (so the Resend key
 * is wired without copy-pasting), and prints a checklist for the steps
 * that still need a human (drop video files, configure Vercel env vars).
 */
import { existsSync, copyFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const EXAMPLE = resolve(ROOT, ".env.local.example");
const TARGET = resolve(ROOT, ".env.local");

let envCreated = false;
if (!existsSync(TARGET) && existsSync(EXAMPLE)) {
  copyFileSync(EXAMPLE, TARGET);
  envCreated = true;
}

const videosDir = resolve(ROOT, "public/videos");
const hasReel1 = existsSync(resolve(videosDir, "IMG_9966.mp4"));
const hasReel2 = existsSync(resolve(videosDir, "pal-college.mp4"));

const useColor = process.stdout.isTTY && !process.env.NO_COLOR;
const tick = useColor ? "[32m✓[0m" : "✓";
const cross = useColor ? "[33m·[0m" : "·";

console.log("");
console.log("Sona Sapphire — local setup");
console.log("───────────────────────────");
console.log(`${envCreated ? tick : tick} .env.local present`);
console.log(`${hasReel1 ? tick : cross} public/videos/IMG_9966.mp4`);
console.log(`${hasReel2 ? tick : cross} public/videos/pal-college.mp4`);
console.log("");

if (envCreated) {
  console.log("Next: open .env.local and replace RESEND_API_KEY with your");
  console.log("real key from https://resend.com/api-keys (the file is local-");
  console.log("only and gitignored, so the key never enters version control).");
  console.log("");
}

if (!hasReel1 || !hasReel2) {
  console.log("Reel videos not found locally. Drop the MP4s in public/videos/:");
  if (!hasReel1) console.log("  · IMG_9966.mp4");
  if (!hasReel2) console.log("  · pal-college.mp4");
  console.log("");
}

console.log("Vercel: add the same RESEND_API_KEY env var to your project at");
console.log("  https://vercel.com/<your-team>/<project>/settings/environment-variables");
console.log("");
console.log("Run the dev server with: pnpm dev");
console.log("");
