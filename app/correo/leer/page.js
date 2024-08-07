'use client'
import Link from "next/link";
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Page() {
  const [summary, setSummary] = useState('');
  const apiKey = 'sk-proj-rPi5gy2ypxP6KSglrUrLT3BlbkFJpy5azUqL5V2Cgy0uMPLg';
  const [data, setData] = useState({});
  var text = "Estimado(a)s estudiantes, junto con saludar, les escribo para avisar que se abrió el periodo de inscripción para rendir el examen de salida de inglés. Podrán rendirlo quienes ya tengan aprobada la asignatura Inglés 6, sino hayan obtenido nivel 8 en el test de primer año (OOPT), y se encuentren cursando Trabajo de Título I (es decir, estén en su penúltimo semestre en la carrera, al menos).Para inscribirse deben completar el formulario que se encuentra en el siguiente enlace: https://shre.ink/8Unb; el plazo de inscripción es acotado: sólo hasta el miércoles 05 de Junio, 23:55 horas. El examen de inglés se programará en fecha a informar por el ";
  useEffect(() => async () => {
    const params = new URLSearchParams(window.location.search);
    const para = params.get('para') || '';
    const cc = params.get('cc') || '';
    const asunto = params.get('asunto') || '';
    const message = params.get('message') || text;
    setData({ para, cc, asunto, message });
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: "gpt-3.5-turbo",
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: `Porfavor, resume lo mas posible el siguiente correo, usa el mismo lenguaje: ${message}` }
          ],
          max_tokens: 500
        },
        {
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
          }
        }
      );
      const result = response.data.choices[0].message.content;
      setSummary(result);
    }, []);
    const { para, cc, asunto, message } = data;
    return (
      <main className="h-screen">
        <div className="mt-16 mx-4">
          <h1 className="font-semibold text-3xl">Inbox</h1>
        </div>


        <div className="mx-4 mt-10">
          <div className="flex justify-between">
            <h3 className="text-2xl font-medium">{para!=""? para:"Jose Luis Martí"}</h3>
            <h4>01/06/24 13:54</h4>
          </div>
          <h4 className="font-medium mt-2">{asunto!=""? asunto:"Examen de Salida de Inglés 1-2024: inscripciones"}</h4>
          <p className="mt-5 text-sm dark:text-gray-200">{summary}</p>
        </div>
          
        <div className="mt-20 flex gap-2 mx-5">
          <Link href={'/correo/escribir'} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Responder</Link>
          <Link href={'/correo/escribir'} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Reenviar</Link>
        </div>


      </main>
    );
  }
  