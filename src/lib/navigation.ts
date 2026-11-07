import type { Dictionary } from "@/i18n/dictionaries";

type NavItem = { href: string; key: keyof Dictionary["nav"] };

export const navItems: NavItem[] = [
  { href: "/", key: "home" },
  { href: "/nosotros", key: "about" },
  { href: "/exportaciones", key: "exports" },
  { href: "/importaciones", key: "imports" },
  { href: "/consultoria-comercio-internacional", key: "consulting" },
  { href: "/gestion-integral-de-operaciones", key: "operations" },
];

export const secondaryNavItems: NavItem[] = [
  { href: "/catalogo", key: "catalog" },
  { href: "/contacto", key: "contact" },
];
