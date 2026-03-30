"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Recycle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[110vh] flex items-center justify-center pt-20 overflow-hidden bg-white bg-grid-technical">
      
      {/* Deep Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-emerald-50/10 to-transparent" />

      {/* Hero Visual Composition */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        
        <div className="text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-100/50 border border-emerald-200/50 text-emerald-800 text-[11px] font-black uppercase tracking-[0.3em] mb-10 backdrop-blur-md"
          >
            <Recycle className="h-4 w-4 text-emerald-600" />
            <span>Futuro Sustentável em Cantanhede</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-black text-elite mb-12 leading-[0.9] tracking-tighter"
          >
            A ENERGIA DA <br />
            <span className="text-emerald-600">RECLICAGEM.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[#64748B] text-xl md:text-2xl max-w-xl mb-16 font-medium leading-relaxed tracking-tight"
          >
            Lideramos a transição para uma economia circular de elite, transformando resíduos em valor para a sua empresa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8"
          >
            <Link href="/pedido-recolha" className="btn-steel group">
              Solicitar Recolha
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link
              href="/servicos"
              className="text-sm font-black uppercase tracking-widest text-[#111111] hover:text-emerald-600 transition-colors border-b-2 border-black/5 hover:border-emerald-600 pb-1"
            >
              Conhecer Serviços
            </Link>
          </motion.div>
        </div>

        {/* 3D Visual Section */}
        <div className="hidden lg:flex items-center justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative"
          >
            {/* The Sphere */}
            <div className="crystal-sphere">
              <div className="crystal-energy-core" />
              <div className="absolute inset-0 rounded-full border border-white/20 shadow-inner" />
            </div>

            {/* Orbiting Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-40px] border border-emerald-200/30 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-80px] border border-emerald-100/20 rounded-full"
            />
          </motion.div>

          {/* Glowing Accents */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-400/10 blur-[120px] -z-10 rounded-full" />
        </div>

      </div>

      {/* Luxury Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#111111]/30 mb-4">Discover More</span>
        <div className="w-px h-16 bg-gradient-to-b from-emerald-600 to-transparent" />
      </motion.div>

    </section>
  );
}
