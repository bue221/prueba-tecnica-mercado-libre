import CarouselBanner from "@/components/CarouselBanner";
import ProductSection from "@/components/ProductSection";
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
      <main className="max-w-7xl mx-auto px-4 py-6 z-10 relative">
        <div className="mt-8 w-full gap-6 flex flex-col">
          <ProductSection />
          <div className="bg-white rounded-lg shadow p-4">
            <ProductSection />
          </div>
          <div>
            <img src="/img/banner_2.webp" alt="Banner" className="w-full h-full object-cover rounded-lg" />
          </div>
          <ProductSection />
        </div>
      </main>
    </div>
  );
}
