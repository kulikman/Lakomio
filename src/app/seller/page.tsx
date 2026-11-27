import Link from "next/link";
import { BadgeCheck, Camera, Store } from "lucide-react";

import { routes } from "@/config/routes";

const steps = [
  { icon: BadgeCheck, title: "Подтвердите себя", text: "Личность и статус самозанятого или ИП проверяются перед публикацией." },
  { icon: Camera, title: "Добавьте минимум 3 фото", text: "Только реальные фотографии изделий без генерации и подмены продукта." },
  { icon: Store, title: "Откройте витрину", text: "Получайте заказы платформы и приводите аудиторию по персональной ссылке." },
];

export const metadata = { title: "Кондитерам" };

export default function SellerPage(): React.ReactElement {
  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl"><p className="font-extrabold text-[#B93A4B]">Lakomio Seller</p><h1 className="mt-3 text-5xl font-extrabold tracking-[-0.05em] text-[#3A211B]">Создавай. Продавай. Расти.</h1><p className="mt-5 text-xl leading-8 text-[#6A3F32]">Витрина, новые заказы и управление работой кондитера в одном месте.</p></div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">{steps.map(({ icon: Icon, title, text }, index) => <article key={title} className="rounded-3xl border border-[#3A211B]/10 bg-white/55 p-6"><span className="text-sm font-extrabold text-[#C8894B]">0{index + 1}</span><Icon className="mt-6 size-7 text-[#B93A4B]" aria-hidden /><h2 className="mt-4 text-xl font-extrabold text-[#3A211B]">{title}</h2><p className="mt-2 leading-7 text-[#6A3F32]">{text}</p></article>)}</div>
        <Link href={routes.login.href} className="mt-9 inline-flex rounded-full bg-[#3A211B] px-7 py-4 font-extrabold text-[#FFF4E4]">Начать регистрацию</Link>
      </div>
    </section>
  );
}

