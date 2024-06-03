'use client'
import Link from "next/link";
import { Datepicker } from "flowbite-react";


export default function Page() {
    return (
      <main className="h-screen">
        <div className="mt-16 mx-4">
          <h1 className="font-semibold text-3xl">Casino USM</h1>
          <h2 className="text-base font-medium mt-1 text-gray-600 dark:text-gray-300">¡Bienvenido!</h2>
        </div>
        <div className="flex w-full justify-between items-center px-4 mt-5 py-1 dark:border-gray-600">
          <Link href='/casino/reservar' className="font-medium rounded-lg text-sm px-1 py-1.5">Reservar Menú</Link>
          <Link href='/casino/reservas' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Reservas</Link>
          <Link href='/casino/menus' className="font-medium rounded-lg text-sm px-1 py-1.5">Menús</Link>
          <Link href='/casino/informacion' className="font-medium rounded-lg text-sm px-1 py-1.5">Información</Link>
        </div>

        <div className="mx-4 mt-10">
          <div id="alert-additional-content-5" className="p-4 border flex justify-between items-center border-gray-300 rounded-lg bg-gray-50 dark:border-gray-600 dark:bg-gray-800" role="alert">
            <div>
              <div className="flex items-center">
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">Campus San joaquín</h3>
              </div>
              <div className="mt-0 mb-2 text-sm text-gray-800 dark:text-gray-300">
                Almuerzo Vegetariano
              </div>
              <div className="mt-0 mb-4 text-sm font-semibold text-gray-800 dark:text-gray-300">
                23/08/2024
              </div>
            </div>
            
            <div>
              <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Cancelar</button>
            </div>
          </div>
        </div>



        
        
      </main>
    );
  }
  