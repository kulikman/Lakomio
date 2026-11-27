"use client";

import { Suspense } from "react";
import { Toaster } from "sonner";

import { PageviewTracker, PostHogProvider } from "@/components/analytics/posthog-provider";

export function Providers({ children }: { children: React.ReactNode }): React.ReactElement {
  return (
    <PostHogProvider>
      <Suspense fallback={null}><PageviewTracker /></Suspense>
      {children}
      <Toaster position="top-right" richColors closeButton />
    </PostHogProvider>
  );
}

