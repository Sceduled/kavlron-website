import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kalvron AI — Revenue Recovery Infrastructure for Marketing Agencies",
  description:
    "Kalvron builds AI lead qualification systems deployed through marketing agency partnerships. Every lead engaged in 60 seconds. Qualified automatically. Only serious leads reach the sales team.",
  keywords: [
    "AI lead qualification",
    "marketing agency",
    "lead follow-up",
    "revenue recovery",
    "WhatsApp automation",
    "performance marketing",
    "India",
  ],
  openGraph: {
    title: "Kalvron AI — Revenue Recovery Infrastructure",
    description:
      "AI lead handling systems that sit between ad campaigns and sales teams. Stop getting blamed for bad leads.",
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
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
