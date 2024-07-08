import Link from "next/link";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-center bg-gray-900 text-gray-200">
      <div className="text-center mt-20">
        <h1 className="font-semibold text-3xl">SuperMechón USM</h1>
        <h2 className="text-lg font-medium text-gray-400 mt-2">¡Donde tienes todos tus portales en uno!</h2>
      </div>
      <div className="flex items-center justify-center flex-grow">
        <div className="grid grid-cols-2 gap-6 px-5 w-full max-w-4xl mb-20">
          {[
            { href: '/correo/inbox', label: 'Asistente de correo' },
            { href: '/gimnasio', label: 'Gimnasio USM' },
            { href: '/casino/reservar', label: 'Casino USM' },
            { href: '/certificados/solicitar', label: 'Certificados' },
            { href: '/horario', label: 'Horarios' },
            { href: '/ajustes', label: 'Ajustes' },
          ].map(({ href, label }) => (
            <Link href={href} key={href}>
              <Button className="h-24 w-full flex items-center justify-center text-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-800 rounded-lg transition-colors">
                {label}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
