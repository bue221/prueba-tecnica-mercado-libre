export type InstallmentInfo = {
  count: number;
  amount: number;
  total: number;
  interest: boolean;
  interestRate?: number; // solo si interest = true
};

export type PaymentMethod = "Tarjeta de crédito" | "PSE" | "Efectivo" | "MercadoPago";

export type ShippingInfo = {
  isFree: boolean;
  deliveryTime: string; // ej. "24h"
  fullfilmentByPlatform: boolean;
};

export type SellerInfo = {
  name: string;
  isOfficialStore: boolean;
  level: string;
  totalSales: string;
  rating: number;
};

export type ProductStats = {
  soldCount: number;
  rating: number;
  reviewCount: number;
  stockAvailable: number;
};

export type ProductSpecifications = {
  color: string;
  voltage: string;
  functions: string[];
  wireless: boolean;
  batteryLife: string;
  chargeTime: string;
  waterResistant: boolean;
  silent: boolean;
  travelFriendly: boolean;
  combs: number;
  includedAccessories: string[];
};

export type PricingInfo = {
  originalPrice: number;
  discount: number;
  currentPrice: number;
  installments: InstallmentInfo;
};

export type Product = {
  id: number;
  slug: string;
  title: string;
  description: string;
  condition: "Nuevo" | "Usado";
  images: string[];
  pricing: PricingInfo;
  paymentMethods: PaymentMethod[];
  shipping: ShippingInfo;
  seller: SellerInfo;
  stats: ProductStats;
  specifications: ProductSpecifications;
};