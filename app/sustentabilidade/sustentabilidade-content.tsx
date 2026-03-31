"use client";

import { motion } from "framer-motion";
import { 
  Recycle, 
  ShieldCheck, 
  Leaf, 
  Globe, 
  ArrowRight,
  TrendingUp,
  Award,
  FlaskConical
} from "lucide-react";
import Link from "next/link";

const impactStats = [
  { label: "Resíduos Valorizados", value: "98%", icon: TrendingUp },
  { label: "Anos de Compromisso", value: "11+", icon: Award },
  { label: "Destino Certificado", value: "100%", icon: ShieldCheck },
];

const sustainabilityPillars = [
  {
    title: "Economia Circular",
    description: "Transformamos o fim de vida de um equipamento no início de um novo ciclo de recursos, reduzindo a extração de matérias-primas virgens.",
    icon: Recycle,
  },
  {
    title: "Saúde Pública",
    description: "O tratamento rigoroso de componentes perigosos (REEE) previne a contaminação de solos e águas, protegendo a comunidade de Cantanhede.",
    icon: FlaskConical,
  },
  {
    title: "Conformidade APA",
    description: "Operamos sob os mais estritos licenciamentos da Agência Portuguesa do Ambiente, garantindo transparência total em cada quilo gerido.",
    icon: ShieldCheck,
  },
];

export function SustentabilidadeContent() {
  return (
    <div className="bg-transparent selection:bg-green-500 selection:text-white">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-[0.2em] mb-8"
            >
              <Leaf className="h-3.5 w-3.5" />
              <span>Manifesto Ambiental</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-black text-[#111111] tracking-tighter leading-[0.9] mb-12"
            >
              CUIDAR DO PRESENTE. <br />
              <span className="text-green-600">PROTEGER O FUTURO.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-800 text-xl md:text-2xl font-bold leading-relaxed tracking-tight"
            >
              Na 20 Recolher, a sustentabilidade não é um conceito — é o nosso código de conduta. Gerimos resíduos com a precisão necessária para preservar o ecossistema e a saúde humana.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Impact Stats - Minimalist Grid */}
      <section className="py-32 bg-transparent border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            {impactStats.map((stat, idx) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-gray-100">
                  <stat.icon className="h-5 w-5 text-green-600" />
                </div>
                <div className="text-5xl font-black text-[#111111] tracking-tighter mb-2 italic">{stat.value}</div>
                <div className="text-green-600 text-[11px] font-black uppercase tracking-[0.2em]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Pillars - Detailed List */}
      <section className="py-32 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-40">
            {sustainabilityPillars.map((pillar, idx) => (
              <motion.div 
                key={pillar.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className={`lg:flex lg:items-center lg:gap-32 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2 mb-16 lg:mb-0">
                  <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-10">
                    <pillar.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black text-[#111111] mb-8 tracking-tighter uppercase">{pillar.title}</h3>
                  <p className="text-gray-800 text-lg font-bold leading-relaxed mb-10 max-w-xl">
                    {pillar.description}
                  </p>
                  <div className="w-20 h-1 bg-green-600/20" />
                </div>

                <div className="lg:w-1/2">
                  <div className="relative aspect-video bg-white/40 backdrop-blur-sm rounded-[3.5rem] border border-gray-100 flex items-center justify-center group overflow-hidden">
                     {/* Abstract Environmental Visualization */}
                     <Globe className="h-24 w-24 text-gray-200 group-hover:text-green-100 transition-colors duration-1000 group-hover:scale-110" />
                     <div className="absolute inset-0 bg-gradient-to-tr from-green-500/5 to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Commitment Section - Ritz-Carlton Authority */}
      <section className="py-40 bg-[#111111] overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-green-500 text-[11px] font-bold uppercase tracking-[0.4em] mb-8">Responsabilidade Planetária</h2>
            <p className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-16 max-w-4xl mx-auto leading-tight uppercase">
              REDUZIR A PEGADA, <br />MAXIMIZAR O IMPACTO.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left max-w-4xl mx-auto">
              <div className="space-y-4">
                <h4 className="text-white font-bold text-lg tracking-tight">O Nosso Compromisso</h4>
                <p className="text-white/80 font-bold text-[15px] leading-relaxed">
                  Asseguramos que cada componente de resíduo eletrónico recolhido é encaminhado para destinos certificados, evitando a libertação de substâncias nocivas para a saúde humana e para o solo.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-white font-bold text-lg tracking-tight">O Valor da Confiança</h4>
                <p className="text-white/80 font-bold text-[15px] leading-relaxed">
                  Ao escolher a 20 Recolher, a sua empresa integra uma rede de economia circular que valoriza materiais e promove um futuro regenerativo em Cantanhede e arredores.
                </p>
              </div>
            </div>
            <div className="mt-20">
              <Link
                href="/pedido-recolha"
                className="inline-flex items-center px-12 py-5 bg-white text-[#111111] font-bold rounded-2xl hover:bg-green-600 hover:text-white transition-all text-sm uppercase tracking-widest"
              >
                Inicie o seu impacto positivo
                <ArrowRight className="ml-3 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Background Detail */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-green-600/5 rounded-full blur-[120px] -mr-64 -mb-64" />
      </section>

    </div>
  );
}

