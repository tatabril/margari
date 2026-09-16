export const mainNav = [
  { label: "Профилактика окон", href: "#профилактика" },
  { label: "Модернизация", href: "#модернизация" },
  { label: "Москитные сетки", href: "#сетки" },
  { label: "Балконы", href: "#балконы" },
] as const;

export type NavItem = (typeof mainNav)[number];
