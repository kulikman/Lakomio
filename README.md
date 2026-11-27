# Lakomio

Lakomio — маркетплейс локальных десертов от проверенных кондитеров.

Покупатель выбирает конкретное изделие, дату, доставку или самовывоз. Кондитер получает витрину, заказы и рабочий кабинет. Первый рынок — Волгоград.

## Текущая фаза

**Phase 1 — Platform Foundation**

- Next.js 16 / React 19;
- Supabase Auth, Postgres и RLS;
- вход по номеру телефона;
- роли buyer, seller, support, moderator, finance и admin;
- базовые пространства покупателя, кондитера и администратора;
- бренд-система Chocolate Atelier;
- CI, аудит, уведомления и наблюдаемость.

## Запуск

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

## Проверка

```bash
pnpm verify
```

Документация: [`docs/`](./docs/README.md).

