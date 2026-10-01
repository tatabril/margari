export const mainNav = [
  { label: "Услуги", href: "#услуги" },
  { label: "Преимущества", href: "#преимущества" },
  { label: "Процесс", href: "#процесс" },
  { label: "Отзывы", href: "#отзывы" },
  { label: "Контакты", href: "#контакты" },
] as const;

export type NavItem = (typeof mainNav)[number];
