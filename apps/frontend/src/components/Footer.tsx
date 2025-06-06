import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12 text-black">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-0">
          {/* Payment section */}
          <div className="flex-1 flex flex-col items-center text-center">
            {/* Card icon */}
            <div className="mb-2">
              <svg width="48" height="48" fill="none" viewBox="0 0 48 48"><rect x="6" y="14" width="36" height="20" rx="4" fill="#f5f6fa" stroke="#3483fa" strokeWidth="2" /><rect x="6" y="20" width="36" height="4" fill="#3483fa" /></svg>
            </div>
            <div className="font-semibold mb-1">Paga con tarjeta o en efectivo</div>
            <div className="text-gray-500 text-sm mb-1">Con Mercado Pago, paga en cuotas y aprovecha la comodidad de financiación que te da tu banco, o hazlo con efectivo en puntos de pago. ¡Y siempre es seguro!</div>
            <a href="#" className="text-blue-600 text-sm">Cómo pagar con Mercado Pago</a>
          </div>
          {/* Shipping section */}
          <div className="flex-1 flex flex-col items-center text-center">
            {/* Box icon */}
            <div className="mb-2">
              <svg width="48" height="48" fill="none" viewBox="0 0 48 48"><rect x="10" y="16" width="28" height="20" rx="2" fill="#f5f6fa" stroke="#3483fa" strokeWidth="2" /><rect x="18" y="16" width="12" height="6" fill="#3483fa" /></svg>
            </div>
            <div className="font-semibold mb-1">Envío gratis desde $ 60.000</div>
            <div className="text-gray-500 text-sm mb-1">Con solo estar registrado en Mercado Libre, tienes envíos gratis en miles de productos seleccionados.</div>
            <a href="#" className="text-blue-600 text-sm">Más información</a>
          </div>
          {/* Security section */}
          <div className="flex-1 flex flex-col items-center text-center">
            {/* Shield icon */}
            <div className="mb-2">
              <svg width="48" height="48" fill="none" viewBox="0 0 48 48"><path d="M24 6l16 6v8c0 10.5-7.5 18.5-16 22-8.5-3.5-16-11.5-16-22V12l16-6z" fill="#f5f6fa" stroke="#3483fa" strokeWidth="2" /><path d="M32 20l-8 8-4-4" stroke="#3483fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <div className="font-semibold mb-1">Seguridad, de principio a fin</div>
            <div className="text-gray-500 text-sm mb-1">¿No te gusta? ¡Devuélvelo! En Mercado Libre, no hay nada que no puedas hacer, porque estás siempre protegido.</div>
            <a href="#" className="text-blue-600 text-sm">Cómo te protegemos</a>
          </div>
        </div>
        {/* Legal and links */}
        <div className="mt-10 border-t border-gray-100 pt-6 text-center text-xs text-gray-500">
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 mb-2">
            <a href="#" className="hover:underline">Trabaja con nosotros</a>
            <span className="hidden md:inline">·</span>
            <a href="#" className="hover:underline">Términos y condiciones</a>
            <span className="hidden md:inline">·</span>
            <a href="#" className="hover:underline">Promociones</a>
            <span className="hidden md:inline">·</span>
            <a href="#" className="hover:underline">Cómo cuidamos tu privacidad</a>
            <span className="hidden md:inline">·</span>
            <a href="#" className="hover:underline">Accesibilidad</a>
            <span className="hidden md:inline">·</span>
            <a href="#" className="hover:underline">Ayuda / PQR</a>
            <span className="hidden md:inline">·</span>
            <a href="#" className="hover:underline">Navidad</a>
            <span className="hidden md:inline">·</span>
            <a href="#" className="hover:underline">www.sic.gov.co</a>
          </div>
          <div className="mb-2">Copyright © 1999-2025 MercadoLibre Colombia LTDA.<br />Calle 100 #7-33, Torre I, Piso 16, Bogotá D.C., Colombia</div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
            <div>
              <Image
                src="/img/footer_1.png"
                alt="Industria y Comercio Superintendencia"
                width={100}
                height={24}
                className="h-6 w-auto"
              />
            </div>
            <div>
              <Image
                src="/img/footer_2.png"
                alt="Industria y Comercio Superintendencia"
                width={100}
                height={24}
                className="h-6 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 