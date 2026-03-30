import { Metadata } from "next";
import { ClientesContent } from "./clientes-content";

export const metadata: Metadata = {
  title: "Clientes e Setores de Atuação",
  description: "Soluções de gestão de resíduos adaptadas a cada setor: Administração Pública, Educação, Indústria e Tecnologia. O parceiro de confiança em Cantanhede.",
  keywords: ["gestão resíduos tribunais", "recolha REEE escolas", "resíduos industriais Cantanhede", "parceiro ambiental"],
};

export default function ClientesPage() {
  return <ClientesContent />;
}
