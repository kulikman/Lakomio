import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";

export const runtime = "nodejs";
export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage(): Promise<ImageResponse> {
  return Promise.resolve(new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 82, background: "#FFF4E4", color: "#3A211B", fontFamily: "sans-serif" }}>
      <div style={{ color: "#B93A4B", fontSize: 34, fontWeight: 800, marginBottom: 30 }}>lakomio</div>
      <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.04em", maxWidth: 930 }}>Лучшие десерты рядом</div>
      <div style={{ color: "#6A3F32", fontSize: 28, marginTop: 28 }}>От проверенных локальных кондитеров</div>
    </div>,
    { ...size }
  ));
}

