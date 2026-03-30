"use client";

import { motion } from "framer-motion";
import { 
  Truck, 
  ShieldCheck, 
  RefreshCw, 
  Factory, 
  Printer, 
  Cpu, 
  ArrowRight,
  ClipboardCheck,
  Zap,
  ArrowUpRight
} from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";

const serviceCategories = [
  {
    id: "reee",
    title: "Gestão de REEE",
    subtitle: "Equipamentos Elétricos e Eletrónicos",
    description: "Recolha, triagem e encaminhamento de computadores, impressoras, servidores, telemóveis e outros equipamentos eletrónicos em fim de vida. Garantimos que componentes perigosos são tratados de acordo com as normas ambientais.",
    icon: Cpu,
    benefits: ["Recolha Certificada", "Triagem Técnica", "Proteção Ambiental"],
  },
  {
    id: "consumiveis",
    title: "Consumíveis de Impressão",
    subtitle: "Toners e Tinteiros",
    description: "Serviço especializado de recolha e gestão de toners e tinteiros vazios. Asseguramos que estes resíduos não terminam em aterros, promovendo a sua valorização através da economia circular.",
    icon: Printer,
    benefits: ["Recolha de Proximidade", "Solução para Escolas", "Rigor no Tratamento"],
  },
  {
    id: "industria",
    title: "Soluções Industriais",
    subtitle: "Logística e Gestão Dedicada",
    description: "Apoio estratégico a parques industriais e grandes unidades de produção. Oferecemos planos personalizados de gestão de resíduos industriais banais e específicos, otimizando a logística interna da sua empresa.",
    icon: Factory,
    benefits: ["Planos Tailor-made", "Gestão de Fluxos", "Eficiência Operacional"],
  },
  {
    id: "conformidade",
    title: "Rigor e Certificação",
    subtitle: "Segurança Jurídica Ambiental",
    description: "Emissão de toda a documentação legal necessária, incluindo Guias de Acompanhamento de Resíduos e Certificados de Destino Final. Tranquilidade total para empresas que cumprem a lei.",
    icon: ClipboardCheck,
    benefits: ["E-Gar (APA)", "Conformidade Legal", "Transparência Total"],
  },
];

export function ServicosContent() {
  return (
    <div className="bg-white selection:bg-emerald-500 selection:text-white grain-overlay">
      
      {/* Page Hero Section */}
      <section className="relative pt-48 pb-32 md:pt-64 md:pb-48 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-grid-technical opacity-20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-3 px-5 py-2 rounded-full bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-12"
            >
              <Zap className="h-3 w-3 text-emerald-400" />
              <span>Serviços de Alta Precisão</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="h1-hero text-black mb-16 uppercase"
            >
              A ARTE DA <br />
              <span className="text-emerald-600">CONFORMIDADE.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 text-xl md:text-3xl font-medium leading-[1.4] tracking-tight max-w-2xl"
            >
              Soluções integradas de gestão de resíduos desenhadas para empresas que exigem rigor absoluto e impacto sustentável de elite.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services List - Large Alternating Cards */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-60">
            {serviceCategories.map((service, idx) => (
              <ScrollReveal 
                key={service.id}
                direction={idx % 2 === 0 ? "right" : "left"}
                className={`lg:flex lg:items-center lg:gap-40 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Text Content */}
                <div className="lg:w-1/2 mb-20 lg:mb-0">
                  <div className="w-20 h-20 bg-gray-50 rounded-[2.5rem] flex items-center justify-center mb-12 border border-black/[0.03] shadow-sm">
                    <service.icon className="h-10 w-10 text-emerald-600" />
                  </div>
                  <h2 className="text-emerald-600 text-[10px] font-black uppercase tracking-[0.5em] mb-6">{service.subtitle}</h2>
                  <h3 className="text-5xl md:text-7xl font-black text-black mb-10 tracking-[-0.06em] uppercase leading-[0.9]">{service.title}</h3>
                  <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed mb-12 max-w-xl tracking-tight">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                    {service.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center space-x-4 text-black font-black text-xs tracking-widest uppercase">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    href="/pedido-recolha" 
                    className="btn-elite group scale-90"
                  >
                    Agendar para este serviço
                    <ArrowUpRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </div>

                {/* Visual Placeholder (Elite Style) */}
                <div className="lg:w-1/2">
                  <div className="relative aspect-square bg-[#F9FAFB] rounded-[4rem] border border-black/[0.03] flex items-center justify-center group overflow-hidden shadow-[0_100px_80px_rgba(0,0,0,0.03)]">
                     <div className="absolute inset-0 bg-grid-technical opacity-20" />
                     <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="w-80 h-80 border border-emerald-500/10 rounded-full flex items-center justify-center"
                     >
                        <RefreshCw className="h-24 w-24 text-gray-200 group-hover:text-emerald-200 transition-all duration-1000" />
                     </motion.div>
                     
                     {/* Floating Badge */}
                     <div className="absolute top-12 right-12 px-8 py-3 glass rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-black border border-black/5 shadow-xl">
                        Elite Standards
                     </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Simple Steps (The 20 Recolher Way) */}
      <section className="py-40 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-technical opacity-5 invert" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12">
            <div className="max-w-2xl">
              <h2 className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.5em] mb-10">A Nossa Operação</h2>
              <p className="text-5xl md:text-8xl font-black text-white tracking-[-0.07em] leading-[0.85] uppercase">MÉTODO DE <br />ALTA PRECISÃO.</p>
            </div>
            <div className="hidden md:block">
               <div className="w-24 h-[1px] bg-emerald-600" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
            {[
              { id: '01', title: 'Agendamento', text: 'Solicita a recolha através do nosso concierge digital de luxo.' },
              { id: '02', title: 'Recolha', text: 'Equipas de elite deslocam-se à sua unidade com pontualidade suíça.' },
              { id: '03', title: 'Valorização', text: 'Triagem técnica avançada no nosso centro de excelência industrial.' },
              { id: '04', title: 'Garantia', text: 'Emissão imediata de certificados oficiais de destino final.' },
            ].map((step) => (
              <div key={step.id} className="relative group">
                <span className="text-8xl font-black text-white opacity-5 mb-12 block group-hover:opacity-10 transition-opacity font-mono italic tracking-tighter leading-none">{step.id}</span>
                <h4 className="text-white font-black text-2xl mb-6 tracking-tighter uppercase">{step.title}</h4>
                <p className="text-gray-500 font-medium text-lg leading-relaxed tracking-tight">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-60 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-5xl md:text-8xl font-black text-black mb-16 tracking-[-0.07em] leading-[0.85] uppercase">O TEU PARCEIRO <br />DE <span className="text-emerald-600">CONFIANÇA.</span></h2>
            <p className="text-gray-500 text-xl md:text-2xl font-medium mb-20 tracking-tight leading-relaxed max-w-2xl mx-auto">
              Garanta a proteção do ambiente e a conformidade da sua empresa com a 20 Recolher.
            </p>
            <div className="flex justify-center">
              <Link
                href="/pedido-recolha"
                className="btn-elite px-16 py-7 text-[13px]"
              >
                Solicitar Orçamento Grátis
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}

