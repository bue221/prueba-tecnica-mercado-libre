import CarouselBanner from "@/components/CarouselBanner";
import MainContent from "@/components/MainContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mercado Libre - Envíos Gratis en el día",
  description: "Comprá productos con Envío Gratis en el día en Mercado Libre Argentina. Encontrá miles de marcas y productos a precios increíbles.",
  openGraph: {
    title: "Mercado Libre - Envíos Gratis en el día",
    description: "Comprá productos con Envío Gratis en el día en Mercado Libre Argentina. Encontrá miles de marcas y productos a precios increíbles.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mercado Libre - Envíos Gratis en el día"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mercado Libre - Envíos Gratis en el día",
    description: "Comprá productos con Envío Gratis en el día en Mercado Libre Argentina. Encontrá miles de marcas y productos a precios increíbles.",
    images: ["/og-image.jpg"]
  }
};

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <div className="w-full md:-mb-32">
        <CarouselBanner
          images={[
            "/img/carousel_1.webp",
            "/img/carousel_2.webp",
            "/img/carousel_3.webp"
          ]}
        />
      </div>
      <MainContent />
    </div>
  );
}
