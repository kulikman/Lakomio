import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon(): Promise<ImageResponse> {
  return Promise.resolve(new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 9, background: "#3A211B", color: "#FFF4E4", fontSize: 22, fontWeight: 800 }}>L</div>,
    { ...size }
  ));
}

