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
          <Link href='/casino/reservas' className="font-medium rounded-lg text-sm px-1 py-1.5">Reservas</Link>
          <Link href='/casino/menus' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Menús</Link>
          <Link href='/casino/informacion' className="font-medium rounded-lg text-sm px-1 py-1.5">Información</Link>
        </div>

        <div className="grid grid-cols-2 gap-7 mx-4 mt-10">
          <div>
            <h2 className="font-medium">Lunes 3</h2>
            <ul className="list-disc ml-6 text-gray-600 dark:text-gray-400">
              <li className="text-sm">
                Menú Hipocalórico
              </li>
              <li className="text-sm">
                Menú Vegetariano
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-medium">Martes 4</h2>
            <ul className="list-disc ml-6 text-gray-600 dark:text-gray-400">
              <li className="text-sm">
                Menú Hipocalórico
              </li>
              <li className="text-sm">
                Menú Vegetariano
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-medium">Miércoles 5</h2>
            <ul className="list-disc ml-6 text-gray-600 dark:text-gray-400">
              <li className="text-sm">
                Menú Hipocalórico
              </li>
              <li className="text-sm">
                Menú Vegetariano
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-medium">Jueves 6</h2>
            <ul className="list-disc ml-6 text-gray-600 dark:text-gray-400">
              <li className="text-sm">
                Menú Hipocalórico
              </li>
              <li className="text-sm">
                Menú Vegetariano
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-medium">Viernes 7</h2>
            <ul className="list-disc ml-6 text-gray-600 dark:text-gray-400">
              <li className="text-sm">
                Menú Hipocalórico
              </li>
              <li className="text-sm">
                Menú Vegetariano
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-medium">Sábado 8</h2>
            <ul className="list-disc ml-6 text-gray-600 dark:text-gray-400">
              <li className="text-sm">
                Menú Hipocalórico
              </li>
              <li className="text-sm">
                Menú Vegetariano
              </li>
            </ul>
          </div>



        </div>


      </main>
    );
  }
  