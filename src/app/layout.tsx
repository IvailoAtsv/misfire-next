import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Автосервиз Misfire",
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
    <html lang="bg">
      <head>
        <link rel="canonical" href="https://misfire-service.com"></link>
      </head>
      <body className={inter.className}>
        <title>Автосервиз Misfire</title>
        <link rel="icon" href="/misfire.png" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
