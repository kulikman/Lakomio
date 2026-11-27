import { routes, type RouteDefinition, type RouteTree } from "@/config/routes";

export interface FlatRoute extends Omit<RouteDefinition, "children"> {
  key: string;
  parentHref: string | null;
}

function flattenRouteTree(tree: RouteTree, parentHref: string | null = null, parentKey = ""): FlatRoute[] {
  return Object.entries(tree).flatMap(([key, route]) => {
    const fullKey = parentKey ? `${parentKey}.${key}` : key;
    const { children, ...flatRoute } = route;
    const current: FlatRoute = { ...flatRoute, key: fullKey, parentHref };
    return [current, ...(children ? flattenRouteTree(children, route.href, fullKey) : [])];
  });
}

export function flattenRoutes(tree: RouteTree = routes): FlatRoute[] {
  return flattenRouteTree(tree);
}

export function getRouteByHref(href: string): FlatRoute | null {
  return flattenRoutes().find((route) => route.href === href) ?? null;
}

export function getSitemapRoutes(): FlatRoute[] {
  return flattenRoutes().filter((route) => route.public && route.sitemap);
}

