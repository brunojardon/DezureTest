import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dezure test",
  description:
    "Desarrollo de una pequeña aplicación web utilizando Next.js, Tailwind CSS y TypeScript que muestra la transcripción de una llamada telefónica en un componente que mapea cada mensaje tanto de un agente como de un usuario. La aplicación debe permite al usuario hacer clic en cualquier parte de la transcripción y saltar automáticamente a esa parte específica del audio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="w-full min-h-screen h-full bg-gradient-to-br from-red-700 to-stone-950">
        {children}
      </body>
    </html>
  );
}
