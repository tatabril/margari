export const siteConfig = {
  brand: "Мáргари",
  brandLatin: "MAGRAGI",
  tagline: "Ремонт и модернизация окон, остекление балконов",
  description:
    "Premium windows engineered for life. Serving residential and commercial clients with uncompromising quality and master craftsmanship.",
  phone: "+79081823188",
  phoneDisplay: "8(908)182-31-88",
  email: "hello@magragi.com",
  geo: "Батайск, Ростов, Аксай",
  hours: "Ежедневно с 08:00 до 20:00",
  address: {
    line1: "Батайск, Ростовская область",
    line2: "Выезд: Ростов, Аксай",
  },
  messengers: {
    telegram: "https://t.me/",
    max: "https://vk.me/",
  },
  trustStats: [
    { label: "Years Experience", value: "25+" },
    { label: "Windows Installed", value: "10k+" },
    { label: "Lifetime Warranty", value: "100%" },
    { label: "Satisfied Clients", value: "4.9/5" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
