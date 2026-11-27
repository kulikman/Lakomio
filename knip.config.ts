import type { KnipConfig } from "knip";

const config: KnipConfig = {
  entry: ["src/app/**/{page,layout,loading,error,not-found,route,opengraph-image,icon,sitemap,robots}.{ts,tsx}"],
  project: ["src/**/*.{ts,tsx}"],
  ignoreDependencies: ["tailwindcss", "shadcn", "postcss"],
  ignoreExportsUsedInFile: true,
  ignoreIssues: { "src/types/database.ts": ["exports", "types"] },
  ignoreBinaries: ["supabase"],
  paths: { "@/*": ["./src/*"] }
};

export default config;

