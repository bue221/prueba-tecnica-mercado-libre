'use client'
import Image from "next/image";
import { useState } from "react";


interface ProductGalleryProps {
    images: string[];
}

export const ProductGallery = ({ images }: ProductGalleryProps) => {
    const [mainImage, setMainImage] = useState(0);

    return (
        <div className="col-span-1 grid grid-cols-1 md:grid-cols-8">
            {/* Left Column - Image Gallery */}
            <div className="hidden md:block md:col-span-2">
                <div className="space-y-2">
                    {images.map((image: string, index: number) => (
                        <div
                            key={image}
                            className={`w-full h-16 border-2 rounded cursor-pointer hover:border-blue-500 ${index === mainImage ? "border-blue-500" : "border-gray-200"
                                }`}
                            onClick={() => setMainImage(index)}
                        >
                            <Image
                                src={image}
                                alt={`Vista ${index + 1}`}
                                width={64}
                                height={64}
                                className="w-full h-full object-cover rounded"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Center Column - Main Image */}
            <div className="col-span-1 md:col-span-6">
                <div className="bg-white rounded-lg mb-6 p-2 md:p-8 flex justify-center h-[250px] sm:h-[400px] md:h-[600px]">
                    <div className="sticky top-0 w-full h-[400px]">
                        <Image
                            src={images[mainImage]}
                            alt="Producto principal"
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>
                <div className="border-b border-gray-200"></div>
            </div>
        </div>
    );
}; 