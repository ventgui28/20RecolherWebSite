import { Metadata } from "next";
import { PedidoRecolhaContent } from "./pedido-recolha-content";

export const metadata: Metadata = {
  title: "Pedido de Recolha | Concierge Digital",
  description: "Solicite a recolha profissional de resíduos para a sua empresa. Formulário simplificado e agendamento rápido com a equipa da 20 Recolher.",
  keywords: ["agendar recolha REEE", "orçamento gestão resíduos", "recolha toners Cantanhede"],
};

export default function PedidoRecolhaPage() {
  return <PedidoRecolhaContent />;
}
