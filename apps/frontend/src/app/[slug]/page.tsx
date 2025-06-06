import PaymentMethods from "@/components/PaymentMethods";
import { notFound } from "next/navigation";
import { Metadata } from "next";

// Simulated product data
const products = [
  {
    slug: "maquina-de-afeitar-afeitadoras-electricas-hombre-inalambrica-color-dorado-5",
    title: "Maquina De Afeitar Afeitadoras Electricas Hombre Inalambrica Color Dorado 5",
    price: 14290,
    condition: "Nuevo",
    soldCount: 1000,
    rating: 4.0,
    reviewCount: 116,
    color: "Dorado",
    specifications: {
      voltage: "5V",
      functions: ["afeitar"],
      wireless: true,
      batteryLife: "4 h",
      chargeTime: "2 h",
      waterResistant: true,
      silent: true,
      travelFriendly: true,
      combs: 4,
      includedAccessories: ["peines"]
    },
    images: [
      "/maquina-afeitar-1.jpg",
      "/maquina-afeitar-2.jpg",
      "/maquina-afeitar-3.jpg",
      "/maquina-afeitar-4.jpg",
    ],
    seller: {
      name: "HOME STORE COLOMBIA",
      level: "MercadoLíder Platinum",
      sales: "100mil",
      rating: 4.5
    }
  }
];

// Generate metadata for the product page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);

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
      images: product.images.map((img) => ({
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

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  return (
    <div className="min-h-screen font-sans">
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4">
          Belleza y Cuidado Personal &gt; Barbería &gt; Afeitadoras &gt; Afeitadoras Eléctricas
        </div>
        <div className="flex flex-col md:flex-row gap-8 bg-white p-2 shadow-lg rounded-sm">
          {/* Columna Izquierda: Galería + Detalles (scroll normal) */}
          <div className="w-full md:w-2/3 flex flex-col gap-6">
            {/* Galería */}
            <div>
              <div className="flex gap-4">
                {/* Miniaturas verticales */}
                <div className="flex flex-col gap-2">
                  {product.images.map((img, i) => (
                    <div key={i} className="w-14 h-14 bg-gray-200 rounded border border-gray-300 flex items-center justify-center overflow-hidden cursor-pointer">
                      <span className="text-gray-400 text-xs">img</span>
                    </div>
                  ))}
                </div>
                {/* Imagen principal */}
                <div className="w-full max-w-md aspect-[4/5] bg-gray-200 rounded flex items-center justify-center border border-gray-300">
                  <span className="text-gray-400 text-lg">[Imagen principal]</span>
                </div>
              </div>
            </div>

            {/* Detalles del producto */}
            <section className="bg-white rounded-lg shadow-lg p-8 flex flex-col gap-6 min-w-0">
              <div className="flex items-center gap-2 text-base text-gray-500">
                <span>{product.condition}</span>
                <span>|</span>
                <span>+{product.soldCount} vendidos</span>
              </div>

              <h1 className="text-3xl font-bold text-black leading-tight mb-2">{product.title}</h1>

              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl font-bold text-black">${product.price.toLocaleString()}</span>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400 text-xl">★</span>
                  <span className="text-base font-semibold">{product.rating}</span>
                  <span className="text-base text-gray-500">({product.reviewCount})</span>
                </div>
              </div>

              {/* Placeholder: cuotas, descuentos, stock, envío */}
              <div className="bg-[#f5f6fa] rounded p-4 text-gray-700 text-sm mb-2 border border-gray-100">
                <span>[Cuotas, descuentos, stock y envío aquí]</span>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <h2 className="text-lg font-semibold mb-2">Lo que tienes que saber de este producto</h2>
                <ul className="list-disc list-inside text-base text-gray-600 space-y-1">
                  <li>Voltaje: {product.specifications.voltage}</li>
                  <li>Funciones adicionales: {product.specifications.functions.join(", ")}</li>
                  <li>Es inalámbrica y funciona con batería recargable</li>
                  <li>Puedes utilizarla durante un tiempo máximo de {product.specifications.batteryLife}</li>
                  <li>Se carga al 100% en aproximadamente {product.specifications.chargeTime}</li>
                  <li>Resistente al agua y con cabezales lavables</li>
                  <li>Es silenciosa</li>
                  <li>Práctica para llevarla a todos tus viajes</li>
                  <li>Viene con {product.specifications.combs} peines</li>
                </ul>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <h2 className="text-lg font-semibold mb-2">Color: {product.color}</h2>
                <div className="flex gap-2">
                  <button className="w-8 h-8 rounded-full bg-yellow-400 border-2 border-blue-500"></button>
                </div>
              </div>

              {/* Placeholder: Características técnicas */}
              <div className="mt-6 bg-[#f5f6fa] rounded p-4 border border-gray-100">
                <span>[Características técnicas aquí]</span>
              </div>

              {/* Placeholder: Descripción */}
              <div className="mt-6 bg-[#f5f6fa] rounded p-4 border border-gray-100">
                <span>[Descripción detallada aquí]</span>
              </div>

              {/* Placeholder: Productos relacionados */}
              <div className="mt-6 bg-[#f5f6fa] rounded p-4 border border-gray-100">
                <span>[Productos relacionados aquí]</span>
              </div>
            </section>
          </div>

          {/* Columna Derecha: Sidebar Sticky */}
          <aside className="w-full md:w-1/3 flex flex-col gap-6">
            <div className="sticky top-8">
              <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col gap-4 mb-6">
                <button className="w-full bg-blue-500 text-white px-4 py-3 rounded font-semibold text-lg shadow hover:bg-blue-600 transition">Comprar ahora</button>
                <button className="w-full bg-blue-100 text-blue-700 px-4 py-3 rounded font-semibold text-lg shadow hover:bg-blue-200 transition">Agregar al carrito</button>
                <div className="mt-2">
                  <PaymentMethods />
                </div>
                <div className="border-t border-gray-200 pt-4 mt-2">
                  <h2 className="text-base font-semibold mb-2">Información del vendedor</h2>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold">{product.seller.name}</span>
                    <span className="text-sm text-gray-500">{product.seller.level}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">+{product.seller.sales} ventas</span>
                    <span className="text-sm text-gray-500">|</span>
                    <span className="text-sm text-gray-500">Calificación {product.seller.rating}</span>
                  </div>
                </div>
              </div>
              {/* Placeholder: Productos relacionados sidebar */}
              <div className="bg-white rounded-lg shadow-lg p-4">
                <span>[Productos relacionados sidebar aquí]</span>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
} 