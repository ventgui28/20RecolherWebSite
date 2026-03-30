import { Metadata } from "next";
import { ServicosContent } from "./servicos-content";

export const metadata: Metadata = {
  title: "Serviços de Gestão de REEE e Resíduos",
  description: "Explore as nossas soluções de elite em gestão de resíduos eletrónicos, consumíveis de impressão e logística industrial em Cantanhede. Certificação total e conformidade ambiental.",
  keywords: ["recolha REEE Cantanhede", "gestão de toners", "resíduos industriais", "certificado destino final"],
};

export default function ServicosPage() {
  return <ServicosContent />;
}
