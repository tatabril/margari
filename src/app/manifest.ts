import type { MetadataRoute } from 'next';
// import { siteMeta } from '@/shared/config/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Маргари — ремонт и модернизация окон",
    short_name: 'Маргари - окна',
    description: "Ремонт и модернизация окон, остекление балконов, бронирование окон - Батайск, Ростов-на-Дону",
    // description: siteMeta.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1e4e8c',
    icons: [
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
