import { ComplianceContent } from "./compliance-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compliance & Segurança Jurídica | 20 Recolher",
  description: "Guia completo de conformidade legal, e-GAR e RGPD para a gestão de resíduos tecnológicos em Portugal.",
};

export default function CompliancePage() {
  return <ComplianceContent />;
}
