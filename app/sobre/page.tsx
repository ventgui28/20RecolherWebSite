import { Metadata } from "next";
import { SobreContent } from "./sobre-content";

export const metadata: Metadata = {
  title: "O Nosso Legado | História e Missão",
  description: "Conheça a história da 20 Recolher em Cantanhede. Desde o prémio de empreendedorismo em 2013 até à expansão em 2022, o nosso compromisso é a sustentabilidade de elite.",
  keywords: ["história 20 recolher", "recolha resíduos Cantanhede", "missão ambiental", "prémio empreendedorismo CIM-BM"],
};

export default function SobreNosPage() {
  return <SobreContent />;
}
