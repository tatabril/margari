import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";

export const metadata: Metadata = {
  title: "Маргари — ремонт и модернизация окон",
  description: "Ремонт и модернизация окон, остекление балконов, бронирование окон",
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
