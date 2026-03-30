import { Metadata } from "next";
import { ContactosContent } from "./contactos-content";

export const metadata: Metadata = {
  title: "Contactos e Localização",
  description: "Fale com o nosso concierge ambiental. Canais diretos de comunicação, morada na Zona Industrial de Cantanhede e formulário de consulta para empresas.",
  keywords: ["contacto 20 recolher", "recolha resíduos Cantanhede", "morada 20 recolher", "email gestão resíduos"],
};

export default function ContactosPage() {
  return <ContactosContent />;
}
