"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { LakomioLogo } from "@/components/brand/lakomio-logo";
import { routes } from "@/config/routes";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage(): React.ReactElement {
  const router = useRouter();
  const [supabase] = useState(() => createClient());
  const [phone, setPhone] = useState("+7");
  const [code, setCode] = useState("");
  const [step, setStep] = useState<"phone" | "code">("phone");
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function requestCode(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault(); setPending(true); setMessage(null);
    const normalized = phone.replace(/[\s()-]/g, "");
    if (!/^\+\d{10,15}$/.test(normalized)) { setMessage("Введите номер в международном формате."); setPending(false); return; }
    const { error } = await supabase.auth.signInWithOtp({ phone: normalized });
    if (error) setMessage("Не удалось отправить код. Проверьте номер и попробуйте снова.");
    else { setPhone(normalized); setStep("code"); }
    setPending(false);
  }

  async function verifyCode(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault(); setPending(true); setMessage(null);
    const { error } = await supabase.auth.verifyOtp({ phone, token: code, type: "sms" });
    if (error) setMessage("Код не подошёл или истёк.");
    else { router.push(routes.catalog.href); router.refresh(); }
    setPending(false);
  }

  return (
    <section className="flex flex-1 items-center justify-center px-4 py-12"><div className="w-full max-w-md rounded-[2rem] border border-[#3A211B]/10 bg-white/70 p-7 shadow-[0_24px_70px_rgba(58,33,27,0.12)] sm:p-9"><LakomioLogo className="mb-8" /><h1 className="text-3xl font-extrabold tracking-[-0.04em] text-[#3A211B]">Вход по телефону</h1><p className="mt-2 text-[#6A3F32]">Один аккаунт для покупок и работы кондитера.</p>{step === "phone" ? <form onSubmit={requestCode} className="mt-8 space-y-4"><label className="block"><span className="mb-2 block text-sm font-bold text-[#3A211B]">Номер телефона</span><input value={phone} onChange={(event) => setPhone(event.target.value)} inputMode="tel" autoComplete="tel" required className="h-13 w-full rounded-2xl border border-[#3A211B]/15 bg-[#FFF9F0] px-4 text-lg text-[#3A211B] outline-none focus:border-[#B93A4B]" /></label><button disabled={pending} className="h-13 w-full rounded-2xl bg-[#B93A4B] font-extrabold text-white disabled:opacity-60">{pending ? "Отправляем…" : "Получить код"}</button></form> : <form onSubmit={verifyCode} className="mt-8 space-y-4"><label className="block"><span className="mb-2 block text-sm font-bold text-[#3A211B]">Код из SMS</span><input value={code} onChange={(event) => setCode(event.target.value.replace(/\D/g, "").slice(0, 6))} inputMode="numeric" autoComplete="one-time-code" minLength={6} maxLength={6} required className="h-13 w-full rounded-2xl border border-[#3A211B]/15 bg-[#FFF9F0] px-4 text-center text-2xl tracking-[0.35em] text-[#3A211B] outline-none focus:border-[#B93A4B]" /></label><button disabled={pending} className="h-13 w-full rounded-2xl bg-[#B93A4B] font-extrabold text-white disabled:opacity-60">{pending ? "Проверяем…" : "Войти"}</button><button type="button" onClick={() => { setStep("phone"); setCode(""); setMessage(null); }} className="w-full text-sm font-bold text-[#6A3F32]">Изменить номер</button></form>}{message ? <p role="alert" className="mt-4 rounded-xl bg-[#B93A4B]/10 p-3 text-sm text-[#8f2938]">{message}</p> : null}<p className="mt-6 text-xs leading-5 text-[#6A3F32]">Продолжая, вы соглашаетесь с условиями сервиса и обработкой персональных данных.</p></div></section>
  );
}

