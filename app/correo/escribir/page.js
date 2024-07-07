'use client'
import Link from "next/link";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const [para, setPara] = useState('');
  const [cc, setCc] = useState('');
  const [asunto, setAsunto] = useState('');
  const [message, setMessage] = useState('');
  const router  = useRouter();
  const handleSubmit = () => {
    const query = { para, cc, asunto, message };
    const queryString = new URLSearchParams(query).toString();
    const url = `/correo/leer?${queryString}`;

    // Redireccionar usando window.location.href
    window.location.href = url;
  };
    return (
      <main className="h-screen">
        <div className="mt-16 mx-4">
          <h1 className="font-semibold text-3xl">Inbox</h1>
        </div>


        <div className="mx-4 mt-10">
          <div className="flex gap-3 items-center">
            <h3 className="text-lg font-medium">Para:</h3>
            <input type="text" id="para" onChange={(e) => setPara(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""  />
          </div>
          <div className="flex gap-3 items-center mt-3">
            <h3 className="text-lg font-medium mr-3">CC:</h3>
            <input type="text" id="cc" onChange={(e) => setCc(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""  />
          </div>
          <div className="mt-7">
            <input type="text" id="asunto" onChange={(e) => setAsunto(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Agregar asunto"  />
          </div>

          <div className="mt-4">
            <textarea id="message" rows="16" onChange={(e) => setMessage(e.target.value)} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Agregar mensaje"></textarea>
          </div>
        </div>

        <div className="flex justify-end mx-4 mt-5">
        <a
            onClick={handleSubmit}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Enviar
          </a>
        </div>




      </main>
    );
  }
  