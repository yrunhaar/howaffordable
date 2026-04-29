import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "How Affordable? — housing affordability across 47 countries with open OECD and BIS data";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          background: "linear-gradient(135deg, #f5f0eb 0%, #ece5dd 100%)",
          color: "#1c1917",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Georgia, serif",
          padding: 80,
        }}
      >
        <div style={{ fontSize: 96, marginBottom: 24 }}>🏠</div>
        <div
          style={{
            fontSize: 84,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          How Affordable?
        </div>
        <div
          style={{
            fontSize: 30,
            color: "#44403c",
            marginTop: 28,
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          Housing affordability across 47 countries · open OECD &amp; BIS data
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#78716c",
            marginTop: 56,
            display: "flex",
            gap: 32,
          }}
        >
          <span>47 countries</span>
          <span>·</span>
          <span>8 languages</span>
          <span>·</span>
          <span>Open data</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
