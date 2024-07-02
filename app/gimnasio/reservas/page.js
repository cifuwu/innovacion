'use client'
import Link from "next/link";
import Image from "next/image";
import casino from '@/public/casino.png'

export default function Page() {
    return (
      <main className="h-screen">
        <div className="mt-16 mx-4">
          <h1 className="font-semibold text-3xl mb-2">Gimnasio USM</h1>
          <h3>Aquí puedes reservar tu hora de gimnasio</h3>
        </div>
        <div className="flex w-full justify-center gap-10 items-center px-4 mt-5 py-1 dark:border-gray-600">
          <Link href='/gimnasio' className="font-medium rounded-lg text-sm px-1 py-1.5   ">Reservar hora</Link>
          <Link href='/gimnasio/reservas' className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Reservas </Link>
        </div>


      </main>
    );
  }
  