import { NextResponse, type NextRequest } from "next/server";

import { buildSecurityHeaders } from "@/lib/security-headers";
import { updateSession } from "@/lib/supabase/middleware";

export async function proxy(request: NextRequest): Promise<NextResponse> {
  const response = await updateSession(request);
  const headers = buildSecurityHeaders({ isDev: process.env.NODE_ENV !== "production" });
  for (const [key, value] of Object.entries(headers)) response.headers.set(key, value);
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon\\.ico|sitemap\\.xml|robots\\.txt|opengraph-image|icon|api/cron|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|woff|woff2|ttf)$).*)"],
};

