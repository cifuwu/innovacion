"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, DrawerCloseButton } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  return (
    <>
      <div className="absolute top-3 left-3">
        <Button variant="ghost" onClick={handleOpen}>
          <FaBars className="text-3xl text-white" />
        </Button>
      </div>
      <Drawer isOpen={isOpen} placement="left" onClose={handleClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.900" color="gray.200">
            <DrawerCloseButton color="gray.200" />
            <DrawerHeader>USM</DrawerHeader>
            <DrawerBody>
              <div className="flex flex-col gap-3 text-xl">
                <Link href="/" onClick={handleClose} className="font-medium text-gray-200 hover:text-gray-400">
                  Menú principal
                </Link>
                <Link href="/correo/inbox" onClick={handleClose} className="font-medium text-gray-200 hover:text-gray-400">
                  Correo USM
                </Link>
                <Link href="/casino/reservar" onClick={handleClose} className="font-medium text-gray-200 hover:text-gray-400">
                  Casino USM
                </Link>
                <Link href="/horario" onClick={handleClose} className="font-medium text-gray-200 hover:text-gray-400">
                  Horarios
                </Link>
                <Link href="/gimnasio" onClick={handleClose} className="font-medium text-gray-200 hover:text-gray-400">
                  Gimnasio USM
                </Link>
                <Link href="/certificados/solicitar" onClick={handleClose} className="font-medium text-gray-200 hover:text-gray-400">
                  Certificados
                </Link>
                <Link href="/ajustes" onClick={handleClose} className="font-medium text-gray-200 hover:text-gray-400">
                  Ajustes
                </Link>
              </div>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
