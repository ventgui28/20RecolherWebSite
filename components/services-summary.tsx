"use client";

import { motion } from "framer-motion";
import { Truck, ShieldCheck, RefreshCw, Factory, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Gestão de REEE",
    description: "Recolha e tratamento especializado de equipamentos elétricos e eletrónicos com total segurança.",
    icon: Truck,
  },
  {
    title: "Conformidade Ambiental",
    description: "Documentação completa e emissão de certificados oficiais de destino final de resíduos.",
    icon: ShieldCheck,
  },
  {
    title: "Economia Circular",
    description: "Encaminhamento eficiente para reciclagem, promovendo a sustentabilidade da sua empresa.",
    icon: RefreshCw,
  },
  {
    title: "Resíduos Industriais",
    description: "Soluções logísticas adaptadas a grandes fábricas e unidades de produção em Cantanhede.",
    icon: Factory,
  },
];

export function ServicesSummary() {
  return (
    <section className="py-40 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-technical opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-emerald-600 text-[11px] font-black uppercase tracking-[0.5em] mb-6"
            >
              Serviços de Excelência
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-elite tracking-tighter leading-tight"
            >
              GESTÃO PROFISSIONAL <br />PARA O FUTURO.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link 
              href="/servicos" 
              className="inline-flex items-center text-[11px] font-black uppercase tracking-[0.2em] text-[#111111] hover:text-emerald-600 transition-all group pb-2 border-b-2 border-black/[0.05] hover:border-emerald-600"
            >
              Explorar Catálogo Completo <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bento-card group h-full flex flex-col p-8 md:p-10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50/50 border border-emerald-100/50 text-emerald-600 flex items-center justify-center mb-10 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-sm">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-black text-elite mb-6 tracking-tight group-hover:text-emerald-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#6B7280] text-[15px] leading-relaxed mb-8 font-medium">
                  {service.description}
                </p>
                <div className="mt-auto pt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 flex items-center">
                    Ver detalhes do serviço <ArrowUpRight className="ml-1.5 h-3 w-3" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
