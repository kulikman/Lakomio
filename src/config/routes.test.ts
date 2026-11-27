import { describe, expect, it } from "vitest";

import { routes } from "./routes";

describe("Lakomio route contract", () => {
  it("keeps canonical routes unique", () => {
    const hrefs = Object.values(routes).map((route) => route.href);
    expect(new Set(hrefs).size).toBe(hrefs.length);
  });

  it("publishes only buyer-facing routes in the sitemap", () => {
    const publicRoutes = Object.values(routes)
      .filter((route) => "sitemap" in route && route.sitemap)
      .map((route) => route.href);
    expect(publicRoutes).toEqual(["/", "/catalog"]);
  });
});

