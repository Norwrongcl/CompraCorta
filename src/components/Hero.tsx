"use client"

import { useState } from 'react';

export default function Hero() {
  const [productos, setProductos] = useState('');
  const [presupuesto, setPresupuesto] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para buscar la mejor opción
    console.log('Productos:', productos);
    console.log('Presupuesto:', presupuesto);
  };

  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-600 sm:text-5xl md:text-6xl">
            <span className="block">Compra lo justo,</span>
            <span className="block">paga lo menos</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Optimiza tus compras y ahorra sin esfuerzo
          </p>
          
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Lista de productos"
                      value={productos}
                      onChange={(e) => setProductos(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  <div className="flex-1">
                    <input
                      type="number"
                      placeholder="Presupuesto"
                      value={presupuesto}
                      onChange={(e) => setPresupuesto(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    Buscar la mejor opción
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          <div className="mt-8">
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Empieza a ahorrar ahora
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
