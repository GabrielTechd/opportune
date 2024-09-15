import { ReactNode } from "react";
import { Poppins } from "next/font/google";
import "./globals.css";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

// Usar a Metadata API para configurar as tags
export const metadata = {
  title: "Opportune - Sua Plataforma de Oportunidades de Emprego",
  description: "Encontre as melhores oportunidades de emprego na Opportune. Conectamos talentos com empresas em busca de profissionais qualificados.",
  keywords: [
    "emprego",
    "vagas de emprego",
    "buscar emprego",
    "oportunidades",
    "Opportune",
    "plataforma de empregos",
    "carreira",
    "recrutamento",
    "talentos",
    "empresas",
    "trabalho",
    "mercado de trabalho",
  ],
};

// Separar o viewport como exportação individual
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
