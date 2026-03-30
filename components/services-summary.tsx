"use client";

import { motion } from "framer-motion";
import { Truck, ShieldCheck, RefreshCw, Factory, ArrowUpRight, Cpu } from "lucide-react";
import Link from "next/link";

export function ServicesSummary() {
  return (
    <section className="py-40 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-technical opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col mb-24">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-emerald-600 text-[10px] font-black uppercase tracking-[0.5em] mb-8"
          >
            Serviços de Alta Precisão
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-12"
          >
            <h3 className="text-5xl md:text-7xl font-black text-[#012F24] tracking-[-0.05em] leading-[0.9]">
              ECOSSISTEMA <br />DE VALORIZAÇÃO.
            </h3>
            <Link 
              href="/servicos" 
              className="btn-elite scale-90"
            >
              Explorar Catálogo <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[300px]">
          
          {/* Main Service - REEE */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-8 md:row-span-2 bento-card-emerald group flex flex-col justify-between"
          >
            <div className="flex justify-between items-start">
              <div className="bg-emerald-500/10 p-4 rounded-2xl border border-emerald-500/20">
                <Cpu className="h-8 w-8 text-emerald-400" />
              </div>
              <ArrowUpRight className="h-8 w-8 text-white/20 group-hover:text-emerald-400 transition-colors" />
            </div>
            <div>
              <h4 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter">GESTÃO DE REEE</h4>
              <p className="text-gray-400 text-lg md:text-xl max-w-xl font-medium leading-relaxed mb-8">
                Recuperação especializada de componentes eletrónicos com os mais altos padrões de segurança e certificação europeia.
              </p>
              <div className="flex space-x-4">
                <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-widest text-emerald-400">Segurança Total</span>
                <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-widest text-emerald-400">Certificado CCDRC</span>
              </div>
            </div>
          </motion.div>

          {/* Secondary - Conformidade */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 md:row-span-1 bento-card group flex flex-col justify-between"
          >
            <ShieldCheck className="h-8 w-8 text-emerald-600 mb-6" />
            <div>
              <h4 className="text-2xl font-black mb-4 tracking-tighter">CONFORMIDADE</h4>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">Garantia absoluta de destino final com documentação digital em tempo real.</p>
            </div>
          </motion.div>

          {/* Secondary - Economia Circular */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-4 md:row-span-1 bento-card group flex flex-col justify-between bg-gray-50/50"
          >
            <RefreshCw className="h-8 w-8 text-emerald-600 mb-6" />
            <div>
              <h4 className="text-2xl font-black mb-4 tracking-tighter">CIRCULARIDADE</h4>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">Maximizamos o ciclo de vida dos seus recursos industriais.</p>
            </div>
          </motion.div>

          {/* Full Width - Indústria */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-12 md:row-span-1 bento-card group flex items-center justify-between border-emerald-100"
          >
            <div className="flex items-center space-x-10">
              <div className="bg-emerald-600 p-6 rounded-3xl">
                 <Truck className="h-10 w-10 text-white" />
              </div>
              <div>
                 <h4 className="text-3xl font-black mb-2 tracking-tighter uppercase">Logística Dedicada</h4>
                 <p className="text-gray-500 font-medium tracking-tight">Frota especializada para operações industriais de grande escala em Cantanhede.</p>
              </div>
            </div>
            <div className="hidden md:block">
               <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-16 h-16 rounded-2xl bg-white border border-black/5 shadow-sm" />
                  ))}
               </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

