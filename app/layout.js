import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "./SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Innovación",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className=" bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
      <body className={inter.className}>
        <SideBar />
        {children}
        </body>
    </html>
  );
}
