import React from "react";

export default function PaymentMethods() {
  return (
    <div className="border-t border-gray-200 pt-4">
      <h2 className="text-lg font-semibold mb-4">Medios de pago</h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2">Tarjetas de crédito</h3>
          <p className="text-sm text-gray-600 mb-2">¡Paga en hasta 48 cuotas!</p>
          <div className="flex gap-2">
            <div className="w-12 h-8 bg-gray-200 rounded"></div>
            <div className="w-12 h-8 bg-gray-200 rounded"></div>
            <div className="w-12 h-8 bg-gray-200 rounded"></div>
            <div className="w-12 h-8 bg-gray-200 rounded"></div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Tarjetas de débito</h3>
          <div className="flex gap-2">
            <div className="w-12 h-8 bg-gray-200 rounded"></div>
            <div className="w-12 h-8 bg-gray-200 rounded"></div>
            <div className="w-12 h-8 bg-gray-200 rounded"></div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Efectivo</h3>
          <div className="flex gap-2">
            <div className="w-12 h-8 bg-gray-200 rounded"></div>
            <div className="w-12 h-8 bg-gray-200 rounded"></div>
          </div>
        </div>

        <button className="text-blue-500 text-sm">Conoce otros medios de pago</button>
      </div>
    </div>
  );
} 