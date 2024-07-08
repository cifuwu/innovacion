'use client'
import Link from "next/link";
import { useEffect, useState } from 'react';

export default function Page() {

  const [bloqueReservado, setBloqueReservado] = useState('');

  useEffect(() => {
    // Leer la cookie al cargar la página
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      const [name, value] = cookie.split('=');
      if (name.trim() === 'bloqueReservado') {
        setBloqueReservado(value);
        break;
      }
    }
  }, []);

  const cancelarReserva = () => {
    // Eliminar la cookie al cancelar la reserva
    document.cookie = `bloqueReservado=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    setBloqueReservado('');
  };



    return (
      <main className="h-screen">
        <div className="mt-16 mx-4">
          <h1 className="font-semibold text-3xl mb-2">Gimnasio USM</h1>
          <h3>Aquí puedes revisar tu reserva de hora de gimnasio</h3>
        </div>
        <div className="flex w-full justify-center gap-10 items-center px-4 mt-5 py-1 dark:border-gray-600">
          <Link href='/gimnasio' className="font-medium rounded-lg text-sm px-1 py-1.5   ">Reservar hora</Link>
          <Link href='/gimnasio/reservas' className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Reservas </Link>
        </div>
        <div className="flex justify-center mt-10">
          {bloqueReservado ? (
            <div className="flex">
              <p className="my-auto mr-10">Has reservado el bloque: {bloqueReservado}</p>
              <button onClick={cancelarReserva} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Cancelar reserva</button>
            </div>
          ) : (
            <h1 className="font-semibold text-3xl flex">No tienes una reserva activa.</h1>
          )}
        </div>


      </main>
    );
  }
  