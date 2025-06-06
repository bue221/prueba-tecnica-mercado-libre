import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="bg-ml-yellow shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <Link href="/" className="cursor-pointer mr-2">
            <Image
              src="/img/logo.png"
              alt="Mercado Libre"
              width={150}
              height={150}
              className="w-auto h-10"
            />
          </Link>

          {/* Search Bar */}
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar productos, marcas y más..."
                className="w-full text-black px-4 py-2 rounded shadow-sm border border-gray-200 focus:border-ml-yellow focus:ring-2 focus:ring-ml-yellow focus:ring-opacity-50 transition-colors"
              />
              <button className="absolute right-0 top-0 h-full px-4">
                <svg className="w-5 h-5 text-ml-dark-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Promo Banner */}
          <div className="hidden md:block">
            <Image
              src="/img/banner.webp"
              alt="Envío gratis"
              width={200}
              height={32}
              className="h-8 w-auto"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-2 hidden md:flex items-center gap-4 text-sm justify-between">
          <div className="flex items-center gap-4">
            <a href="#" className="text-ml-dark-gray hover:text-black">Categorías</a>
            <a href="#" className="text-ml-dark-gray hover:text-black">Ofertas</a>
            <a href="#" className="text-ml-dark-gray hover:text-black">Cupones</a>
            <a href="#" className="text-ml-dark-gray hover:text-black flex items-center gap-1">Supermercado <span className="bg-blue-600 text-white text-[10px] px-1 rounded ml-1">NUEVO</span></a>
            <a href="#" className="text-ml-dark-gray hover:text-black">Moda</a>
            <a href="#" className="text-ml-dark-gray hover:text-black">Vender</a>
            <a href="#" className="text-ml-dark-gray hover:text-black">Ayuda / PQR</a>
          </div>
          <div className="flex items-center gap-4">
            {/* User avatar and name */}
            <div className="flex items-center gap-2 cursor-pointer hover:bg-black/5 px-2 py-1 rounded">
              <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold text-gray-700">AP</span>
              <span className="text-ml-dark-gray font-medium max-w-[90px] truncate">Andres C...</span>
              <svg className="w-4 h-4 text-ml-dark-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
            <a href="#" className="text-ml-dark-gray hover:text-black">Mis compras</a>
            <div className="flex items-center gap-1 cursor-pointer hover:bg-black/5 px-2 py-1 rounded">
              <span className="text-ml-dark-gray">Favoritos</span>
              <svg className="w-4 h-4 text-ml-dark-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
            {/* Notification icon */}
            <button className="p-2 hover:bg-black/5 rounded">
              <svg className="w-5 h-5 text-ml-dark-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            </button>
            {/* Cart icon */}
            <button className="p-2 hover:bg-black/5 rounded">
              <svg className="w-5 h-5 text-ml-dark-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m13-9l2 9m-5-9V6a2 2 0 10-4 0v3" /></svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
} 