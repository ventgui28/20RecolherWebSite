"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ClipboardCheck, Truck, Recycle, FileBadge } from "lucide-react";
import Link from "next/link";
import { CircularEconomyLoop } from "@/components/circular-economy-loop";

const STEPS = [
  {
    id: "01",
    title: "Análise Técnica",
    subtitle: "A Inteligência do Processo",
    description: "Iniciamos com um diagnóstico preciso do fluxo de resíduos. Uma consultoria de elite que desenha o caminho ideal para a valorização de cada ativo eletrónico.",
    icon: ClipboardCheck,
    bgColor: "bg-[#F9FAFB]", // Pearl White
    iconBg: "bg-white"
  },
  {
    id: "02",
    title: "Logística Certificada",
    subtitle: "Rastreabilidade de Ponta",
    description: "Operamos uma recolha cirúrgica com frota própria licenciada. Cada quilómetro é monitorizado, garantindo a segurança total dos seus dados e materiais.",
    icon: Truck,
    bgColor: "bg-[#F0F4F1]", // Misty Mint
    iconBg: "bg-white"
  },
  {
    id: "03",
    title: "Triagem & Valorização",
    subtitle: "Engenharia de Recursos",
    description: "No nosso centro especializado, os resíduos são transformados. Aplicamos processos técnicos para extrair matérias-primas que voltam a alimentar a indústria.",
    icon: Recycle,
    bgColor: "bg-[#F9FAFB]", // Pearl White
    iconBg: "bg-white"
  },
  {
    id: "04",
    title: "Conformidade Total",
    subtitle: "Certificação de Elite",
    description: "Fechamos o ciclo com a emissão de guias e-GAR e relatórios de sustentabilidade detalhados. A sua empresa em total harmonia com a legislação europeia.",
    icon: FileBadge,
    bgColor: "bg-[#F0F4F1]", // Misty Mint
    iconBg: "bg-white"
  }
];

export function ComoFuncionaContent() {
  return (
    <div className="relative bg-white">
      {/* Hero Section - Pure Apple Style */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center px-6 text-center">
        <ScrollReveal>
          <span className="inline-block text-green-600 text-xs font-black uppercase tracking-[0.5em] mb-8">Operação de Precisão</span>
          <h1 className="h1-hero text-[#0a2d10] mb-12 uppercase">
            Ciclo de <br /><span className="text-green-600 font-black">Excelência</span>
          </h1>
          <div className="w-px h-32 bg-gradient-to-b from-green-500 to-transparent mx-auto" />
        </ScrollReveal>
      </section>

      {/* Steps - Gallery Sections Style */}
      {STEPS.map((step, index) => (
        <section key={step.id} className={`py-32 md:py-60 ${step.bgColor} px-6 overflow-hidden`}>
          <div className="max-w-7xl mx-auto">
            <div className={`flex flex-col md:flex-row items-center gap-20 md:gap-32 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Text Side */}
              <div className="w-full md:w-1/2">
                <ScrollReveal direction={index % 2 === 0 ? "right" : "left"}>
                  <div className="flex items-center space-x-4 mb-10">
                    <span className="text-4xl font-black text-[#0a2d10]/20">{step.id}</span>
                    <div className="w-8 h-px bg-[#0a2d10]/20" />
                  </div>
                  
                  <h2 className="text-5xl md:text-8xl font-black text-[#0a2d10] mb-8 tracking-tighter uppercase leading-[0.85]">
                    {step.title}
                  </h2>
                  
                  <p className="text-gray-800 text-xl md:text-2xl font-bold leading-relaxed mb-6 tracking-tight max-w-xl">
                    {step.subtitle}
                  </p>
                  
                  <p className="text-black/80 text-lg md:text-xl font-bold leading-relaxed mb-12 tracking-tight max-w-lg">
                    {step.description}
                  </p>
                </ScrollReveal>
              </div>

              {/* Visual Side - Hardware Aesthetic */}
              <div className="w-full md:w-1/2 flex justify-center">
                <ScrollReveal direction={index % 2 === 0 ? "left" : "right"}>
                  <div className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center">
                     {/* Background Physicality (Soft Shadow instead of box) */}
                     <div className="absolute inset-0 bg-white rounded-full shadow-[0_40px_100px_rgba(0,0,0,0.03)] scale-90" />
                     
                     {/* The Icon - Clean and Imposing */}
                     <motion.div 
                       whileHover={{ scale: 1.02 }}
                       className="relative z-10 w-40 h-40 md:w-56 md:h-56 bg-white rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-gray-50 flex items-center justify-center"
                     >
                        <step.icon className="w-16 h-16 md:w-24 md:h-24 text-green-600" strokeWidth={0.8} />
                        
                        {/* Material Detail */}
                        <div className="absolute inset-0 rounded-[3rem] border-t border-white pointer-events-none" />
                     </motion.div>

                     {/* Soft Ambient Light */}
                     <div className="absolute -bottom-10 w-[120%] h-20 bg-black/5 blur-[60px] rounded-full" />
                  </div>
                </ScrollReveal>
              </div>

            </div>
          </div>
        </section>
      ))}

      {/* Circular Economy Section */}
      <section className="py-40 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-7xl font-black text-[#0a2d10] mb-24 tracking-tighter uppercase">
              Economia <span className="text-green-600">Circular</span>
            </h2>
            <CircularEconomyLoop />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-60 bg-[#0a2d10] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-5xl md:text-8xl font-black mb-16 tracking-tighter uppercase leading-none">
              Lidere a <br /><span className="text-green-500">Mudança</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
              <Link href="/pedido-recolha" className="btn-elite px-16 py-7 !bg-white !text-[#0a2d10]">
                Solicitar Recolha
              </Link>
              <Link href="/contactos" className="text-sm font-black uppercase tracking-[0.3em] border-b-2 border-green-500/30 hover:border-green-500 transition-all pb-2">
                Contactar Especialista
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
