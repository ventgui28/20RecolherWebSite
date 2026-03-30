import { Metadata } from "next";
import { SustentabilidadeContent } from "./sustentabilidade-content";

export const metadata: Metadata = {
  title: "Sustentabilidade e Impacto Ambiental",
  description: "Descubra como a 20 Recolher promove a economia circular em Cantanhede. Manifesto ambiental, indicadores de impacto e compromisso com a proteção do ecossistema.",
  keywords: ["economia circular Cantanhede", "impacto ambiental", "reciclagem REEE", "valorização resíduos"],
};

export default function SustentabilidadePage() {
  return <SustentabilidadeContent />;
}
