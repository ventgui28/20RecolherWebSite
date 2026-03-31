"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ClipboardCheck, Truck, Recycle, FileBadge, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const STEPS = [
  {
    id: "01",
    title: "Pedido e Agendamento",
    subtitle: "Início do Processo",
    description: "Analisamos as necessidades da sua empresa e definimos os tipos de resíduos a recolher. O agendamento é feito de forma rápida através do nosso portal ou contacto direto.",
    icon: ClipboardCheck,
    color: "from-green-500/10 to-emerald-500/10",
    features: ["Resposta em tempo real", "Classificação de resíduos", "Agendamento flexível"]
  },
  {
    id: "02",
    title: "Recolha e Logística",
    subtitle: "Operação de Campo",
    description: "Equipas técnicas deslocam-se às suas instalações para efetuar a carga. Utilizamos viaturas licenciadas para garantir o transporte seguro de todos os materiais.",
    icon: Truck,
    color: "from-emerald-500/10 to-teal-500/10",
    features: ["Viaturas licenciadas", "Técnicos especializados", "Segurança no transporte"]
  },
  {
    id: "03",
    title: "Tratamento e Triagem",
    subtitle: "Gestão em Unidade",
    description: "No nosso centro de gestão em Cantanhede, os resíduos são triados e preparados para reciclagem ou valorização. Garantimos o desvio de aterro sempre que possível.",
    icon: Recycle,
    color: "from-teal-500/10 to-green-600/10",
    features: ["Triagem especializada", "Valorização de materiais", "Relatório de resíduos"]
  },
  {
    id: "04",
    title: "Certificação Legal",
    subtitle: "Conformidade Total",
    description: "Emitimos as guias eletrónicas (e-GAR) necessárias para a conformidade legal da sua empresa. Recebe toda a documentação que prova o destino correto dos resíduos.",
    icon: FileBadge,
    color: "from-green-600/10 to-green-900/10",
    features: ["Emissão de e-GAR", "Validado pela APA/CCDRC", "Comprovativos de destino"]
  }
];

export function ComoFuncionaContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="relative bg-transparent">
      {/* Hero Section - Elite Design, Direct Text */}
      <section className="min-h-[70vh] flex flex-col items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-technical opacity-40" />
        <ScrollReveal>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="h1-hero text-[#0a2d10] mb-8 uppercase">
              Como <br /><span className="text-green-600 font-black">Trabalhamos</span>
            </h1>
            <p className="text-[#065F46]/60 text-xl md:text-2xl font-medium max-w-2xl mx-auto tracking-tight leading-relaxed mb-16">
              Saiba como funciona a gestão de resíduos na 20 Recolher. Da recolha inicial à certificação legal obrigatória.
            </p>
            <div className="flex flex-col items-center">
              <div className="w-px h-20 bg-gradient-to-b from-green-500 to-transparent" />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Luxury Process Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto relative">
          
          <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-px bg-green-100/50 -translate-x-1/2 hidden md:block" />
          <motion.div 
             className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-px bg-green-500 origin-top -translate-x-1/2 z-10 hidden md:block"
             style={{ scaleY }}
          />

          {STEPS.map((step, index) => (
            <div key={step.id} className={`flex flex-col md:flex-row items-center justify-between mb-40 md:mb-60 relative ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              
              <div className="w-full md:w-[45%] mb-12 md:mb-0">
                <ScrollReveal direction={index % 2 === 0 ? "right" : "left"}>
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="text-5xl font-black text-green-500/20">{step.id}</span>
                    <div className="w-8 h-px bg-green-600/30" />
                    <span className="text-green-600 text-[10px] font-bold uppercase tracking-[0.3em]">{step.subtitle}</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-5xl font-black text-[#0a2d10] mb-6 tracking-tight uppercase">
                    {step.title}
                  </h3>
                  
                  <p className="text-[#065F46]/70 text-lg md:text-xl font-medium leading-relaxed mb-10 tracking-tight">
                    {step.description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {step.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center space-x-3 text-[#0a2d10]/60 text-sm font-bold uppercase tracking-wider">
                        <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </ScrollReveal>
              </div>

              <div className="w-full md:w-[45%]">
                <ScrollReveal direction={index % 2 === 0 ? "left" : "right"}>
                  <div className={`bento-card bg-gradient-to-br ${step.color} border-green-100/30 flex items-center justify-center aspect-square md:aspect-video relative group overflow-hidden shadow-2xl shadow-green-900/5`}>
                     <div className="absolute inset-0 bg-grid-technical opacity-20" />
                     <motion.div
                       whileHover={{ scale: 1.05 }}
                       className="relative z-10 w-24 h-24 md:w-32 md:h-32 bg-white rounded-[2.5rem] shadow-2xl flex items-center justify-center border border-green-50"
                     >
                        <step.icon className="w-10 h-10 md:w-16 md:h-16 text-green-600" strokeWidth={1.2} />
                     </motion.div>
                  </div>
                </ScrollReveal>
              </div>

              <div className="absolute left-[30px] md:left-1/2 top-0 md:top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-green-500 z-20 hidden md:block shadow-[0_0_20px_rgba(52,191,73,0.3)]" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-transparent">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-black text-[#0a2d10] mb-12 tracking-tight uppercase">
              Inicie o Processo <br /><span className="text-green-600">Hoje</span>
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
