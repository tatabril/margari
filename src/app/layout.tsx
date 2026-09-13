// import { createRoot } from "react-dom/client";
// import App from "../App";
// import "./index.css";

// createRoot(document.getElementById("root")!).render(<App />);
import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Маргари — ремонт и модернизация окон",
  description: "Ремонт и модернизация окон, остекление балконов",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
