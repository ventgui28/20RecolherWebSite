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
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-emerald-600 text-[11px] font-bold uppercase tracking-[0.3em] mb-4"
          >
            Serviços de Excelência
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-[#111111] tracking-tighter"
          >
            A nossa abordagem à sustentabilidade.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, idx) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-4 tracking-tight">
                {service.title}
              </h3>
              <p className="text-[#6B7280] text-[15px] leading-relaxed mb-6 font-medium">
                {service.description}
              </p>
              <Link 
                href="/servicos" 
                className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#111111] group-hover:text-emerald-600 transition-colors"
              >
                Saber Mais <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
