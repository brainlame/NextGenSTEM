import { ImageResponse } from "next/og";
import { BRAND } from "@/lib/config";

/**
 * Shared Open Graph card renderer. Pure inline SVG + system fonts — no
 * external font fetch, no remote images. Every OG route composes a
 * title/subtitle/badge and this module handles the layout.
 */

export const OG_SIZE = { width: 1200, height: 630 } as const;
export const OG_CONTENT_TYPE = "image/png";

type OgCardInput = Readonly<{
  title: string;
  subtitle: string;
  eyebrow?: string;
  badge?: string;
}>;

const LaurelMark = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M40 8 L48 24 L66 24 L52 36 L58 54 L40 44 L22 54 L28 36 L14 24 L32 24 Z"
      fill={BRAND.gold}
    />
    <circle cx="40" cy="40" r="36" stroke={BRAND.gold} strokeWidth="2" fill="none" opacity="0.35" />
  </svg>
);

export function renderOgCard(input: OgCardInput): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "72px 88px",
          background: `linear-gradient(135deg, ${BRAND.bg} 0%, #0f1f2e 55%, ${BRAND.bg} 100%)`,
          color: BRAND.text,
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <LaurelMark />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: 20,
                letterSpacing: 6,
                textTransform: "uppercase",
                color: BRAND.gold,
                fontFamily: "system-ui, sans-serif",
              }}
            >
              NextGen STEM
            </span>
            {input.eyebrow ? (
              <span
                style={{
                  fontSize: 16,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  color: BRAND.muted,
                  marginTop: 6,
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                {input.eyebrow}
              </span>
            ) : null}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 1024 }}>
          <div
            style={{
              fontSize: 72,
              lineHeight: 1.05,
              fontWeight: 700,
              color: BRAND.text,
              display: "flex",
            }}
          >
            {input.title}
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.3,
              color: BRAND.muted,
              fontFamily: "system-ui, sans-serif",
              display: "flex",
            }}
          >
            {input.subtitle}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontSize: 18,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: BRAND.muted,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            next-gen-stem.vercel.app
          </span>
          {input.badge ? (
            <span
              style={{
                fontSize: 16,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: BRAND.gold,
                border: `1px solid ${BRAND.gold}`,
                padding: "10px 20px",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              {input.badge}
            </span>
          ) : null}
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}
