"use client";

import { Hero } from "@/components/hero";
import { ServicesSummary } from "@/components/services-summary";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ArrowRight, Recycle, ShieldCheck, Factory } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white selection:bg-emerald-500 selection:text-white">
      <Hero />
      
      <ServicesSummary />

      {/* Modern Commitment Section - Luxury Bento Style */}
      <section className="py-40 bg-[#FDFDFE] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-technical opacity-40" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="lg:flex lg:items-center lg:gap-32">
            
            <ScrollReveal direction="right" className="lg:w-1/2 mb-20 lg:mb-0">
              <h2 className="text-emerald-600 text-[11px] font-bold uppercase tracking-[0.4em] mb-8">Padrões Globais</h2>
              <h3 className="text-4xl md:text-6xl font-black text-elite mb-12 tracking-tighter leading-tight">
                COMPROMISSO <br />SEM COMPROMISSOS.
              </h3>
              <p className="text-[#6B7280] text-lg md:text-xl mb-12 font-medium leading-relaxed max-w-xl">
                Na 20 Recolher, elevamos a gestão de resíduos a um nível de consultoria estratégica. 
                Garantimos conformidade absoluta e documentação impecável para empresas que valorizam a excelência.
              </p>
              
              <div className="space-y-8 mb-14">
                {[
                  { icon: ShieldCheck, title: "Certificação Oficial", text: "Destino final certificado com rigor jurídico." },
                  { icon: Recycle, title: "Economia Circular", text: "Valorização máxima dos componentes reciclados." },
                  { icon: Factory, title: "Logística Industrial", text: "Operações dedicadas em Cantanhede e região." },
                ].map((item, idx) => (
                  <ScrollReveal key={idx} delay={idx * 0.1} className="flex items-start space-x-6 group">
                    <div className="mt-1 bg-white p-3 rounded-2xl border border-black/[0.03] shadow-sm group-hover:border-emerald-200 transition-colors">
                      <item.icon className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="text-[#111111] font-bold text-xs tracking-widest uppercase mb-1">{item.title}</h4>
                      <p className="text-[#6B7280] text-[15px] font-medium leading-relaxed">{item.text}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <Link
                href="/sobre"
                className="inline-flex items-center font-bold text-[#111111] hover:text-emerald-600 transition-all group tracking-tighter text-sm"
              >
                Conheça a nossa história e missão
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="left" className="lg:w-1/2">
              <div className="bento-card group aspect-square flex items-center justify-center">
                 <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                 <div className="text-center relative z-10">
                    <div className="w-24 h-24 bg-emerald-50 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-inner">
                      <Recycle className="h-10 w-10 text-emerald-600" />
                    </div>
                    <p className="text-elite font-bold text-2xl md:text-3xl tracking-tighter italic mb-8">"Cuidamos do ambiente, <br />um resíduo de cada vez."</p>
                    <div className="mt-12 w-px h-24 bg-gradient-to-b from-emerald-600 to-transparent mx-auto opacity-50" />
                 </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Final Minimalist Call to Action - Luxury Depth */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="bg-mesh-gradient opacity-20">
          <div className="mesh-orb-2 left-1/2 -translate-x-1/2 top-0" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl md:text-7xl font-black text-elite mb-10 tracking-tighter leading-tight uppercase">PREPARADO PARA <br />OTIMIZAR A SUA GESTÃO?</h2>
            <p className="text-[#6B7280] text-xl md:text-2xl mb-14 font-medium max-w-2xl mx-auto tracking-tight">
              Fale com os nossos especialistas e solicite um agendamento de recolha profissional para a sua empresa.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <Link
                href="/pedido-recolha"
                className="bg-[#111111] text-white px-12 py-5 rounded-2xl font-bold hover:bg-emerald-600 transition-all shadow-xl shadow-black/5 text-sm uppercase tracking-widest"
              >
                Solicitar Recolha
              </Link>
              <Link
                href="/contactos"
                className="bg-white border border-gray-200 text-[#111111] px-12 py-5 rounded-2xl font-bold hover:bg-gray-50 transition-all text-sm uppercase tracking-widest"
              >
                Falar com Especialista
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
