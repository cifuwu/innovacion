'use client'
import Link from "next/link";
import Image from "next/image";
import casino from '@/public/casino.png'
import { FaDownload, FaPaperPlane } from "react-icons/fa6";

export default function Page() {
    return (
      <main className="h-screen">
        <div className="mt-16 mx-4">
          <h1 className="font-semibold text-3xl mb-2">Certificados USM</h1>
          <h3>Solicita certificados o vuelve a consultar los ya emitidos</h3>
        </div>
        <div className="flex w-full justify-center gap-10 items-center px-4 mt-5 py-1 dark:border-gray-600">
          <Link href='/certificados/solicitar' className="font-medium rounded-lg text-sm px-1 py-1.5">Solicitar Certificado </Link>
          <Link href='/certificados/emitidos' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Certificados Emitidos</Link>
        </div>

        <div className="mx-4 mt-10 gap-5 flex flex-col">

          <div className="border rounded p-2 flex gap-2 items-center justify-between">
            <div>
              <h3 className="font-semibold">Certificado de alumno regular</h3>
              <p className="text-sm py-1">Pendiente</p>
              <p className="text-sm">Fecha de solicitud 23/04/2024</p>
            </div>
            <div>
              <button className="m-1 p-2 border rounded"><FaDownload className="text-2xl"/> </button>
              <button className="m-1 p-2 border rounded"><FaPaperPlane className="text-2xl"/></button> 
            </div>
          </div>

          <div className="border rounded p-2 flex gap-2 items-center justify-between">
            <div>
              <h3 className="font-semibold">Concentración de notas</h3>
              <p className="text-sm py-1">Emitido</p>
              <p className="text-sm">Fecha de solicitud 23/04/2024</p>
            </div>
            <div>
              <button className="m-1 p-2 border rounded"><FaDownload className="text-2xl"/> </button>
              <button className="m-1 p-2 border rounded"><FaPaperPlane className="text-2xl"/></button> 
            </div>
          </div>

          <div className="border rounded p-2 flex gap-2 items-center justify-between">
            <div>
              <h3 className="font-semibold">Resumen académico</h3>
              <p className="text-sm py-1">Emitido</p>
              <p className="text-sm">Fecha de solicitud 23/04/2024</p>
            </div>
            <div>
              <button className="m-1 p-2 border rounded"><FaDownload className="text-2xl"/> </button>
              <button className="m-1 p-2 border rounded"><FaPaperPlane className="text-2xl"/></button> 
            </div>
          </div>
          
        </div>


      </main>
    );
  }
  