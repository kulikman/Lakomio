export interface RouteDefinition {
  href: string;
  label: string;
  title: string;
  description?: string;
  public?: boolean;
  sitemap?: boolean;
  aliases?: readonly string[];
  children?: RouteTree;
}

export type RouteTree = Record<string, RouteDefinition>;

export const routes = {
  home: { href: "/", label: "Главная", title: "Lakomio", public: true, sitemap: true },
  catalog: {
    href: "/catalog",
    label: "Десерты",
    title: "Каталог десертов",
    description: "Десерты проверенных кондитеров рядом.",
    public: true,
    sitemap: true,
  },
  login: { href: "/login", label: "Войти", title: "Вход по телефону", public: true },
  seller: { href: "/seller", label: "Кондитерам", title: "Lakomio Seller", public: true },
  admin: { href: "/admin", label: "Администрирование", title: "Lakomio Admin" },
} as const satisfies RouteTree;

