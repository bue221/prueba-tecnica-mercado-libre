import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/lib/utils";
import { Product } from "@mercado-libre/shared";

interface ProductInfoProps {
    product: Product;
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
    return (
        <div className="space-y-4 px-2 md:px-0">
            {/* Condition and Sales */}
            <div className="flex flex-wrap items-center gap-2 text-sm">
                <span className="text-gray-600">{product.condition}</span>
                <span className="text-gray-400">|</span>
                <span className="text-gray-600">+{product.stats.soldCount} vendidos</span>
            </div>

            {/* Title */}
            <h1 className="text-xl md:text-2xl text-gray-800 font-normal leading-tight">
                {product.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2">
                <div className="flex items-center">
                    {Array.from({ length: product.stats.rating }).map((_, index) => (
                        <Star key={index} className="w-3 h-3 fill-orange-400 text-orange-400" />
                    ))}
                </div>
                <span className="text-sm text-gray-600">({product.stats.reviewCount})</span>
            </div>

            {/* Price Section */}
            <div className="space-y-2">
                <div className="text-xs text-gray-500 line-through">
                    {formatPrice(product.pricing.originalPrice)}
                </div>
                <div className="flex flex-wrap items-baseline gap-2">
                    <span className="text-2xl md:text-3xl font-light text-gray-800">
                        {formatPrice(product.pricing.currentPrice)}
                    </span>
                    <Badge className="bg-green-500 text-white text-xs px-2 py-1">
                        {product.pricing.discount}% OFF
                    </Badge>
                    <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">?</span>
                    </div>
                </div>
                {product.pricing.installments.count > 0 && (
                    <div className="text-sm text-gray-600">
                        en {product.pricing.installments.count} cuotas de{" "}
                        <span className="font-medium">
                            {formatPrice(product.pricing.installments.amount)}
                        </span>{" "}
                        sin interés
                    </div>
                )}
                {product.pricing.discount > 0 && (
                    <div className="inline-block">
                        <Badge className="bg-blue-100 text-blue-700 text-xs px-2 py-1 border border-blue-300">
                            {product.pricing.discount}% OFF CON BLUE VISA
                        </Badge>
                    </div>
                )}
                <div className="text-xs text-blue-600 cursor-pointer hover:underline">
                    Ver los medios de pago y promociones
                </div>
            </div>
        </div>
    );
}; 