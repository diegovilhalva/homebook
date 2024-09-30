import type { Metadata } from "next";
import {Space_Grotesk} from "next/font/google"
import "./globals.css";
import ResponsiveNav from "./components/Navbar/ResponsiveNav";

const font = Space_Grotesk({
  weight:["300","400","500","600","700"],
  subsets:["latin"]
})


export const metadata: Metadata = {
  title: "Homebook",
  description: "Plataforma de cursos online inovadora, oferecendo aprendizado de alta qualidade em diversas áreas. Aprenda no seu ritmo com aulas interativas e conteúdos atualizados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={font.className}
      >
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
