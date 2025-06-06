"use client"

import ProductSection from "@/features/main/ProductSection";
import { setProduct } from "@/lib/slices/products";
import { useGetProductsQuery } from "@/services/api";
import { Product } from "@mercado-libre/shared";
import { useDispatch } from "react-redux";



export default function MainContent() {
    // Initialize the store with the product information
    const {
        data: allProducts = [],
        isLoading,
    } = useGetProductsQuery(undefined, {
        pollingInterval: 3000,
        refetchOnMountOrArgChange: true,
        skip: false,
    })

    const dispatch = useDispatch()

    const handleClickProduct = (product: Product) => {
        dispatch(setProduct(product))
    }


    // Divide products into 3 equal parts
    const chunkSize = Math.ceil(allProducts.length / 3);
    const productChunks = [
        allProducts.slice(0, chunkSize),
        allProducts.slice(chunkSize, chunkSize * 2),
        allProducts.slice(chunkSize * 2)
    ];

    if (isLoading) {
        return (
            <main className="max-w-7xl mx-auto px-4 py-6 z-10 relative">
                <div className="mt-8 w-full gap-6 flex flex-col">
                    <div className="animate-pulse">
                        <div className="h-32 bg-gray-200 rounded-lg"></div>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="max-w-7xl mx-auto px-4 py-6 z-10 relative">
            <div className="mt-8 w-full gap-6 flex flex-col">
                <ProductSection products={productChunks[0]} onClickProduct={handleClickProduct} />
                <div className="bg-white rounded-lg shadow p-4">
                    <ProductSection products={productChunks[1]} onClickProduct={handleClickProduct} />
                </div>
                <div>
                    <img src="/img/banner_2.webp" alt="Banner" className="w-full h-full object-cover rounded-lg" />
                </div>
                <ProductSection products={productChunks[2]} onClickProduct={handleClickProduct} />
            </div>
        </main>
    );
} 