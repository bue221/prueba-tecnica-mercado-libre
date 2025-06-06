'use client'
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image"
import { Star, Heart, Shield, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { Product } from "@mercado-libre/shared";

// // Generate metadata for the product page
// export function generateMetadata(): Promise<Metadata> {
//   const product = useSelector((state: RootState) => state.products.product);

//   if (!product) {
//     return {
//       title: "Producto no encontrado",
//     };
//   }

//   return {
//     title: product.title,
//     description: `${product.title} - ${product.condition} | ${product.soldCount}+ vendidos`,
//     openGraph: {
//       title: product.title,
//       description: `${product.title} - ${product.condition} | ${product.soldCount}+ vendidos`,
//       images: product.images.map((img: any) => ({
//         url: img,
//         width: 1200,
//         height: 630,
//         alt: product.title,
//       })),
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: product.title,
//       description: `${product.title} - ${product.condition} | ${product.soldCount}+ vendidos`,
//       images: product.images,
//     },
//   };
// }

export default function ProductDetail() {
  const product: Product = useSelector((state: RootState) => state.products.product);
  if (!product) return notFound();

  const mainImage = product.images[0]
  const images = product.images

  return (
    <div className="min-h-screen font-sans">
      {/* Breadcrumb */}
      <div className="bg-gray-100 px-2 md:px-4 py-2 mb-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-0">
          <div className="flex flex-wrap items-center gap-1 text-xs text-blue-600">
            <span className="hover:underline cursor-pointer">Volver al listado</span>
            <span className="text-gray-400">|</span>
            <span className="hover:underline cursor-pointer">Celulares y Teléfonos</span>
            <span className="text-gray-400">&gt;</span>
            <span className="hover:underline cursor-pointer">Celulares y Smartphones</span>
            <span className="text-gray-400">&gt;</span>
            <span>Samsung</span>
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
            {/* Left Column - Image Gallery */}
            <div className="hidden md:block md:col-span-2">
              <div className="space-y-2">
                {images.map((i, index) => (
                  <div
                    key={i}
                    className={`w-full h-16 border-2 rounded cursor-pointer hover:border-blue-500 ${index === 0 ? "border-blue-500" : "border-gray-200"
                      }`}
                  >
                    <Image
                      src={i}
                      alt={`Vista ${i}`}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Center Column - Main Image and Product Info */}
            <div className="col-span-1 md:col-span-6">
              {/* Main Product Image */}
              <div className="bg-white rounded-lg mb-6 p-2 md:p-8 flex justify-center h-[250px] sm:h-[400px] md:h-[600px]">
                <div className="sticky top-0 w-full h-[400px]">
                  <Image
                    src={mainImage}
                    alt={product.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className="border-b border-gray-200"></div>

              {/* Product Title and Info */}
              <div className="space-y-4 px-2 md:px-0">
                {/* Condition and Sales */}
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <span className="text-gray-600">Nuevo</span>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-600">+500 vendidos</span>
                </div>

                {/* Title */}
                <h1 className="text-xl md:text-2xl text-gray-800 font-normal leading-tight">
                  Samsung Galaxy A55 5G Dual SIM 256 GB azul oscuro 8 GB RAM
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-3 h-3 fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">(503)</span>
                </div>

                {/* Price Section */}
                <div className="space-y-2">
                  <div className="text-xs text-gray-500 line-through">US$ 499</div>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="text-2xl md:text-3xl font-light text-gray-800">US$ 439</span>
                    <Badge className="bg-green-500 text-white text-xs px-2 py-1">12% OFF</Badge>
                    <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">?</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    en 12 cuotas de <span className="font-medium">$ 1.918</span> sin interés
                  </div>
                  <div className="inline-block">
                    <Badge className="bg-blue-100 text-blue-700 text-xs px-2 py-1 border border-blue-300">
                      30% OFF CON BLUE VISA
                    </Badge>
                  </div>
                  <div className="text-xs text-blue-600 cursor-pointer hover:underline">
                    Ver los medios de pago y promociones
                  </div>
                </div>

                {/* Color Selection */}
                <div className="space-y-2">
                  <div className="text-sm font-medium text-gray-700">Color: Azul oscuro</div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-blue-900 rounded border-2 border-blue-500 cursor-pointer"></div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-3">
                  <div className="text-sm font-medium text-gray-700">Lo que tenés que saber de este producto</div>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Memoria RAM: 8 GB</li>
                    <li>• Dispositivo desbloqueado para que elijas la compañía telefónica que prefieras.</li>
                    <li>• Memoria interna de 256 GB.</li>
                  </ul>
                  <div className="text-xs text-blue-600 cursor-pointer hover:underline">Ver características</div>
                </div>

                {/* Purchase Options */}
                <div className="space-y-2">
                  <div className="text-sm font-medium text-gray-700">Opciones de compra</div>
                  <div className="text-sm text-blue-600 cursor-pointer hover:underline">
                    3 productos nuevos desde US$ 439
                  </div>
                </div>
              </div>

              {/* Related Products */}
              <div className="mt-8 px-2 md:px-0">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Productos relacionados</h3>
                <div className="text-xs text-gray-500 mb-4">Patrocinado</div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    {
                      name: "Samsung Galaxy M55 5g 8+256gb Dual Sim Teletrabajo",
                      price: "US$ 421",
                      originalPrice: "US$ 499",
                      discount: "15% OFF",
                      installments: "en 12 cuotas de $ 1.833 sin interés",
                    },
                    {
                      name: "Motorola Edge 50 Fusion 5g 256 Gb Azul Ártico 8 Gb Ram",
                      price: "US$ 419",
                      originalPrice: "US$ 499",
                      discount: "16% OFF",
                      installments: "en 12 cuotas de $ 1.826 sin interés",
                    },
                    {
                      name: "Samsung Galaxy A16 5g Ram 256gb Negro Telcel",
                      price: "US$ 326",
                      originalPrice: "US$ 399",
                      discount: "18% OFF",
                      installments: "en 12 cuotas de $ 1.424 sin interés",
                    },
                  ].map((product, i) => (
                    <Card key={i} className="cursor-pointer hover:shadow-md transition-shadow border border-gray-200">
                      <CardContent className="p-3">
                        <div className="aspect-square mb-3 bg-gray-50 rounded flex items-center justify-center">
                          <Image
                            src="/placeholder.svg"
                            alt={product.name}
                            width={120}
                            height={120}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                        <h4 className="text-sm text-gray-800 mb-2 line-clamp-2 leading-tight">{product.name}</h4>
                        <div className="space-y-1">
                          <div className="text-xs text-gray-500 line-through">{product.originalPrice}</div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-base md:text-lg font-medium text-gray-800">{product.price}</span>
                            <Badge className="bg-green-500 text-white text-xs px-1 py-0.5">{product.discount}</Badge>
                          </div>
                          <div className="text-xs text-gray-600">{product.installments}</div>
                          <div className="text-xs text-green-600 font-medium">Envío gratis</div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Samsung Products */}
              <div className="mt-8 px-2 md:px-0">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Productos de Samsung</h3>
                <div className="space-y-4">
                  {[
                    {
                      name: "Samsung Galaxy S25 256 Gb Gris Titanio Oficial",
                      price: "US$ 959",
                      discount: "24% OFF",
                      installments: "en 12 cuotas de $ 4.184,24 sin interés",
                    },
                    {
                      name: "Samsung Galaxy S25 Plus 512 Gb Gris Titanio Oficial",
                      price: "US$ 1.379",
                      discount: "18% OFF",
                      installments: "en 12 cuotas de $ 6.014,44 sin interés",
                    },
                  ].map((product, i) => (
                    <div
                      key={i}
                      className="flex gap-4 p-3 border border-gray-200 rounded cursor-pointer hover:shadow-sm transition-shadow"
                    >
                      <div className="w-16 h-16 bg-gray-50 rounded flex items-center justify-center flex-shrink-0">
                        <Image
                          src="/placeholder.svg"
                          alt={product.name}
                          width={64}
                          height={64}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm text-gray-800 mb-1 line-clamp-2">{product.name}</h4>
                        <div className="space-y-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-base md:text-lg font-medium text-gray-800">{product.price}</span>
                            <Badge className="bg-green-500 text-white text-xs px-1 py-0.5">{product.discount}</Badge>
                          </div>
                          <div className="text-xs text-gray-600">{product.installments}</div>
                          <div className="text-xs text-green-600 font-medium">Envío gratis</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Button variant="link" className="text-blue-600 p-0 text-sm hover:underline">
                    Ver más productos de Samsung
                  </Button>
                </div>
              </div>

              {/* Product Characteristics */}
              <div className="mt-8 px-2 md:px-0">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Características del producto</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-gray-600 text-sm">📱</span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-800">Tamaño de la pantalla: 6.6"</div>
                        <div className="text-xs text-gray-600">(16.51 cm x 7.74 cm x 8.2 mm)</div>
                        <div className="mt-2">
                          <div className="text-xs text-gray-600 mb-1">PEQUEÑO</div>
                          <div className="w-32 h-2 bg-gray-200 rounded-full">
                            <div className="w-24 h-2 bg-blue-500 rounded-full"></div>
                          </div>
                          <div className="text-xs text-gray-600 mt-1">GRANDE</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                        <span className="text-gray-600 text-sm">💾</span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-800">Memoria interna: 256 GB</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                        <span className="text-gray-600 text-sm">📷</span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-800">Cámara trasera principal: 50 Mpx</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                        <span className="text-gray-600 text-sm">📶</span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-800">Con NFC: Sí</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                        <span className="text-gray-600 text-sm">📷</span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-800">Cámara frontal principal: 32 Mpx</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                        <span className="text-gray-600 text-sm">🔒</span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-800">
                          Desbloqueo: Huella dactilar y reconocimiento facial
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <Button variant="link" className="text-blue-600 p-0 text-sm hover:underline flex items-center gap-1">
                    Ver todas las características
                    <ChevronDown className="w-3 h-3" />
                  </Button>
                </div>
              </div>

              {/* Description */}
              <div className="mt-8 px-2 md:px-0">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Descripción</h3>
                <div className="space-y-4 text-sm text-gray-700">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Capacidad y eficiencia</h4>
                    <p className="leading-relaxed">
                      Con tu potente procesador y 8 GB de RAM, su computadora logrará un alto rendimiento con una alta
                      velocidad de transmisión de contenido y ejecutar varias aplicaciones al mismo tiempo, sin demoras.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Capacidad de almacenamiento ilimitada</h4>
                    <p className="leading-relaxed">
                      Olvídate de borrar. Con su memoria interna de 256 GB puedes descargar todos los archivos y
                      aplicaciones que necesites, guardar fotos y almacenar tus películas, series y videos favoritos para
                      reproducirlos cuando quieras.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="col-span-1 md:col-span-4">
              <div className="sticky top-0 px-2 md:px-0">
                <div className="space-y-4">
                  {/* Seller Info */}
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-blue-600 cursor-pointer hover:underline">
                      Visita la Tienda oficial de Samsung
                    </span>
                    <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">?</span>
                    </div>
                  </div>

                  {/* Main Purchase Card */}
                  <Card className="border border-gray-200">
                    <CardContent className="p-3 md:p-4 space-y-4">
                      {/* Shipping */}
                      <div className="flex items-start gap-2">
                        <Heart className="w-4 h-4 text-gray-400 mt-0.5" />
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-800 mb-1">Envío gratis a todo el país</div>
                          <div className="text-xs text-gray-600 mb-1">Conocé los tiempos y las formas de envío.</div>
                          <div className="text-xs text-blue-600 cursor-pointer hover:underline">Calcular cuándo llega</div>
                        </div>
                      </div>

                      {/* Stock */}
                      <div>
                        <div className="text-sm font-medium text-gray-800 mb-1">Stock disponible</div>
                        <div className="text-sm text-gray-600">
                          Cantidad: <span className="font-medium">1 unidad</span> - (+99 disponibles)
                        </div>
                      </div>

                      {/* Purchase Buttons */}
                      <div className="space-y-2">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3">
                          Comprar ahora
                        </Button>
                        <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 py-3">
                          Agregar al carrito
                        </Button>
                      </div>

                      {/* Additional Info */}
                      <div className="space-y-3 text-xs text-gray-600">
                        <div className="flex items-start gap-2">
                          <div className="w-4 h-4 bg-gray-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span>🚚</span>
                          </div>
                          <span>Devolución gratis. Tenés 30 días desde que lo recibís.</span>
                        </div>

                        <div className="flex items-start gap-2">
                          <div className="w-4 h-4 bg-gray-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Shield className="w-2 h-2" />
                          </div>
                          <span>Compra Protegida, recibí el producto que esperabas o te devolvemos tu dinero.</span>
                        </div>

                        <div className="flex items-start gap-2">
                          <div className="w-4 h-4 bg-gray-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span>🛡️</span>
                          </div>
                          <span>1 año de garantía de fábrica.</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Official Store */}
                  <Card className="bg-black text-white">
                    <CardContent className="p-3 md:p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <div className="text-sm font-medium">Tienda Oficial</div>
                          <div className="text-xl font-bold">Samsung</div>
                          <div className="text-xs text-gray-300">MercadoLibre</div>
                          <div className="text-xs text-gray-300">+80 Productos</div>
                        </div>
                        <div className="text-right">
                          <div className="flex gap-1 mb-2">
                            <div className="flex flex-col items-center">
                              <div className="w-2 h-2 bg-green-400 rounded-full mb-1"></div>
                              <div className="text-xs">Atención</div>
                            </div>
                            <div className="flex flex-col items-center">
                              <div className="w-2 h-2 bg-green-400 rounded-full mb-1"></div>
                              <div className="text-xs">Entrega</div>
                            </div>
                            <div className="flex flex-col items-center">
                              <div className="w-2 h-2 bg-green-400 rounded-full mb-1"></div>
                              <div className="text-xs">Tiempo</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button className="w-full bg-white text-black hover:bg-gray-100 font-medium">
                        Ir a la Tienda oficial
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Other Purchase Options */}
                  <Card className="border border-gray-200">
                    <CardContent className="p-3 md:p-4">
                      <h4 className="text-sm font-medium text-gray-800 mb-3">Otras opciones de compra</h4>
                      <div className="text-sm text-blue-600 cursor-pointer hover:underline">
                        Ver 3 opciones desde US$ 439
                      </div>
                    </CardContent>
                  </Card>

                  {/* Payment Methods */}
                  <Card className="border border-gray-200">
                    <CardContent className="p-3 md:p-4 space-y-4">
                      <h4 className="text-sm font-medium text-gray-800">Medios de pago</h4>

                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium">
                        Pagá en hasta 12 cuotas sin interés
                      </Button>

                      <div className="space-y-3">
                        <div>
                          <div className="text-sm font-medium text-gray-800 mb-2">Tarjetas de crédito</div>
                          <div className="text-xs text-gray-600 mb-2">Hasta 12 cuotas sin interés</div>
                          <div className="flex flex-wrap gap-2">
                            <div className="w-8 h-5 bg-red-500 rounded text-white text-xs flex items-center justify-center font-bold">
                              MC
                            </div>
                            <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                              VISA
                            </div>
                            <div className="w-8 h-5 bg-blue-400 rounded text-white text-xs flex items-center justify-center font-bold">
                              AMEX
                            </div>
                            <div className="w-8 h-5 bg-purple-600 rounded text-white text-xs flex items-center justify-center font-bold">
                              OCA
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className="text-sm font-medium text-gray-800 mb-2">Tarjetas de débito</div>
                          <div className="flex flex-wrap gap-2">
                            <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                              VISA
                            </div>
                            <div className="w-8 h-5 bg-red-500 rounded text-white text-xs flex items-center justify-center font-bold">
                              MC
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className="text-sm font-medium text-gray-800 mb-2">Efectivo</div>
                          <div className="flex flex-wrap gap-2">
                            <div className="w-8 h-5 bg-black rounded text-white text-xs flex items-center justify-center font-bold">
                              A
                            </div>
                            <div className="w-8 h-5 bg-green-600 rounded text-white text-xs flex items-center justify-center font-bold">
                              BROU
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="text-xs text-blue-600 cursor-pointer hover:underline">
                        Conocé otros medios de pago
                      </div>
                    </CardContent>
                  </Card>

                  {/* Related Products Sidebar */}
                  <Card className="border border-gray-200">
                    <CardContent className="p-3 md:p-4">
                      <h4 className="text-sm font-medium text-gray-800 mb-2">Productos relacionados</h4>
                      <div className="text-xs text-gray-500 mb-3">Patrocinado</div>

                      <div className="space-y-3">
                        {[
                          {
                            name: "Samsung Galaxy M55 5g 8+256gb Dual Sim",
                            price: "US$ 421",
                            discount: "15% OFF",
                            installments: "en 12 cuotas de $ 1.833 sin interés",
                          },
                          {
                            name: "Motorola Edge 50 Fusion 5g 256 Gb Azul Ártico 8 Gb Ram",
                            price: "US$ 419",
                            discount: "16% OFF",
                            installments: "en 12 cuotas de $ 1.826 sin interés",
                          },
                          {
                            name: "Samsung Galaxy A16 5g Ram 256gb Negro Telcel",
                            price: "US$ 326",
                            discount: "18% OFF",
                            installments: "en 12 cuotas de $ 1.424 sin interés",
                          },
                          {
                            name: "Motorola G84 5g 256gb Gris Azul",
                            price: "US$ 329",
                            discount: "19% OFF",
                            installments: "en 12 cuotas de $ 1.438 sin interés",
                          },
                        ].map((product, i) => (
                          <div
                            key={i}
                            className="flex gap-3 p-2 border border-gray-200 rounded cursor-pointer hover:shadow-sm transition-shadow"
                          >
                            <div className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center flex-shrink-0">
                              <Image
                                src="/placeholder.svg"
                                alt={product.name}
                                width={48}
                                height={48}
                                className="max-w-full max-h-full object-contain"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h5 className="text-xs text-gray-800 line-clamp-2 mb-1 leading-tight">{product.name}</h5>
                              <div className="space-y-0.5">
                                <div className="flex flex-wrap items-center gap-1">
                                  <span className="text-sm font-medium text-gray-800">{product.price}</span>
                                  <Badge className="bg-green-500 text-white text-xs px-1 py-0">{product.discount}</Badge>
                                </div>
                                <div className="text-xs text-gray-600">{product.installments}</div>
                                <div className="text-xs text-green-600 font-medium">Envío gratis</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

