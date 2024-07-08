'use client'
import Link from "next/link";
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Page() {
  const [bloques, setBloques] = useState([]);
  
  useEffect(() => {
    const getFormPage = async () => {
      try {
        const res = await axios.get('/api/getFormPage');
        const content = res.data.bloques;
        setBloques(content);
      } catch (error) {
        console.error('Error fetching the form page:', error);
      }
    };
    getFormPage();
  }, []);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      await fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSd7U2ltw-3ZRB46UYyXOr1PO1X-C3m5y1fzbTmUXeoXCgyQWA/formResponse', {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });
      document.cookie = "bloqueReservado="+formData.get("entry.1916120758");
      alert('Reserva realizada con éxito!');
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };

  return (
    <main className="h-screen">
      <div className="mt-16 mx-4">
        <h1 className="font-semibold text-3xl">Gimnasio USM</h1>
        <h2 className="text-base font-medium mt-1 text-gray-600 dark:text-gray-300">¡Bienvenido!</h2>
        <h4 className="text-base font-medium mt-1 text-gray-600 dark:text-gray-300">
        - Este formulario estará abierto desde las 07:00 AM hasta las 22:00 PM y sirve para reservar bloques para el día siguiente al que se realiza la reserva. 
        <br/>- En caso de querer modificarla, esto debe hacerse desde el mismo formulario y los cambios estarán sujetos a la disponibilidad de cupos de ese momento.
        <br/>- Bloques que estén llenos no se mostrarán en la lista de opciones.
        <br/>- La reserva será exclusiva para ti y estará ligada a tu rol y correo.
        <br/>- Solo puedes reservar un bloque. 
        </h4>
      </div>
      <div className="flex w-full justify-center gap-10 items-center px-4 mt-5 py-1 dark:border-gray-600">
        <Link href='/gimnasio' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Reservar hora</Link>
        <Link href='/gimnasio/reservas' className="font-medium rounded-lg text-sm px-1 py-1.5">Reservas </Link>
      </div>

      <form onSubmit={handleSubmit}>
      <div className="mx-4 mt-7 border rounded-lg py-3 px-4 dark:border-gray-600">
        <div className="mb-3">
          <label htmlFor="correo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo</label>
          <input type="text" id="correo" name="entry.606388825" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
        </div>
        <div className="mb-3">
          <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre Completo</label>
          <input type="text" id="nombre" name="entry.1367253783" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
        </div>
        <div className="mb-3">
          <label htmlFor="rol" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rol (con guion y letra minúscula)</label>
          <input type="text" id="rol" name="entry.1638519014" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
        </div>

        {bloques.length != 0 ? (
          <div className="mb-3 max-w-sm mx-auto">
            <label htmlFor="bloques" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">¿En qué bloque quieres reservar?</label>
            <select id="bloques" name="entry.1916120758" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              {bloques.map((bloque, index) => (
                <option key={index} value={bloque}>{bloque}</option>
              ))}
            </select>
          </div>
        ) : (
          <div className="mb-3 max-w-sm mx-auto">Cargando...</div>
        )}

      <input type="hidden" name="fvv" value="1"></input>
      <input type="hidden" name="fbzx" value="6249322980266950052"></input>
      <input type="hidden" name="pageHistory" value="0"></input>

      </div>
      <div className="flex justify-center mt-3">
        <button type="submit" disabled={bloques.length === 0} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Reservar</button>
      </div>
      </form>


      
      
    </main>
  );
}
  