const modules = ["Пользователи и роли", "Проверка кондитеров", "Модерация каталога", "Аудит действий", "Уведомления", "Feature flags"];

export const metadata = { title: "Администрирование" };

export default function AdminPage(): React.ReactElement {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8"><div className="mx-auto max-w-6xl"><p className="font-extrabold text-[#B93A4B]">Lakomio Admin</p><h1 className="mt-2 text-4xl font-extrabold tracking-[-0.04em] text-[#3A211B]">Операционный контур</h1><p className="mt-4 max-w-2xl leading-7 text-[#6A3F32]">Каркас первой фазы. Доступ к данным будет включён после подключения RBAC и административных политик.</p><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{modules.map((module) => <div key={module} className="rounded-2xl border border-[#3A211B]/10 bg-white/60 p-5 font-bold text-[#3A211B]">{module}<span className="mt-3 block text-xs font-extrabold tracking-wider text-[#C8894B] uppercase">Foundation</span></div>)}</div></div></section>
  );
}

