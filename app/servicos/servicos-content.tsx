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
  Zap
} from "lucide-react";
import Link from "next/link";

const serviceCategories = [
  {
    id: "reee",
    title: "Gestão de REEE",
    subtitle: "Equipamentos Elétricos e Eletrónicos",
    description: "Recolha, triagem e encaminhamento de computadores, impressoras, servidores, telemóveis e outros equipamentos eletrónicos em fim de vida. Garantimos que componentes perigosos (como baterias e mercúrio) são tratados de acordo com as normas ambientais.",
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
    <div className="bg-white selection:bg-emerald-500 selection:text-white">
      
      {/* Page Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden border-b border-gray-50 bg-[#F9F9FB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-[0.2em] mb-8"
            >
              <span>Serviços de Elite</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-black text-[#111111] tracking-tighter leading-[0.9] mb-12"
            >
              A ARTE DA <br />
              <span className="text-emerald-600">CONFORMIDADE.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#6B7280] text-xl md:text-2xl font-medium leading-relaxed tracking-tight"
            >
              Soluções integradas de gestão de resíduos desenhadas para empresas que exigem rigor, rapidez e impacto ambiental positivo.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services List - Large Alternating Cards */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-40">
            {serviceCategories.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`lg:flex lg:items-center lg:gap-32 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Text Content */}
                <div className="lg:w-1/2 mb-16 lg:mb-0">
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-10 border border-gray-100 shadow-sm">
                    <service.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h2 className="text-emerald-600 text-[11px] font-bold uppercase tracking-[0.3em] mb-4">{service.subtitle}</h2>
                  <h3 className="text-4xl md:text-5xl font-black text-[#111111] mb-8 tracking-tighter uppercase">{service.title}</h3>
                  <p className="text-[#6B7280] text-lg font-medium leading-relaxed mb-10 max-w-xl">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                    {service.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center space-x-3 text-[#111111] font-bold text-sm tracking-tight">
                        <Zap className="h-4 w-4 text-emerald-600" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    href="/pedido-recolha" 
                    className="inline-flex items-center font-bold text-[#111111] hover:text-emerald-600 transition-all group text-sm uppercase tracking-widest"
                  >
                    Agendar para este serviço
                    <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Visual Placeholder (Elite Style) */}
                <div className="lg:w-1/2">
                  <div className="relative aspect-video bg-[#F9F9FB] rounded-[3.5rem] border border-gray-100 flex items-center justify-center group overflow-hidden shadow-2xl shadow-black/5">
                     <RefreshCw className="h-20 w-20 text-gray-200 group-hover:text-emerald-200 group-hover:rotate-180 transition-all duration-1000" />
                     {/* Floating Badge */}
                     <div className="absolute top-10 right-10 px-6 py-2 glass rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-[#111111]">
                        Excelência Certificada
                     </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Simple Steps (The 20 Recolher Way) */}
      <section className="py-32 bg-[#111111] rounded-[4rem] mx-6 mb-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-emerald-500 text-[11px] font-bold uppercase tracking-[0.4em] mb-4">A Nossa Operação</h2>
            <p className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-tight">MÉTODO DE ELITE EM 4 PASSOS.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { id: '01', title: 'Agendamento', text: 'Solicita a recolha através do nosso concierge digital.' },
              { id: '02', title: 'Recolha', text: 'A nossa equipa dinâmica desloca-se ao seu local.' },
              { id: '03', title: 'Triagem', text: 'Os resíduos são triados e encaminhados no nosso centro.' },
              { id: '04', title: 'Certificação', text: 'Recebe o certificado oficial de destino final.' },
            ].map((step) => (
              <div key={step.id} className="relative group">
                <span className="text-7xl font-black text-white opacity-5 mb-8 block group-hover:opacity-10 transition-opacity font-mono italic">{step.id}</span>
                <h4 className="text-white font-bold text-xl mb-4 tracking-tight">{step.title}</h4>
                <p className="text-zinc-500 font-medium text-sm leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-40 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-[#111111] mb-12 tracking-tighter">O SEU PARCEIRO DE CONFIANÇA.</h2>
            <p className="text-[#6B7280] text-xl md:text-2xl font-medium mb-16 tracking-tight">
              Não deixe os seus resíduos eletrónicos ao acaso. Garanta a proteção do ambiente com a 20 Recolher.
            </p>
            <Link
              href="/pedido-recolha"
              className="bg-[#111111] text-white px-12 py-5 rounded-2xl font-bold hover:bg-emerald-600 transition-all text-sm uppercase tracking-widest shadow-2xl shadow-black/10"
            >
              Pedir Orçamento Grátis
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
