import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Buy a Business India — Learn How to Acquire Small Businesses";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#f8fafc",
          padding: 40,
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: "bold",
            marginBottom: 20,
            textAlign: "center",
          }}
        >
          Buy a Business India
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#94a3b8",
            marginBottom: 60,
            textAlign: "center",
          }}
        >
          Learn How to Acquire Small Businesses
        </div>
        <div
          style={{
            display: "flex",
            gap: 40,
            fontSize: 24,
            color: "#64748b",
          }}
        >
          <div>63M+ SMBs in India</div>
          <div>•</div>
          <div>2-4x Profit Multiples</div>
          <div>•</div>
          <div>₹10L-1Cr Deals</div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 24,
            color: "#475569",
          }}
        >
          buyabusiness-india.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
