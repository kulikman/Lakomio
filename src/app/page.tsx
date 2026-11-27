import Link from "next/link";
import { ArrowRight, BadgeCheck, CalendarDays, MapPin, Sparkles } from "lucide-react";

import { LakomioMark } from "@/components/brand/lakomio-logo";
import { routes } from "@/config/routes";

const benefits = [
  { icon: BadgeCheck, title: "Проверенные кондитеры", text: "Личность, статус и первые изделия проходят проверку." },
  { icon: CalendarDays, title: "К нужной дате", text: "Готовые десерты, предзаказ и индивидуальное изготовление." },
  { icon: Sparkles, title: "Выбор без компромиссов", text: "Веганские, без сахара, ПП, постные и другие варианты." },
];

export default function Home(): React.ReactElement {
  return (
    <>
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="pointer-events-none absolute -top-32 right-[-10%] size-96 rounded-full bg-[#C8894B]/20 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C8894B]/35 bg-white/55 px-4 py-2 text-sm font-bold text-[#6A3F32]">
              <MapPin className="size-4 text-[#B93A4B]" aria-hidden />
              Первый город — Волгоград
            </div>
            <h1 className="max-w-4xl text-5xl leading-[1.02] font-extrabold tracking-[-0.055em] text-[#3A211B] sm:text-6xl lg:text-7xl">
              Лучшие десерты <span className="text-[#B93A4B]">рядом</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6A3F32] sm:text-xl">
              Находите конкретное изделие у проверенного локального кондитера — на сегодня, к выбранной дате или по индивидуальному заказу.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href={routes.catalog.href} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#B93A4B] px-7 py-4 font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#9f3040]">
                Найти десерт <ArrowRight className="size-5" aria-hidden />
              </Link>
              <Link href={routes.seller.href} className="inline-flex items-center justify-center rounded-full border border-[#3A211B]/20 bg-white/55 px-7 py-4 font-bold text-[#3A211B] transition hover:bg-white">
                Я кондитер
              </Link>
            </div>
          </div>
          <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center rounded-[3.5rem] border border-[#3A211B]/10 bg-white/45 shadow-[0_30px_90px_rgba(58,33,27,0.14)]">
            <div className="absolute inset-8 rounded-[2.75rem] bg-[radial-gradient(circle_at_50%_20%,rgba(200,137,75,0.22),transparent_55%)]" />
            <LakomioMark className="relative w-52 drop-shadow-[0_24px_30px_rgba(58,33,27,0.18)]" />
          </div>
        </div>
      </section>
      <section className="border-y border-[#3A211B]/10 bg-white/45 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {benefits.map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-3xl border border-[#3A211B]/10 bg-[#FFF9F0] p-6">
              <div className="mb-5 flex size-11 items-center justify-center rounded-2xl bg-[#C8894B]/16 text-[#6A3F32]"><Icon className="size-5" aria-hidden /></div>
              <h2 className="text-lg font-extrabold text-[#3A211B]">{title}</h2>
              <p className="mt-2 leading-7 text-[#6A3F32]">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

