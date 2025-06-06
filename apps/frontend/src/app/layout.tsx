import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Mercado Libre - Envíos Gratis en el día",
    template: "%s | Mercado Libre"
  },
  description: "Comprá productos con Envío Gratis en el día en Mercado Libre Argentina. Encontrá miles de marcas y productos a precios increíbles.",
  keywords: ["mercado libre", "compras online", "envío gratis", "ofertas", "productos"],
  authors: [{ name: "Mercado Libre" }],
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://www.mercadolibre.com.ar",
    siteName: "Mercado Libre",
    title: "Mercado Libre - Envíos Gratis en el día",
    description: "Comprá productos con Envío Gratis en el día en Mercado Libre Argentina. Encontrá miles de marcas y productos a precios increíbles.",
    images: [
      {
        url: "/seo-card.webp",
        width: 1200,
        height: 630,
        alt: "Mercado Libre"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mercado Libre - Envíos Gratis en el día",
    description: "Comprá productos con Envío Gratis en el día en Mercado Libre Argentina. Encontrá miles de marcas y productos a precios increíbles.",
    images: ["/seo-card.webp"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/img/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/img/favicon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#ebebeb]`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
