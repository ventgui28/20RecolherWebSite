"use client";

import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  FileText, 
  Lock, 
  Scale, 
  CheckCircle2, 
  ArrowRight,
  AlertTriangle,
  FileCheck2,
  DatabaseZap,
  Gavel
} from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";

const complianceTopics = [
  {
    icon: Scale,
    title: "DL n.º 152-D/2017",
    description: "O quadro jurídico que regula a gestão de REEE em Portugal. O incumprimento pode resultar em contraordenações graves para o detentor do resíduo.",
    details: ["Responsabilidade Alargada do Produtor", "Metas de Recolha Obrigatórias", "Regime de Contraordenações Ambientais"]
  },
  {
    icon: FileText,
    title: "Emissão de e-GAR",
    description: "A Guia de Acompanhamento de Resíduos Eletrónica é obrigatória. Nós tratamos de toda a burocracia no Siliamb (APA) para a sua total tranquilidade.",
    details: ["Rastreabilidade Total", "Comprovação Legal de Transporte", "Arquivo Digital de 5 Anos"]
  },
  {
    icon: Lock,
    title: "RGPD & Dados",
    description: "Não recolhemos apenas hardware; protegemos a sua propriedade intelectual. Destruição física certificada de suportes de dados (Discos, SSDs).",
    details: ["Eliminação Irreversível", "Certificado de Destruição", "Conformidade com Norma DIN 66399"]
  }
];

export function ComplianceContent() {
  return (
    <div className="bg-transparent selection:bg-green-500 selection:text-white grain-overlay pt-32">
      
      {/* Hero Section - Authority & Trust */}
      <section className="relative pt-32 pb-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <ScrollReveal>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-[0.2em] mb-10 border border-green-100">
                <ShieldCheck className="w-3 h-3" />
                <span>Segurança Jurídica & Ambiental</span>
              </div>
              <h1 className="text-6xl md:text-9xl font-black text-[#111111] tracking-[-0.07em] leading-[0.85] uppercase mb-12">
                GUIA DE <br />
                <span className="text-green-600">COMPLIANCE.</span>
              </h1>
              <p className="text-gray-800 text-xl md:text-2xl font-bold leading-relaxed tracking-tight max-w-2xl mb-16">
                Transformamos a complexidade legislativa em segurança operacional para a sua empresa ou entidade pública.
              </p>
            </ScrollReveal>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-green-50/50 to-transparent -z-10" />
      </section>

      {/* Main Pillars of Compliance */}
      <section className="py-40 bg-white/50 backdrop-blur-sm relative border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {complianceTopics.map((topic, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="group h-full p-12 rounded-[3.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-green-500/5 transition-all duration-700">
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                    <topic.icon className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-black text-black mb-6 uppercase tracking-tighter">{topic.title}</h3>
                  <p className="text-gray-700 font-bold text-sm leading-relaxed mb-10">{topic.description}</p>
                  <ul className="space-y-4 pt-8 border-t border-gray-50">
                    {topic.details.map((detail) => (
                      <li key={detail} className="flex items-center space-x-3">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <span className="text-[11px] font-black uppercase tracking-wider text-black/70">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Data Destruction Specialized Section */}
      <section className="py-60 bg-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:flex lg:items-center lg:gap-32">
            <ScrollReveal className="lg:w-1/2 mb-20 lg:mb-0">
               <div className="bento-card-green p-16 rounded-[4rem] relative overflow-hidden">
                  <DatabaseZap className="w-40 h-40 text-white/5 absolute -top-10 -right-10" />
                  <div className="relative z-10">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
                      O FIM DA VIDA <br />DOS DADOS.
                    </h2>
                    <p className="text-white/90 text-lg font-bold mb-12">
                      Apagar ficheiros não é suficiente. Garantimos a destruição física irreversível de suportes magnéticos e eletrónicos.
                    </p>
                    <div className="space-y-6">
                      {[
                        { icon: Gavel, text: "Garantia de Confidencialidade" },
                        { icon: AlertTriangle, text: "Mitigação de Fugas de Dados" },
                        { icon: FileCheck2, text: "Certificado de Destruição por S/N" }
                      ].map((item, i) => (
                        <div key={i} className="flex items-center space-x-4 p-4 bg-white/10 rounded-2xl border border-white/10">
                           <item.icon className="w-5 h-5 text-green-400" />
                           <span className="text-xs font-black text-white uppercase tracking-widest">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
               </div>
            </ScrollReveal>
            <ScrollReveal direction="left" className="lg:w-1/2">
              <h4 className="text-green-600 text-[11px] font-black uppercase tracking-[0.4em] mb-8">Protocolo RGPD</h4>
              <h3 className="text-4xl md:text-6xl font-black text-black mb-10 tracking-tighter uppercase leading-[0.9]">
                SEGURANÇA <br /><span className="text-green-600">SEM COMPROMISSOS.</span>
              </h3>
              <p className="text-gray-800 text-lg font-bold leading-relaxed mb-10">
                Trabalhamos em estreita colaboração com departamentos de TI e Compliance para garantir que cada equipamento é processado sob os mais rigorosos padrões de segurança de dados do mercado.
              </p>
              <Link href="/contactos" className="inline-flex items-center font-black text-black hover:text-green-600 transition-all group tracking-tighter text-sm uppercase">
                Falar com consultor de segurança
                <ArrowRight className="ml-4 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Checklist Section */}
      <section className="py-40 bg-black text-white rounded-[4rem] mx-6 mb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white opacity-[0.03]" />
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tighter uppercase">A SUA CHECKLIST DE CONFORMIDADE.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {[
                "Possui Guia de Acompanhamento de Resíduos (e-GAR)?",
                "Tem Certificado de Destruição de Dados (RGPD)?",
                "Garante o tratamento em operador licenciado CCDRC?",
                "Cumpre o reporte obrigatório no Siliamb?",
                "Possui prova documental para Auditorias Ambientais?",
                "O seu parceiro valoriza os componentes recolhidos?"
              ].map((check, i) => (
                <div key={i} className="flex items-center space-x-6 p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-bold text-sm tracking-tight">{check}</span>
                </div>
              ))}
            </div>
            <div className="mt-20">
              <p className="text-green-400 font-black text-xs uppercase tracking-widest mb-10">Falta-lhe algum destes pontos?</p>
              <Link href="/pedido-recolha" className="btn-elite bg-green-600 border-none px-12">
                Nós Resolvemos Tudo
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-transparent text-center">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
             <h2 className="text-5xl md:text-7xl font-black text-black mb-12 tracking-tighter uppercase">DORMA DESCANSADO. <br /><span className="text-green-600">RECOLHA CONNOSCO.</span></h2>
             <p className="text-gray-800 text-xl font-bold mb-16 max-w-2xl mx-auto">
               Garantimos que a sua responsabilidade ambiental termina no momento em que os nossos técnicos recolhem os seus equipamentos.
             </p>
             <Link href="/contactos" className="text-[12px] font-black uppercase tracking-[0.3em] text-[#111111] hover:text-green-600 transition-colors border-b-2 border-green-100 hover:border-green-600 pb-2">
                Solicitar Consultoria Técnica
             </Link>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
