import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats a price value according to the specified currency and options
 * @param value - The price value to format
 * @param currency - The currency code (default: 'COP')
 * @param options - Additional formatting options
 * @returns Formatted price string
 */
export function formatPrice(
  value: number | string,
  currency: string = 'COP',
  options: {
    showSymbol?: boolean;
    showDecimals?: boolean;
    locale?: string;
  } = {}
): string {
  const {
    showSymbol = true,
    showDecimals = true,
    locale = 'es-CO'
  } = options;

  const numericValue = typeof value === 'string' ? parseFloat(value) : value;

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: showDecimals ? 2 : 0,
    maximumFractionDigits: showDecimals ? 2 : 0,
    currencyDisplay: showSymbol ? 'symbol' : 'code'
  }).format(numericValue);
}

/**
 * Returns the color class based on the seller's rating
 * @param rating - The seller's rating (0-5)
 * @returns Tailwind color class
 */
export function getSellerRatingColor(rating: number): string {
  if (rating >= 4.5) return 'bg-green-400';
  if (rating >= 4) return 'bg-green-300';
  if (rating >= 3.5) return 'bg-yellow-400';
  if (rating >= 3) return 'bg-yellow-500';
  return 'bg-red-400';
}
