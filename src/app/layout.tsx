import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { siteContent, SITE_URL } from "../content/site";
import { Navbar } from "./components/ui/Navbar";
import { Footer } from "./components/ui/Footer";
import { CookieBanner } from "./components/ui/CookieBanner";
import { Analytics } from "./components/Analytics";

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
  title: siteContent.meta.home.title,
  description: siteContent.meta.home.description,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteContent.meta.home.title,
    description: siteContent.meta.home.description,
    url: "/",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.meta.home.title,
    description: siteContent.meta.home.description,
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": `${SITE_URL}/#organization`,
        "name": siteContent.legal.entityName,
        "url": SITE_URL,
        "logo": `${SITE_URL}/logo-letter.png`,
        "description": siteContent.meta.home.description,
        "sameAs": [
          siteContent.social.linkedIn,
          siteContent.social.instagram,
        ].filter(Boolean)
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#software`,
        "name": "Kalvron AI OS",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "offers": {
          "@type": "Offer",
          "description": "Done-for-you custom AI system implementation with private, self-hosted LLMs.",
          "availability": "https://schema.org/InStock"
        },
        "publisher": {
          "@id": `${SITE_URL}/#organization`
        }
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <CookieBanner />
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
