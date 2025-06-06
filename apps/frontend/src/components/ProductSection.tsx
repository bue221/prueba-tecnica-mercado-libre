import React from "react";
import ProductCard from "@/components/ProductCard";

// Example product data with real images and details
const productsDefault = [
  {
    image: "/images/recortadora.png",
    title: "Recortador Para Barba Y Pelo 7 En 1 Philips...",
    originalPrice: "$ 259.900",
    currentPrice: "$ 179.900",
    discount: "30%",
    installments: {
      count: 3,
      amount: "$ 59.967",
      interest: "0%",
    },
    shipping: {
      isFree: true,
      delivery: "mañana",
      isFull: true,
    },
  },
  {
    image: "/images/ups.png",
    title: "Ups Interactiva Forza Bt-1001, 1000va/600w 8 Tomas Regulador...",
    originalPrice: "$ 328.429",
    currentPrice: "$ 219.900",
    discount: "33%",
    installments: {
      count: 3,
      amount: "$ 73.300",
      interest: "0%",
    },
    shipping: {
      isFree: true,
      delivery: "",
      isFull: true,
    },
  },
  {
    image: "/images/recortadora.png",
    title: "Recortador Para Barba Y Pelo 7 En 1 Philips...",
    originalPrice: "$ 259.900",
    currentPrice: "$ 179.900",
    discount: "30%",
    installments: {
      count: 3,
      amount: "$ 59.967",
      interest: "0%",
    },
    shipping: {
      isFree: true,
      delivery: "mañana",
      isFull: true,
    },
  },
  {
    image: "/images/ups.png",
    title: "Ups Interactiva Forza Bt-1001, 1000va/600w 8 Tomas Regulador...",
    originalPrice: "$ 328.429",
    currentPrice: "$ 219.900",
    discount: "33%",
    installments: {
      count: 3,
      amount: "$ 73.300",
      interest: "0%",
    },
    shipping: {
      isFree: true,
      delivery: "",
      isFull: true,
    },
  },
  {
    image: "/images/recortadora.png",
    title: "Recortador Para Barba Y Pelo 7 En 1 Philips...",
    originalPrice: "$ 259.900",
    currentPrice: "$ 179.900",
    discount: "30%",
    installments: {
      count: 3,
      amount: "$ 59.967",
      interest: "0%",
    },
    shipping: {
      isFree: true,
      delivery: "mañana",
      isFull: true,
    },
  },
  {
    image: "/images/ups.png",
    title: "Ups Interactiva Forza Bt-1001, 1000va/600w 8 Tomas Regulador...",
    originalPrice: "$ 328.429",
    currentPrice: "$ 219.900",
    discount: "33%",

  },
];

const ProductSection = ({ products = productsDefault }: { products?: any[] }) => {
  return (
    <div className="flex gap-6 w-full overflow-x-auto">
      {products.map((product, idx) => (
        <ProductCard key={idx} {...product} />
      ))}
    </div>
  );
};

export default ProductSection; 