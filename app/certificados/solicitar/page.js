'use client'
import React, { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import casino from '@/public/casino.png'

const ConcentracionNotas  = '/certificados/ConcentracionNotas.pdf'
const AlumnoRegular       = '/certificados/AlumnoRegular.pdf'
const PostulacionPractica = '/certificados/PostulacionPractica.pdf'
const ResumenAcademico    = '/certificados/ResumenAcademico.pdf'

export default function Page() {

  const [value, setValue] = useState("AR");
  const [document, setDocument] = useState(AlumnoRegular)

  const [resume, setResume] = useState("Certificado de alumno regular")
  const [waitTime, setWaitTime] = useState("Inmediato")
  const [format, setFormat] = useState("PDF")

  const handleChange = (e) => {
    setValue(e.target.value);
    switch (e.target.value) {
      case "AR":
        setDocument(AlumnoRegular)
        setResume("Certificado de alumno regular")
        setWaitTime("Inmediato")
        setFormat("PDF")
      break;

      case "CN":
        setDocument(ConcentracionNotas)
        setResume("Concentración de notas")
        setWaitTime("Inmediato")
        setFormat("PDF")
      break;

      case "PP":
        setDocument(PostulacionPractica)
        setResume("Documento para postulación en prácticas (Solo Chile)")
        setWaitTime("Inmediato")
        setFormat("PDF")
      break;

      case "RA":
        setDocument(ResumenAcademico)
        setResume("Resumen académico")
        setWaitTime("Inmediato")
        setFormat("PDF")
      break;

      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    console.log("Documento descargado")
  }

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
          <select id="certificado" defaultValue={value} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Seleccione un certificado</option>
            <option value="CN">Concentración de notas</option>
            <option value="PP">Postulación a Práctica</option>
            <option value="AR">Alumno regular exento</option>
            <option value="RA">Resumen académico</option>
          </select>
        </form>


        <form className="px-3 py-3 border mx-2 mt-5 rounded-lg">
          <div className="mb-2">
            <label htmlFor="resumen" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Resumen</label>
            <input type="text" id="resumen" value={resume} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Resumen"  />
          </div> 
          <div className="mb-2">
            <label htmlFor="resumen" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tiempo de espera</label>
            <input type="text" id="resumen" value={waitTime} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tiempo de espera"  />
          </div> 
          <div className="mb-6">
            <label htmlFor="resumen" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Formato</label>
            <input type="text" id="resumen" value={format} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Formato"  />
          </div> 



          <button onSubmit={handleSubmit} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><a href={document} download={document}>Solicitar</a></button>
        </form>

        
        
      </div>


    </main>
  );
}
