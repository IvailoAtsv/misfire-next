import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "автосервиз Misfire",
    template: "%s - Misfire"
  },
  openGraph: {
    images: [
      { url: '/misfire.png' }
    ]
  },
  description: "пътна помощ, диагностика и общи ремонти, сервиз за гуми, тунинг и още много в aвтосервиз Misfire, град Пловдив",
  keywords: ["автосервиз", "сервиз", "диагностика", "ремонт на кола", "пътна помощ", "тунинг", "тунинг пловдив", "пътна помощ пловдив", "сервиз пловдив", "смяна на гуми пловдив", "смяна на масло пловдив", "автосервиз пловдив"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <title>Misfire</title>
        <link rel="icon" href="/misfire.png" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
