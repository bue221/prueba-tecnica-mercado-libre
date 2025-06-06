import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ProductGallery,
  ProductInfo,
  ProductPurchase,
  ProductCharacteristics,
  ProductDescription,
  RelatedProducts,
  SellerInfo,
  PaymentMethods,
} from "@/features/product/components";
import { Metadata } from "next";

const API_KEY = '1234'

async function getProduct(slug: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/slug/${slug}`, {
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY
    },
  });
  return response.json();
}

async function getRelatedProducts(id: number) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}/recommended`, {
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY
    },
  });
  return response.json();
}

// Generate metadata for the product page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    return {
      title: "Producto no encontrado",
    };
  }

  return {
    title: product.title,
    description: `${product.title} - ${product.condition} | ${product.soldCount}+ vendidos`,
    openGraph: {
      title: product.title,
      description: `${product.title} - ${product.condition} | ${product.soldCount}+ vendidos`,
      images: product.images.map((img: string) => ({
        url: img,
        width: 1200,
        height: 630,
        alt: product.title,
      })),
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: `${product.title} - ${product.condition} | ${product.soldCount}+ vendidos`,
      images: product.images,
    },
  };
}

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) return notFound();

  const relatedProducts = await getRelatedProducts(product.id);

  // Split related products into two groups: 30% and 70%
  const splitIndex = Math.ceil(relatedProducts.length * 0.3);
  const firstGroup = relatedProducts.slice(0, splitIndex);
  const secondGroup = relatedProducts.slice(splitIndex);

  return (
    <div className="min-h-screen font-sans">
      {/* Breadcrumb */}
      <div className="bg-gray-100 px-2 md:px-4 py-2 mb-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-0">
          <div className="flex flex-wrap items-center gap-1 text-xs text-blue-600">
            <Link href="/" className="hover:underline cursor-pointer">Inicio</Link>
            <span className="text-gray-400">/</span>
            <Link href="/search" className="hover:underline cursor-pointer">Volver al listado</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">{product.title}</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-blue-600">
            <span className="hover:underline cursor-pointer">Vender uno igual</span>
            <span className="hover:underline cursor-pointer">Compartir</span>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-2 md:px-4 py-4 md:py-8 bg-white rounded-sm shadow-lg">
        <div className="max-w-7xl mx-auto px-2 md:px-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            {/* Left and Center Columns */}
            <div className="col-span-1 md:col-span-8">
              <ProductGallery images={product.images} />
              <ProductInfo product={product} />
              <ProductCharacteristics specifications={product.specifications} />
              <RelatedProducts products={firstGroup} title="Productos similares" variant="vertical" />

              <ProductDescription description={product.description} />
            </div>

            {/* Right Sidebar */}
            <div className="col-span-1 md:col-span-4">
              <div className="md:h-[1800px]">
                <div className="sticky top-0 px-2 md:px-0 mb-12">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-blue-600 cursor-pointer hover:underline">
                        Visita la Tienda oficial de {product.seller.name}
                      </span>
                      <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">?</span>
                      </div>
                    </div>

                    <ProductPurchase product={product} />
                    <SellerInfo seller={product.seller} />
                    <PaymentMethods product={product} />
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-4" />
              <RelatedProducts products={secondGroup} title="También te puede interesar" variant="horizontal" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

