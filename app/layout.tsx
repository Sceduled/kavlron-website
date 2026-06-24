import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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
  title: "Kalvron AI — Lead Qualification Infrastructure for Marketing Agencies",
  description:
    "Kalvron builds AI lead handling systems that sit between your client's ad campaign and their sales team. Every lead gets engaged in 60 seconds. Qualified automatically. Only the serious ones reach the team.",
  keywords: [
    "AI lead qualification",
    "marketing agency",
    "lead handling automation",
    "WhatsApp lead qualification",
    "sales pipeline automation",
  ],
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
        {children}
      </body>
    </html>
  );
}
