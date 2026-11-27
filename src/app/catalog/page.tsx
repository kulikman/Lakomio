import { CalendarDays, MapPin, Search } from "lucide-react";

const filters = ["Без сахара", "Веганские", "ПП", "Постные", "Без глютена", "Для диабетиков"];

export const metadata = { title: "Каталог десертов" };

export default function CatalogPage(): React.ReactElement {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-extrabold tracking-widest text-[#B93A4B] uppercase">Волгоград</p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-[-0.04em] text-[#3A211B]">Какой десерт вы ищете?</h1>
        <div className="mt-8 grid gap-3 rounded-3xl border border-[#3A211B]/10 bg-white/70 p-3 shadow-sm md:grid-cols-[1fr_1fr_auto]">
          <label className="flex items-center gap-3 rounded-2xl bg-[#FFF9F0] px-4 py-3 text-[#6A3F32]"><MapPin className="size-5" aria-hidden /><span><span className="block text-xs font-bold uppercase">Адрес</span><span className="text-sm">Укажите район или адрес</span></span></label>
          <label className="flex items-center gap-3 rounded-2xl bg-[#FFF9F0] px-4 py-3 text-[#6A3F32]"><CalendarDays className="size-5" aria-hidden /><span><span className="block text-xs font-bold uppercase">Дата</span><span className="text-sm">Сегодня или на заказ</span></span></label>
          <button type="button" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#B93A4B] px-7 py-4 font-extrabold text-white"><Search className="size-5" aria-hidden />Найти</button>
        </div>
        <div className="mt-6 flex flex-wrap gap-2" aria-label="Пищевые фильтры">
          {filters.map((filter) => <button key={filter} type="button" className="rounded-full border border-[#3A211B]/12 bg-white/55 px-4 py-2 text-sm font-bold text-[#6A3F32] hover:border-[#B93A4B]/40 hover:text-[#B93A4B]">{filter}</button>)}
        </div>
        <div className="mt-12 rounded-[2rem] border border-dashed border-[#C8894B]/50 bg-[#C8894B]/8 px-6 py-16 text-center">
          <h2 className="text-2xl font-extrabold text-[#3A211B]">Каталог готовится к запуску</h2>
          <p className="mx-auto mt-3 max-w-xl leading-7 text-[#6A3F32]">Здесь появятся только реальные изделия проверенных кондитеров. Мы не заполняем витрину вымышленными карточками.</p>
        </div>
      </div>
    </section>
  );
}

