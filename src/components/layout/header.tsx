"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { LakomioLogo } from "@/components/brand/lakomio-logo";
import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Header(): React.ReactElement {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[#3A211B]/10 bg-[#FFF4E4]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <LakomioLogo />
        <nav className="hidden items-center gap-2 md:flex" aria-label="Основная навигация">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                pathname === item.href
                  ? "bg-[#3A211B] text-[#FFF4E4]"
                  : "text-[#6A3F32] hover:bg-[#3A211B]/7 hover:text-[#3A211B]"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <Link
          href={routes.login.href}
          className="rounded-full bg-[#B93A4B] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#9f3040]"
        >
          Войти
        </Link>
      </div>
    </header>
  );
}

