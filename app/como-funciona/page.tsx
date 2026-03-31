import { Metadata } from "next";
import { ComoFuncionaContent } from "./como-funciona-content";

export const metadata: Metadata = {
  title: "Como Funciona | Logística & Sustentabilidade de Precisão",
  description: "Descubra o ciclo de vida do resíduo na 20 Recolher. Da recolha especializada à certificação ambiental de elite em Cantanhede.",
  openGraph: {
    title: "Como Funciona | Ciclo de Sustentabilidade 20 Recolher",
    description: "Um infográfico detalhado sobre a nossa operação logística e tratamento de REEE.",
  }
};

export default function ComoFuncionaPage() {
  return <ComoFuncionaContent />;
}
