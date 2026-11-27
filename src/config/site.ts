import { routes } from "@/config/routes";

export interface NavItem {
  title: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: { github: string };
  nav: readonly NavItem[];
}

export const siteConfig = {
  name: "Lakomio",
  description: "Лучшие десерты рядом — от проверенных локальных кондитеров.",
  url: "http://localhost:3000",
  ogImage: "/opengraph-image",
  links: { github: "https://github.com/kulikman/Lakomio" },
  nav: [
    { title: routes.catalog.label, href: routes.catalog.href },
    { title: routes.seller.label, href: routes.seller.href },
  ],
} as const satisfies SiteConfig;

