import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "[kside]//openlabs — KI-Wissen für alle",
  description: "Praxisnah, gemeinschaftlich, offen. KI-Workshops, FemAiLab und offene Lernlabore von Karin Siepmann.",
  metadataBase: new URL("https://kside.de"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="min-h-screen">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
