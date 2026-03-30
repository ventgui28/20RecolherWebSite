"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Recycle, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-white">
      
      {/* Background Architectural Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-technical opacity-40" />
        <div className="absolute top-[-10%] right-[-10%] w-[70vw] h-[70vw] bg-emerald-50/50 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-emerald-50/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center space-x-3 px-5 py-2 rounded-full bg-[#10B981] text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-12 shadow-lg shadow-emerald-500/20"
            >
              <Sparkles className="h-3 w-3 text-emerald-200" />
              <span>Liderança em Economia Circular</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="h1-hero text-[#012F24] mb-12"
            >
              O FUTURO <br />
                <span className="text-emerald-600">REUTILIZÁVEL.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[#065F46]/70 text-xl md:text-3xl max-w-2xl mb-16 font-medium leading-[1.4] tracking-tight"
            >
              Transformamos resíduos industriais em ativos estratégicos através de processos de alta precisão e conformidade global.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-10"
            >
              <Link href="/pedido-recolha" className="btn-elite group min-w-[240px]">
                Agendar Recolha
                <ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link
                href="/servicos"
                className="text-[12px] font-black uppercase tracking-[0.2em] text-[#012F24] hover:text-emerald-600 transition-colors flex items-center group"
              >
                Explorar Ecossistema
                <div className="ml-4 w-12 h-px bg-emerald-600 group-hover:w-16 transition-all" />
              </Link>
            </motion.div>
          </div>

          <div className="lg:col-span-4 hidden lg:block relative">
             <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
               className="relative"
             >
                {/* Visual Glass Orb */}
                <div className="w-[450px] h-[450px] rounded-[4rem] bg-gradient-to-br from-white to-emerald-50 border border-emerald-100/50 shadow-[0_100px_80px_rgba(16,185,129,0.02)] flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-grid-technical opacity-20" />
                  <motion.div 
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-64 h-64 border-2 border-emerald-500/20 rounded-full flex items-center justify-center"
                  >
                    <div className="w-48 h-48 border border-emerald-500/10 rounded-full flex items-center justify-center bg-emerald-500/5">
                       <Recycle className="h-20 w-20 text-emerald-600/30" />
                    </div>
                  </motion.div>
                  
                  {/* Floating Glass Cards inside the Hero visual */}
                  <motion.div 
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-12 right-12 glass px-6 py-4 rounded-2xl shadow-xl border border-emerald-100"
                  >
                    <div className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Efficiency</div>
                    <div className="text-xl font-black text-[#012F24]">99.8%</div>
                  </motion.div>

                  <motion.div 
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-12 left-12 glass px-6 py-4 rounded-2xl shadow-xl border border-emerald-100"
                  >
                    <div className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Compliance</div>
                    <div className="text-xl font-black text-[#012F24]">Global</div>
                  </motion.div>
                </div>
             </motion.div>
          </div>
        </div>
      </div>

      {/* Luxury Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-emerald-600 to-transparent opacity-40" />
        <span className="mt-4 text-[9px] font-bold uppercase tracking-[0.5em] text-[#065F46]/40">Scroll to Explore</span>
      </motion.div>

    </section>
  );
}


