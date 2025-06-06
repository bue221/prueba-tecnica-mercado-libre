import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getSellerRatingColor } from "@/lib/utils";
import { Product } from "@mercado-libre/shared";

interface SellerInfoProps {
    seller: Product["seller"];
}

export const SellerInfo = ({ seller }: SellerInfoProps) => {
    return (
        <Card className="bg-black text-white">
            <CardContent className="p-3 md:p-4">
                <div className="flex items-center justify-between mb-3">
                    <div>
                        <div className="text-sm font-medium">Tienda Oficial</div>
                        <div className="text-xl font-bold">{seller.name}</div>
                        <div className="text-xs text-gray-300">MercadoLibre</div>
                        <div className="text-xs text-gray-300">{seller.totalSales} Productos</div>
                    </div>
                    <div className="text-right">
                        <div className="flex gap-1 mb-2">
                            <div className="flex flex-col items-center">
                                <div
                                    className={`w-2 h-2 rounded-full mb-1 ${getSellerRatingColor(
                                        seller.rating
                                    )}`}
                                ></div>
                                <div className="text-xs">Atención</div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div
                                    className={`w-2 h-2 rounded-full mb-1 ${getSellerRatingColor(
                                        seller.rating
                                    )}`}
                                ></div>
                                <div className="text-xs">Entrega</div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div
                                    className={`w-2 h-2 rounded-full mb-1 ${getSellerRatingColor(
                                        seller.rating
                                    )}`}
                                ></div>
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
    );
}; 