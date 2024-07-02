'use client'
import Link from "next/link";
import Image from "next/image";
import casino from '@/public/casino.png'

export default function Page() {
    return (
      <main className="h-screen">
        <div className="mt-16 mx-4">
          <h1 className="font-semibold text-3xl">Correo USM</h1>
        </div>

        <div className=" mt-10">
          <ul>
            <li className="border-t py-2 px-2">
              <Link href={'/correo/leer'}>
                <div className="flex justify-between">
                  <h5 className="text-lg font-medium">Roberto León</h5>
                  <h6>01/06/2024</h6>
                </div>
                <div className="mt-1.5">
                  <h6 className="text-sm dark:text-gray-300">instrucciones para certamen 2</h6>
                </div>
              </Link>
              
            </li>

            <li className="border-t py-2 px-2">
              <Link href={'/correo/leer'}>
                <div className="flex justify-between">
                  <h5 className="text-lg font-medium">Jose Luis Martí</h5>
                  <h6>01/06/2024</h6>
                </div>
                <div className="mt-1.5">
                  <h6 className="text-sm dark:text-gray-300">Resumen: Se abrió el periodo de inscripción para rendir el examen de salida de inglés.</h6>
                </div>
              </Link>
            </li>

            <li className="border-t py-2 px-2">
              <Link href={'/correo/leer'}>
                <div className="flex justify-between">
                  <h5 className="text-lg font-medium">Dirección General de Co.</h5>
                  <h6>01/06/2024</h6>
                </div>
                <div className="mt-1.5">
                  <h6 className="text-sm dark:text-gray-300">Resumen: Se encuentra abierto el proceso de postulación para participar en la convocatoria de intercambio nacional.</h6>
                </div>
              </Link>
            </li>

            <li className="border-t py-2 px-2">
              <Link href={'/correo/leer'}>
                <div className="flex justify-between">
                  <h5 className="text-lg font-medium">Jose Luis Martí</h5>
                  <h6>01/06/2024</h6>
                </div>
                <div className="mt-1.5">
                  <h6 className="text-sm dark:text-gray-300">Resumen: Abierta la convocatoria para Movilidad Parcial con la Facultad de Ciencias Físicas y Matemáticas de la Universidad de Chile.</h6>
                </div>
              </Link>
            </li>

            <li className="border-t border-b py-2 px-2">
              <Link href={'/correo/leer'}>
                <div className="flex justify-between">
                  <h5 className="text-lg font-medium">Marcello Visconti</h5>
                  <h6>01/06/2024</h6>
                </div>
                <div className="mt-1.5">
                  <h6 className="text-sm dark:text-gray-300">Recibido! Saludos.</h6>
                </div>
              </Link>
            </li>

            
          </ul>
        </div>

        <div className="mx-4 mt-5 flex items-center justify-end">
          <Link href={'/correo/escribir'} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Escribir correo</Link>
        </div>


      </main>
    );
  }
  