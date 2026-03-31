"use client";

import { motion } from "framer-motion";
import { 
  Building, 
  School, 
  Gavel, 
  Factory, 
  Monitor, 
  Store,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";

const sectors = [
  {
    title: "Administração Pública",
    description: "Servimos Tribunais, Conservatórias e outras entidades públicas com o rigor documental e jurídico que o setor exige.",
    icon: Gavel,
    tags: ["Tribunais", "Conservatórias", "Câmaras Municipais"],
  },
  {
    title: "Educação & Escolas",
    description: "Programas dedicados à recolha de REEE e consumíveis em estabelecimentos de ensino, promovendo a literacia ambiental.",
    icon: School,
    tags: ["Agrupamentos de Escolas", "Bibliotecas", "Centros de Formação"],
  },
  {
    title: "Setor Industrial",
    description: "Gestão de fluxos de resíduos em grandes unidades de produção e logística na Zona Industrial de Cantanhede.",
    icon: Factory,
    tags: ["Fábricas", "Unidades Logísticas", "Oficinas"],
  },
  {
    title: "Tecnologia & Escritórios",
    description: "Soluções seguras para a renovação de parques informáticos e destruição de suportes de dados confidenciais.",
    icon: Monitor,
    tags: ["Empresas de IT", "Escritórios de Advogados", "Bancos"],
  },
  {
    title: "Comércio & Serviços",
    description: "Apoio de proximidade ao comércio local e negócios de serviços que procuram uma gestão responsável de resíduos.",
    icon: Store,
    tags: ["Lojas", "Restauração", "Clínicas"],
  },
];

export function ClientesContent() {
  return (
    <div className="bg-transparent selection:bg-green-500 selection:text-white">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-[0.2em] mb-8"
            >
              <Building className="h-3.5 w-3.5" />
              <span>Ecossistemas de Confiança</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-black text-[#111111] tracking-tighter leading-[0.9] mb-12 uppercase"
            >
              PARCEIRO DE <br />
              <span className="text-green-600">CONFIANÇA.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-800 text-xl md:text-2xl font-bold leading-relaxed tracking-tight"
            >
              A 20 Recolher adapta-se aos desafios específicos de cada setor, garantindo que a gestão de resíduos é um processo invisível e impecável para a sua organização.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Sectors Grid - Minimalist Cards */}
      <section className="py-32 bg-transparent border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, idx) => (
              <motion.div 
                key={sector.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] group hover:shadow-[0_30px_60px_rgba(0,0,0,0.05)] transition-all duration-500"
              >
                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-green-600 group-hover:text-white transition-all duration-500">
                  <sector.icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-[#111111] mb-4 tracking-tighter uppercase">{sector.title}</h3>
                <p className="text-black/80 font-bold leading-relaxed mb-8 text-[15px]">
                  {sector.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {sector.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-50 text-black/60 text-[10px] font-black uppercase tracking-widest rounded-lg border border-gray-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Quote / Authority Section */}
      <section className="py-40 bg-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:flex lg:items-center lg:gap-32">
            
            <div className="lg:w-1/2 mb-16 lg:mb-0">
              <h2 className="text-green-600 text-[11px] font-bold uppercase tracking-[0.4em] mb-8 italic">Voz da Excelência</h2>
              <p className="text-3xl md:text-5xl font-black text-[#111111] tracking-tighter leading-tight mb-12 uppercase italic">
                "A CONFIANÇA É O NOSSO <br />RESÍDUO MAIS PRECIOSO."
              </p>
              <div className="space-y-6 text-black/80 text-lg font-bold leading-relaxed max-w-xl">
                <p>
                  Não somos apenas uma empresa de recolha; somos um parceiro estratégico que entende as nuances de cada instituição.
                </p>
                <div className="flex items-center space-x-3 text-green-600 font-black text-sm tracking-widest uppercase pt-6">
                  <ShieldCheck className="h-6 w-6" />
                  <span>Conformidade Documental Absoluta</span>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
               <div className="bg-white/40 backdrop-blur-sm rounded-[4rem] p-12 md:p-20 relative overflow-hidden border border-gray-100">
                  <div className="grid grid-cols-2 gap-8 relative z-10">
                    {[
                      "Escolas Regionais",
                      "Tribunais de Círculo",
                      "Indústria 4.0",
                      "Pequeno Comércio",
                      "Conservatórias",
                      "Banca & Seguros"
                    ].map((item) => (
                      <div key={item} className="flex items-center space-x-3 text-[#111111] font-black text-sm">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                        <span className="tracking-tight uppercase">{item}</span>
                      </div>
                    ))}
                  </div>
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-100/30 rounded-full blur-3xl -mr-16 -mt-16" />
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-32 bg-[#111111] mx-6 mb-12 rounded-[4rem] text-center overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0,transparent_70%)]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-10 tracking-tighter uppercase leading-tight">PREPARADO PARA SER <br />O PRÓXIMO PARCEIRO?</h2>
          <p className="text-white/80 text-lg md:text-xl font-bold mb-16 max-w-2xl mx-auto">
            Junte-se às dezenas de entidades que já confiam na 20 Recolher para uma gestão de resíduos irrepreensível.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <Link
              href="/pedido-recolha"
              className="bg-green-600 text-white px-12 py-5 rounded-2xl font-bold hover:bg-green-700 transition-all text-xs uppercase tracking-[0.2em] shadow-2xl shadow-green-950/20"
            >
              Pedir Recolha de Elite
            </Link>
            <Link
              href="/contactos"
              className="bg-transparent border border-zinc-800 text-white px-12 py-5 rounded-2xl font-bold hover:bg-zinc-900 transition-all text-xs uppercase tracking-[0.2em]"
            >
              Contactar Consultor
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

