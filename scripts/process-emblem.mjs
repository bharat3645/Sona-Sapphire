#!/usr/bin/env node
/**
 * Processes the supplied sapphire emblem (1254×1254 PNG) into the four
 * variants the site ships, all with a real per-pixel alpha matte instead of
 * the source's dark backdrop. Result: every logo placement composites
 * cleanly on any background colour — no `mix-blend-mode: screen` haze.
 *
 * Algorithm:
 *   For each pixel, compute Rec.709 luminance. Map [0..LO] → alpha 0,
 *   [LO..HI] → linear ramp, [HI..255] → alpha 255. LO/HI chosen so the
 *   logo's dark backdrop falls in the transparent zone and the gold +
 *   sapphire glyph stays fully opaque, with antialiased edges.
 *
 * Outputs:
 *   public/brand/sapphire-emblem.png   1254×1254  (full logo + wordmark)
 *   public/brand/sapphire-gem.png       512× 512  (S-only crop)
 *   src/app/icon.png                    512× 512  (favicon source)
 *   src/app/apple-icon.png              360× 360  (iOS home-screen icon)
 *
 * Run: pnpm setup:logo
 */
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const ROOT = resolve(dirname(__filename), "..");

const SRC = resolve(ROOT, "public/brand/sapphire-emblem.png");

const LO = 22; // luminance below this → fully transparent
const HI = 56; // luminance above this → fully opaque

async function alphaMatte(buf, info) {
  const out = Buffer.alloc(info.width * info.height * 4);
  for (let i = 0, j = 0; i < buf.length; i += info.channels, j += 4) {
    const r = buf[i];
    const g = info.channels >= 2 ? buf[i + 1] : r;
    const b = info.channels >= 3 ? buf[i + 2] : r;
    const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b; // Rec.709
    let a;
    if (lum <= LO) a = 0;
    else if (lum >= HI) a = 255;
    else a = Math.round(((lum - LO) / (HI - LO)) * 255);
    out[j] = r;
    out[j + 1] = g;
    out[j + 2] = b;
    out[j + 3] = a;
  }
  return sharp(out, {
    raw: { width: info.width, height: info.height, channels: 4 },
  });
}

async function buildVariant({ extract, resize, dest }) {
  let pipeline = sharp(SRC);
  if (extract) pipeline = pipeline.extract(extract);

  const { data, info } = await pipeline
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  let masked = await alphaMatte(data, { ...info, channels: 3 });
  if (resize) masked = masked.resize(resize, resize, { kernel: "lanczos3" });
  await masked.png({ compressionLevel: 9 }).toFile(dest);
  process.stdout.write(`  ✓ ${dest.replace(ROOT + "/", "")}\n`);
}

(async () => {
  const meta = await sharp(SRC).metadata();
  if (!meta.width || !meta.height) throw new Error("source missing dimensions");
  const w = meta.width;
  const h = meta.height;

  process.stdout.write(`Source: ${SRC.replace(ROOT + "/", "")} (${w}×${h})\n`);
  process.stdout.write(`Writing transparent variants:\n`);

  // Full emblem — keep at source size, write back over the source path
  await buildVariant({ dest: SRC });

  // Gem-only crop (top 72%, recentred square)
  const gemH = Math.round(h * 0.72);
  const gemSize = Math.min(w, gemH);
  const gemLeft = Math.round((w - gemSize) / 2);
  const gemTop = Math.round(h * 0.02);
  await buildVariant({
    extract: { left: gemLeft, top: gemTop, width: gemSize, height: gemSize },
    resize: 512,
    dest: resolve(ROOT, "public/brand/sapphire-gem.png"),
  });

  // App icon (512) and Apple icon (360) — full emblem, transparent
  await buildVariant({
    resize: 512,
    dest: resolve(ROOT, "src/app/icon.png"),
  });
  await buildVariant({
    resize: 360,
    dest: resolve(ROOT, "src/app/apple-icon.png"),
  });

  process.stdout.write(`Done.\n`);
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
