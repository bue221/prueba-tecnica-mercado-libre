import React from "react";
import ProductCard from "@/components/ProductCard";
import { Product } from "@mercado-libre/shared";

interface ProductSectionProps {
  products: Product[];
  onClickProduct?: (product: Product) => void;
}

const ProductSection = ({ products, onClickProduct }: ProductSectionProps) => {
  return (
    <div className="flex gap-6 w-full overflow-x-auto">
      {products.map((product, idx) => (
        <ProductCard key={idx}
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
          onClick={() => onClickProduct?.(product)}
        />
      ))}
    </div>
  );
};

export default ProductSection; 