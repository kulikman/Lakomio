import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";

export const APP_NAME: string = siteConfig.name;

export const ROUTES = {
  home: routes.home.href,
  catalog: routes.catalog.href,
  login: routes.login.href,
  seller: routes.seller.href,
  admin: routes.admin.href,
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];

