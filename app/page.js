import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen">
      <div className="text-center mt-16">
        <h1 className="font-semibold text-2xl">Aplicación integradora USM</h1>
        <h2 className="text-sm font-medium">¡Donde tienes todos tus portales en uno!</h2>
      </div>
      <div className="flex items-center justify-center h-full">
        <div className="grid grid-cols-2 gap-4 px-5 w-full mb-36">
          <Link href='' className="h-24 flex items-center justify-center text-white text-center text-lg font-semibold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Asistente de correo</Link>
          <Link href='' className="h-24 flex items-center justify-center text-white text-center text-lg font-semibold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Gimnasio USM</Link>
          <Link href='' className="h-24 flex items-center justify-center text-white text-center text-lg font-semibold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Casino USM</Link>
          <Link href='' className="h-24 flex items-center justify-center text-white text-center text-lg font-semibold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Certificados</Link>
          <Link href='' className="h-24 flex items-center justify-center text-white text-center text-lg font-semibold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Horarios</Link>
          <Link href='' className="h-24 flex items-center justify-center text-white text-center text-lg font-semibold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Ajustes</Link>
        </div>
      </div>
      
    </main>
  );
}
