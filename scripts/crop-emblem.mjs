// Crops the supplied emblem PNG to just the gem (no wordmark) and exports
// a transparent-ish PNG that sits cleanly in small nav-scale containers.
//
// Run: node scripts/crop-emblem.mjs
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const ROOT = resolve(dirname(__filename), "..");
const SRC = resolve(ROOT, "public/brand/sapphire-emblem.png");
const OUT = resolve(ROOT, "public/brand/sapphire-gem.png");

const meta = await sharp(SRC).metadata();
const w = meta.width ?? 1113;
const h = meta.height ?? 1114;

// The emblem is ~75% gem (top) + ~25% wordmark (bottom). Crop a square
// centred on the gem with a touch of breathing room for the glow.
const cropH = Math.round(h * 0.74);
const cropW = Math.min(w, cropH);
const left = Math.round((w - cropW) / 2);
const top = Math.round(h * 0.02);

await sharp(SRC)
  .extract({ left, top, width: cropW, height: cropH })
  .png({ quality: 92 })
  .toFile(OUT);

console.log(`Wrote ${OUT} (${cropW}x${cropH})`);
