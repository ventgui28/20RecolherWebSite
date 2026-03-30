"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Recycle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white">
      
      {/* Absolute Minimalism - No heavy background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.03)_0,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold uppercase tracking-wider mb-8"
        >
          <Recycle className="h-3.5 w-3.5" />
          <span>Sustentabilidade em Cantanhede</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h1-hero text-[#111111] mb-10"
        >
          Limpeza Profissional. <br />
          <span className="text-emerald-600">Gestão de Elite.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[#6B7280] text-lg md:text-2xl max-w-3xl mx-auto mb-14 font-medium leading-relaxed tracking-tight"
        >
          A 20 Recolher redefine o padrão de gestão de resíduos para empresas e entidades públicas que não aceitam nada menos do que a perfeição.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <Link
            href="/pedido-recolha"
            className="group inline-flex items-center justify-center px-10 py-4.5 bg-[#111111] text-white font-bold rounded-2xl hover:bg-emerald-600 transition-all duration-300 shadow-xl shadow-black/5"
          >
            Solicitar Recolha
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          
          <Link
            href="/servicos"
            className="px-10 py-4.5 bg-white border border-gray-200 text-[#111111] font-bold rounded-2xl hover:bg-gray-50 transition-all"
          >
            Conhecer Serviços
          </Link>
        </motion.div>

      </div>

      {/* Elegant minimalist scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-300 to-transparent" />
      </motion.div>

    </section>
  );
}
