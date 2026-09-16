import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  // если нужен basePath как в vite — раскомментируй:
  basePath: process.env.BASE_PATH ?? "",
};
export default nextConfig;