'use client'
import Link from "next/link";
import Image from "next/image";
import casino from '@/public/casino.png'

export default function Page() {
    return (
      <main className="h-screen">
        <div className="mt-16 mx-4">
          <h1 className="font-semibold text-3xl mb-2">Certificados USM</h1>
          <h3>Solicita certificados o vuelve a consultar los ya emitidos</h3>
        </div>
        <div className="flex w-full justify-center gap-10 items-center px-4 mt-5 py-1 dark:border-gray-600">
          <Link href='/certificados/solicitar' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Solicitar Certificado</Link>
          <Link href='/certificados/emitidos' className="font-medium rounded-lg text-sm px-1 py-1.5">Certificados Emitidos </Link>
        </div>

        <div className="mx-4 mt-10">
          <form className="max-w-sm mx-auto">
            <label htmlFor="certificado" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Certificado</label>
            <select id="certificado" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Seleccione un certificado</option>
              <option value="US">Concentración de notas</option>
              <option value="CA">Alumno regular</option>
              <option value="FR">Alumno regular exento</option>
              <option value="DE">Resumen académico</option>
            </select>
          </form>


          <form className="px-3 py-3 border mx-2 mt-5 rounded-lg">
            <div className="mb-2">
              <label htmlFor="resumen" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Resumen</label>
              <input type="text" id="resumen" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Resumen"  />
            </div> 
            <div className="mb-2">
              <label htmlFor="resumen" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tiempo de espera</label>
              <input type="text" id="resumen" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tiempo de espera"  />
            </div> 
            <div className="mb-6">
              <label htmlFor="resumen" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Formato</label>
              <input type="text" id="resumen" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Formato"  />
            </div> 



            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Solicitar</button>
          </form>

          
          
        </div>


      </main>
    );
  }
  