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
          <Link href='/casino/reservar' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Reservar Menú</Link>
          <Link href='/casino/reservas' className="font-medium rounded-lg text-sm px-1 py-1.5">Reservas</Link>
          <Link href='/casino/menus' className="font-medium rounded-lg text-sm px-1 py-1.5">Menús</Link>
          <Link href='/casino/informacion' className="font-medium rounded-lg text-sm px-1 py-1.5">Información</Link>
        </div>

        <div className="mx-4 mt-10">
          <h2 className="font-medium">¿Qué tipo de menú deseas?</h2>
          <div className="flex items-center mb-2 mt-3 ml-4">
            <input id="default-radio-1" defaultChecked type="radio" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
            <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Hipocalórico</label>
          </div>
          <div className="flex items-center ml-4">
            <input id="default-radio-2" type="radio" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
            <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Vegetariano</label>
          </div>
        </div>

        <div className="mx-4 mt-7 border rounded-lg py-3 px-4 dark:border-gray-600">
          <div className="mb-3">
            <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
            <input type="text" id="nombre" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
          </div>
          <div className="mb-3">
            <label htmlFor="rol" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rol</label>
            <input type="text" id="rol" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
          </div>

          <div className=" mb-3 max-w-sm mx-auto">
            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Campus</label>
            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="US">San joaquín</option>
              <option value="CA">Vitacura</option>
              <option value="FR">Casa central</option>
              <option value="DE">Viña del mar</option>
            </select>
          </div>


          <label htmlFor="fecha" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha</label>
          <Datepicker language="es" id="fecha"/>


        </div>

        <div className="flex justify-center mt-3">
          <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Reservar</button>
        </div>

        
        
      </main>
    );
  }
  