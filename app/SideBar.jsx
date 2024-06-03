"use client";

import { Drawer } from "flowbite-react";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";


export default function SideBar() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);


  return(
    <>
      <div className="absolute top-3 left-3">
        <button className="p-2" onClick={() => setIsOpen(true)}>
          <FaBars className="text-3xl"/>
        </button>
      </div>
      <Drawer open={isOpen} onClose={handleClose}>
        <Drawer.Header title="USM" />
        <Drawer.Items>
          <div className=" flex flex-col gap-3 text-xl">
            <Link href={'/'} onClick={()=>{setIsOpen(false)}} className="font-medium">Menú princial</Link>
            <Link href={'/correo/inbox'} onClick={()=>{setIsOpen(false)}} className="font-medium">Correo USM</Link>
            <Link href={'/casino/reservar'} onClick={()=>{setIsOpen(false)}} className="font-medium">Casino USM</Link>
            <Link href={'/horario'} onClick={()=>{setIsOpen(false)}} className="font-medium">Horarios</Link>
            <Link href={'/gimnasio'} onClick={()=>{setIsOpen(false)}} className="font-medium">Gimnasio USM</Link>
            <Link href={'/certificados'} onClick={()=>{setIsOpen(false)}} className="font-medium">Certificados</Link>
            <Link href={'/ajustes'} onClick={()=>{setIsOpen(false)}} className="font-medium">Ajustes</Link>
          </div>
        </Drawer.Items>
      </Drawer>
    </>

  )
}