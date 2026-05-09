import { ImageResponse } from "next/og";

export const alt =
  "Sona Sapphire Global Solutions — Cinematic creative · Measurable growth";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 90px",
          background:
            "radial-gradient(60% 80% at 25% 30%, rgba(46,107,230,0.30), transparent 70%), radial-gradient(60% 60% at 100% 100%, rgba(212,162,76,0.24), transparent 70%), #060F24",
          color: "#F5EFE0",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Top: eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            color: "#D4A24C",
            fontSize: 22,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
          }}
        >
          <div style={{ width: 60, height: 1, background: "#D4A24C" }} />
          <div style={{ display: "flex" }}>Est. 2024 · Sona Sapphire</div>
        </div>

        {/* Middle: stacked headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 0,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 110,
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              color: "#F5EFE0",
              textTransform: "uppercase",
            }}
          >
            Cinematic creative.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 110,
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              color: "#D4A24C",
              textTransform: "uppercase",
            }}
          >
            Measurable growth.
          </div>
        </div>

        {/* Bottom: lede + handle */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 24,
              color: "#B7B0A0",
              maxWidth: 760,
              lineHeight: 1.4,
            }}
          >
            Cinematic ads, social systems, websites, and brand — built end to
            end.
          </div>
          <div
            style={{
              display: "flex",
              color: "#D4A24C",
              fontSize: 16,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            sona sapphire
          </div>
        </div>
      </div>
    ),
    size,
  );
}
