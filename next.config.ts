import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  // если нужен basePath как в vite — раскомментируй:
  basePath: process.env.BASE_PATH ?? "",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.icons8.ru',
        pathname: '/**', // Разрешает любые пути на этом домене
      },
    ],
  },
};
export default nextConfig;