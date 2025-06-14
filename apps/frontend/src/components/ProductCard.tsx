import { formatPrice } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"
import type React from "react"

interface ProductCardProps {
  image: string
  title: string
  originalPrice?: string
  currentPrice: string
  discount?: string
  installments?: {
    count: number
    amount: string
    interest: string
  }
  shipping?: {
    isFree: boolean
    delivery: string
    isFull: boolean
  }
  variant?: "vertical" | "horizontal"
  slug: string
  onClick?: () => void
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  originalPrice,
  currentPrice,
  discount,
  installments,
  shipping,
  variant = "vertical",
  slug,
  onClick,
}) => {
  // Common components
  const PriceSection = () => (
    <div className={variant === "vertical" ? "mb-4" : ""}>
      {originalPrice && <p className="text-gray-400 line-through text-sm mb-1">{formatPrice(originalPrice)}</p>}
      <div className={`flex items-center gap-${variant === "vertical" ? "2" : "3"} flex-wrap`}>
        <span className={`text-${variant === "vertical" ? "md" : "md"} font-light text-gray-800`}>{formatPrice(currentPrice)}</span>
        {discount && <span className="text-green-600 font-medium text-sm bg-green-50 px-2 py-1 rounded">{discount} OFF</span>}
      </div>
    </div>
  )

  const InstallmentsSection = () => (
    <div className={variant === "vertical" ? "mb-4" : ""}>
      <p className="text-green-600 text-xs mb-1">
        en{" "}
        <span className="font-medium">
          {installments?.count} cuotas de {formatPrice(Number(installments?.amount || 0))}
        </span>
      </p>
      <p className="text-green-600 text-xs">
        con <span className="font-medium">{installments?.interest} interés</span>
      </p>
    </div>
  )

  const ShippingSection = () => (
    <div className="flex items-center justify-between gap-2 text-green-600">
      <span className="text-xs font-medium">
        {shipping?.isFree ? "Envío gratis" : "Envío"} {shipping?.delivery}
      </span>
      {shipping?.isFull && (
        <div className="flex items-center bg-green-600 text-white px-2 py-1 rounded text-xs">
          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
              clipRule="evenodd"
            />
          </svg>
          <span className="font-bold">FULL</span>
        </div>
      )}
    </div>
  )

  if (variant === "horizontal") {
    return (
      <Link href={`/product/${slug}`} className="max-w-2xl bg-white rounded-lg p-6 font-sans hover:shadow-lg transition-shadow duration-300" onClick={onClick}>
        <div className="flex gap-6">
          <div className="flex-shrink-0 w-32">
            <div className="bg-gray-50 rounded-lg p-1 h-28 flex items-center justify-center">
              <Image
                src={image || "/placeholder.svg"}
                alt={title}
                width={128}
                height={112}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <h2 className="text-gray-800 text-xl font-normal mb-3 leading-tight line-clamp-2">{title}</h2>
            <div className="space-y-3">
              <PriceSection />
            </div>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link href={`/product/${slug}`} onClick={onClick} className="min-w-[250px]  w-[250px] bg-white rounded-lg p-2 font-sans cursor-pointer">
      <div className="flex justify-center mb-4 bg-gray-50 rounded-lg p-1">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={250}
          height={128}
          className="w-full h-32 object-cover"
        />
      </div>
      <h2 className="text-gray-800 text-md font-normal mb-4 leading-tight line-clamp-2">{title}</h2>
      <PriceSection />
      {Boolean(installments) && <InstallmentsSection />}
      {Boolean(shipping) && <ShippingSection />}
    </Link>
  )
}

export default ProductCard;
