create type public.app_role as enum ('buyer', 'seller', 'support', 'moderator', 'finance', 'admin');

create table public.cities (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  region text not null,
  country_code text not null default 'RU' check (char_length(country_code) = 2),
  timezone text not null,
  active boolean not null default false,
  created_at timestamptz not null default now(),
  unique (name, region, country_code)
);

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text check (display_name is null or char_length(display_name) between 2 and 80),
  avatar_url text,
  city_id uuid references public.cities(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.user_roles (
  user_id uuid not null references auth.users(id) on delete cascade,
  role public.app_role not null,
  granted_at timestamptz not null default now(),
  primary key (user_id, role)
);

create table public.user_consents (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  consent_type text not null,
  document_version text not null,
  accepted_at timestamptz not null default now(),
  unique (user_id, consent_type, document_version)
);

create table public.devices (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  platform text not null check (platform in ('web', 'ios', 'android')),
  push_token text,
  last_seen_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create index profiles_city_id_idx on public.profiles(city_id);
create index devices_user_id_idx on public.devices(user_id);

create or replace function public.set_updated_at()
returns trigger language plpgsql set search_path = '' as $$
begin new.updated_at = now(); return new; end;
$$;

create trigger profiles_set_updated_at before update on public.profiles
for each row execute function public.set_updated_at();

create schema if not exists private;

create or replace function private.handle_new_user()
returns trigger language plpgsql security definer set search_path = '' as $$
begin
  insert into public.profiles (id) values (new.id);
  insert into public.user_roles (user_id, role) values (new.id, 'buyer');
  return new;
end;
$$;

revoke all on function private.handle_new_user() from public;

create trigger on_auth_user_created after insert on auth.users
for each row execute function private.handle_new_user();

alter table public.cities enable row level security;
alter table public.profiles enable row level security;
alter table public.user_roles enable row level security;
alter table public.user_consents enable row level security;
alter table public.devices enable row level security;

create policy "Active cities are public" on public.cities for select to anon, authenticated using (active);
create policy "Users read own profile" on public.profiles for select to authenticated using ((select auth.uid()) = id);
create policy "Users update own profile" on public.profiles for update to authenticated using ((select auth.uid()) = id) with check ((select auth.uid()) = id);
create policy "Users read own roles" on public.user_roles for select to authenticated using ((select auth.uid()) = user_id);
create policy "Users read own consents" on public.user_consents for select to authenticated using ((select auth.uid()) = user_id);
create policy "Users add own consents" on public.user_consents for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "Users read own devices" on public.devices for select to authenticated using ((select auth.uid()) = user_id);
create policy "Users add own devices" on public.devices for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "Users update own devices" on public.devices for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "Users delete own devices" on public.devices for delete to authenticated using ((select auth.uid()) = user_id);

