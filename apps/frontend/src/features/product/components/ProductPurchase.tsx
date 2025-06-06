import { Heart, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@mercado-libre/shared";

interface ProductPurchaseProps {
    product: Product;
}

export const ProductPurchase = ({ product }: ProductPurchaseProps) => {
    return (
        <Card className="border border-gray-200">
            <CardContent className="p-3 md:p-4 space-y-4">
                {/* Shipping */}
                <div className="flex items-start gap-2">
                    <Heart className="w-4 h-4 text-gray-400 mt-0.5" />
                    <div className="flex-1">
                        <div className="text-sm font-medium text-gray-800 mb-1">
                            Envío gratis a todo el país
                        </div>
                        <div className="text-xs text-gray-600 mb-1">
                            Conocé los tiempos y las formas de envío.
                        </div>
                        <div className="text-xs text-blue-600 cursor-pointer hover:underline">
                            Calcular cuándo llega
                        </div>
                    </div>
                </div>

                {/* Stock */}
                <div>
                    <div className="text-sm font-medium text-gray-800 mb-1">
                        Stock disponible
                    </div>
                    <div className="text-sm text-gray-600">
                        Cantidad: <span className="font-medium">1 unidad</span> - (+
                        {product.stats.stockAvailable} disponibles)
                    </div>
                </div>

                {/* Purchase Buttons */}
                <div className="space-y-2">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3">
                        Comprar ahora
                    </Button>
                    <Button
                        variant="outline"
                        className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 py-3"
                    >
                        Agregar al carrito
                    </Button>
                </div>

                {/* Additional Info */}
                <div className="space-y-3 text-xs text-gray-600">
                    <div className="flex items-start gap-2">
                        <div className="w-4 h-4 bg-gray-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span>🚚</span>
                        </div>
                        <span>
                            Devolución gratis. Tenés 30 días desde que lo recibís.
                        </span>
                    </div>

                    <div className="flex items-start gap-2">
                        <div className="w-4 h-4 bg-gray-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Shield className="w-2 h-2" />
                        </div>
                        <span>
                            Compra Protegida, recibí el producto que esperabas o te devolvemos tu
                            dinero.
                        </span>
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
    );
}; 