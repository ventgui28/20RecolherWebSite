"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ClipboardCheck, Truck, Recycle, FileBadge, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { ExplodedDevice } from "@/components/exploded-device";
import { CircularEconomyLoop } from "@/components/circular-economy-loop";

const STEPS = [
  {
    id: "01",
    title: "Análise & Agendamento",
    subtitle: "Início do Ciclo",
    description: "Identificamos o potencial de valorização dos seus resíduos. Um processo de concierge que assegura o início de uma logística inversa sem falhas.",
    icon: ClipboardCheck,
    color: "from-green-500/10 to-emerald-500/10",
    features: ["Diagnóstico técnico", "Conformidade imediata", "Logística de elite"]
  },
  {
    id: "02",
    title: "Recolha de Precisão",
    subtitle: "Rastreabilidade Total",
    description: "A nossa frota licenciada recolhe os materiais, garantindo que cada componente é rastreado desde a origem até ao destino final.",
    icon: Truck,
    color: "from-emerald-500/10 to-teal-500/10",
    features: ["Transporte certificado", "Segurança absoluta", "Controlo de ativos"]
  },
  {
    id: "03",
    title: "Valorização Técnica",
    subtitle: "Economia Circular",
    description: "Em Cantanhede, operamos o fecho do ciclo. Triagem minuciosa para extração de matérias-primas secundárias e reintrodução no mercado.",
    icon: Recycle,
    color: "from-teal-500/10 to-green-600/10",
    features: ["Triagem de alta gama", "Zero desperdício", "Foco em REEE"]
  },
  {
    id: "04",
    title: "Certificação de Elite",
    subtitle: "Ciclo Completo",
    description: "Emissão de e-GAR e relatórios de sustentabilidade. A prova documental de que a sua empresa opera no topo da responsabilidade ambiental.",
    icon: FileBadge,
    color: "from-green-600/10 to-green-900/10",
    features: ["e-GAR Instantâneo", "Relatórios ESG", "Selos de Sustentabilidade"]
  }
];

export function ComoFuncionaContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  
  // Progresso Geral da Página
  const { scrollYProgress: pageProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Progresso Específico da Secção de Passos (Onde a animação acontece)
  const { scrollYProgress: stepsProgress } = useScroll({
    target: stepsRef,
    offset: ["start center", "end center"]
  });

  return (
    <div ref={containerRef} className="relative bg-transparent">
      {/* Hero Section ... */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-technical opacity-40" />
        <ScrollReveal>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="h1-hero text-[#0a2d10] mb-8 uppercase">
              Ciclo de <br /><span className="text-green-600 font-black">Excelência</span>
            </h1>
            <p className="text-[#065F46]/60 text-xl md:text-2xl font-medium max-w-2xl mx-auto tracking-tight leading-relaxed mb-16 uppercase">
              Engenharia de resíduos focada na economia circular e conformidade de elite.
            </p>
            <div className="flex flex-col items-center">
              <div className="w-px h-24 bg-gradient-to-b from-green-500 to-transparent" />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Immersive Scroll Section */}
      <section ref={stepsRef} className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-20">
          
          {/* Left Column: Content Scroll */}
          <div className="w-full md:w-1/2 space-y-[60vh] md:space-y-[80vh] pb-[40vh]">
            {STEPS.map((step) => (
              <div key={step.id} className="min-h-[50vh] flex flex-col justify-center">
                <ScrollReveal direction="right">
                  <div className="flex items-center space-x-6 mb-10">
                    <span className="text-7xl font-black text-green-500/10 tracking-tighter">{step.id}</span>
                    <div className="w-12 h-px bg-green-600/20" />
                    <span className="text-green-600 text-[11px] font-black uppercase tracking-[0.5em]">{step.subtitle}</span>
                  </div>
                  
                  <h3 className="text-5xl md:text-7xl font-black text-[#0a2d10] mb-10 tracking-tighter uppercase leading-[0.9]">
                    {step.title}
                  </h3>
                  
                  <p className="text-[#065F46]/60 text-xl md:text-2xl font-medium leading-relaxed mb-14 tracking-tight max-w-xl">
                    {step.description}
                  </p>

                  <ul className="grid grid-cols-1 gap-6">
                    {step.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center space-x-4 text-[#0a2d10] text-[12px] font-black uppercase tracking-widest">
                        <div className="h-2 w-2 rounded-full bg-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </ScrollReveal>
              </div>
            ))}
          </div>

          {/* Right Column: Sticky Visual Anchor */}
          <div className="hidden md:block w-1/2 h-screen sticky top-0 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
               <ExplodedDevice progress={stepsProgress} />
            </div>
          </div>
        </div>
      </section>

      {/* Circular Economy Loop Section */}
      <section className="py-40 bg-[#f8fdf9]/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-7xl font-black text-[#0a2d10] mb-6 tracking-tight uppercase">
                Economia <br /><span className="text-green-600">Circular</span>
              </h2>
              <p className="text-[#065F46]/60 text-lg md:text-xl font-medium max-w-2xl mx-auto tracking-tight">
                O nosso processo não termina na gestão. Reintroduzimos valor no mercado através da valorização certificada de matérias-primas secundárias.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <CircularEconomyLoop />
          </ScrollReveal>
        </div>
        
        {/* Background Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-green-50/50 to-transparent opacity-50 -z-1" />
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-transparent">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-black text-[#0a2d10] mb-12 tracking-tight uppercase">
              Pronto para <br /><span className="text-green-600">Valorizar?</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
              <Link href="/pedido-recolha" className="btn-elite px-14 py-6">
                Solicitar Recolha
              </Link>
              <Link href="/contactos" className="text-sm font-bold uppercase tracking-[0.2em] text-[#0a2d10] border-b-2 border-green-200 hover:border-green-600 transition-all pb-1">
                Falar com consultor
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
