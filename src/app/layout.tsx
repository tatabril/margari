import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { Footer } from "@/widgets/footer";

export const metadata: Metadata = {
  metadataBase: "http://localhost:3000/",
  title: "Маргари — ремонт и модернизация окон",
  description: "Ремонт и модернизация окон, остекление балконов, бронирование окон - Батайск, Ростов-на-Дону",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <Providers>
        {/* <Header /> */}
          {children}
        <Footer />
        </Providers>
      </body>
    </html>
  );
}
