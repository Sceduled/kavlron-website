import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import SmoothScrollProvider from "./components/SmoothScrollProvider";
import BrandIntro from "./components/BrandIntro";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kalvron AI — Revenue Recovery Infrastructure",
  description:
    "Kalvron builds AI lead qualification systems that fix the broken middle of your sales pipeline. Agency partnerships welcome.",
  keywords: [
    "AI lead qualification",
    "marketing agency",
    "lead handling automation",
    "WhatsApp lead qualification",
    "sales pipeline automation",
  ],
  icons: {
    icon: "/logo-k.png",
    shortcut: "/logo-k.png",
    apple: "/logo-k.png",
  },
  openGraph: {
    title: "Kalvron AI — Revenue Recovery Infrastructure",
    description:
      "Stop letting your campaigns get blamed for bad follow-up. Kalvron qualifies every lead in 60 seconds.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full bg-[#0A0A0F] text-white antialiased">
        <SmoothScrollProvider>
          <BrandIntro />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
