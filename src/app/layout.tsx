import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

import { Header } from "@/components/layout/header";
import { Providers } from "@/components/providers";
import { siteConfig } from "@/config/site";
import { getPublicMetadataEnv } from "@/lib/env";
import { flags } from "@/lib/flags";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin", "cyrillic"] });
const baseUrl = getPublicMetadataEnv().NEXT_PUBLIC_APP_URL;

export const metadata: Metadata = {
  title: { default: siteConfig.name, template: `%s — ${siteConfig.name}` },
  description: siteConfig.description,
  metadataBase: new URL(baseUrl),
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: baseUrl,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: { card: "summary_large_image", title: siteConfig.name, description: siteConfig.description },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>): React.ReactElement {
  return (
    <html lang="ru" className={`${manrope.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Providers>
          <Header />
          <main className="flex flex-1 flex-col">{children}</main>
        </Providers>
        {flags.analytics ? <Analytics /> : null}
        {flags.analytics ? <SpeedInsights /> : null}
      </body>
    </html>
  );
}

