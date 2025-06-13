"use client"

import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-green-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Image
                src="/images/logo-web.png"
                alt="CompraCorta Logo"
                width={1536}
                height={1024}
                className="h-10 w-auto"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-8">
            <a href="/" className="text-green-600 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium">
              Inicio
            </a>
            <a href="/servicios" className="text-green-600 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium">
              Servicios
            </a>
            <a href="/nosotros" className="text-green-600 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium">
              Sobre Nosotros
            </a>
            <a href="/contacto" className="text-green-600 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium">
              Contacto
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
