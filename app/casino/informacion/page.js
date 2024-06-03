'use client'
import Link from "next/link";
import Image from "next/image";
import casino from '@/public/casino.png'

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
          <Link href='/casino/menus' className="font-medium rounded-lg text-sm px-1 py-1.5">Menús</Link>
          <Link href='/casino/informacion' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Información</Link>
        </div>

        <div className="mx-4 mt-10">
          <Image src={casino}></Image>
        </div>


      </main>
    );
  }
  