export const siteConfig = {
  brand: "Мáргари",
  brandLatin: "MAGRAGI",
  tagline: "Ремонт и модернизация окон, остекление балконов",
  description:
    "Premium windows engineered for life. Serving residential and commercial clients with uncompromising quality and master craftsmanship.",
  phone: "+79081823188",
  phoneDisplay: "8(908) 182-31-88",
  email: "hello@magragi.com",
  geo: "Батайск, Ростов, Аксай",
  hours: "Ежедневно с 08:00 до 20:00",
  address: {
    line1: "Батайск, Ростовская область",
    line2: "Выезд: Ростов, Аксай",
  },
  messengers: {
    telegram: "https://t.me/PavelDonor",
    max: "https://max.ru/u/f9LHodD0cOL5cGyHHZNbRLh_OR00TWmXeD_MkPbBRWd3mw1VXHmA9LaZrSc",
  },
  trustStats: [
    { label: "Стоимость в договоре не изменится в процессе работы", value: "0 ₽"},
    { label: "Официальная гарантия на все выполненные работы", value: "3 года" },
    { label: "Используем только оригинальные немецкие материалы и надежную долговечную фурнитуру", value: "100 %" },
    { label: "Довольных клиентов за все время работы", value: "7500 +" }
  ],
} as const;

export type SiteConfig = typeof siteConfig;
