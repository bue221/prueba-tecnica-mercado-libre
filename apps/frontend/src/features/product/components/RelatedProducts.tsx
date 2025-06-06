import ProductCard from "@/components/ProductCard";
import { cn } from "@/lib/utils";
import { Product } from "@mercado-libre/shared";


interface RelatedProductsProps {
    products: Product[];
    title: string;
    variant?: "horizontal" | "vertical";
}

export const RelatedProducts = ({ products, title, variant = "horizontal" }: RelatedProductsProps) => {
    return (
        <div className="mt-8 px-2 md:px-0">
            <h3 className="text-lg font-medium text-gray-800 mb-2">
                {title}
            </h3>
            <div className="text-xs text-gray-500 mb-4">Patrocinado</div>

            <div className={cn("flex gap-2 overflow-x-auto", variant !== "horizontal" ? "flex-row" : "flex-col")}>
                {products.map((product, i) => (
                    <ProductCard key={i}
                        slug={product.slug}
                        image={product.images[0]}
                        title={product.title}
                        currentPrice={product.pricing.currentPrice.toString()}
                        originalPrice={product.pricing.originalPrice.toString()}
                        discount={product.pricing.discount.toString()}
                        installments={{
                            count: product.pricing.installments.count,
                            amount: product.pricing.installments.amount.toString(),
                            interest: product.pricing.installments.interest.toString(),
                        }}
                        shipping={{
                            isFree: product.shipping.isFree,
                            delivery: product.shipping.deliveryTime,
                            isFull: product.shipping.isFree,
                        }}
                        variant={variant}
                    />
                ))}
            </div>
        </div>
    );
}; 