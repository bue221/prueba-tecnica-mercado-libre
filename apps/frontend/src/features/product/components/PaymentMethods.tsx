import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@mercado-libre/shared";

interface PaymentMethodsProps {
    product: Product;
}

export const PaymentMethods = ({ product }: PaymentMethodsProps) => {
    return (
        <Card className="border border-gray-200">
            <CardContent className="p-3 md:p-4 space-y-4">
                <h4 className="text-sm font-medium text-gray-800">Medios de pago</h4>

                {product.paymentMethods.includes("Tarjeta de crédito") &&
                    product.pricing.installments.interest && (
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium">
                            Pagá en hasta {product.pricing.installments.count} cuotas sin interés
                        </Button>
                    )}
                <div className="space-y-3">
                    {product.paymentMethods.includes("Tarjeta de crédito") && (
                        <div>
                            <div className="text-sm font-medium text-gray-800 mb-2">
                                Tarjetas de crédito
                            </div>
                            <div className="text-xs text-gray-600 mb-2">
                                Hasta 12 cuotas sin interés
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <div className="w-8 h-5 bg-red-500 rounded text-white text-xs flex items-center justify-center font-bold">
                                    MC
                                </div>
                                <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                                    VISA
                                </div>
                                <div className="w-8 h-5 bg-blue-400 rounded text-white text-xs flex items-center justify-center font-bold">
                                    AMEX
                                </div>
                                <div className="w-8 h-5 bg-purple-600 rounded text-white text-xs flex items-center justify-center font-bold">
                                    OCA
                                </div>
                            </div>
                        </div>
                    )}

                    {product.paymentMethods.includes("PSE") && (
                        <div>
                            <div className="text-sm font-medium text-gray-800 mb-2">
                                Tarjetas de débito
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                                    VISA
                                </div>
                                <div className="w-8 h-5 bg-red-500 rounded text-white text-xs flex items-center justify-center font-bold">
                                    MC
                                </div>
                            </div>
                        </div>
                    )}

                    {product.paymentMethods.includes("Efectivo") && (
                        <div>
                            <div className="text-sm font-medium text-gray-800 mb-2">
                                Efectivo
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <div className="w-8 h-5 bg-black rounded text-white text-xs flex items-center justify-center font-bold">
                                    A
                                </div>
                                <div className="w-8 h-5 bg-green-600 rounded text-white text-xs flex items-center justify-center font-bold">
                                    BROU
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="text-xs text-blue-600 cursor-pointer hover:underline">
                    Conocé otros medios de pago
                </div>
            </CardContent>
        </Card>
    );
}; 