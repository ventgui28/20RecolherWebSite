"use client";

import { Hero } from "@/components/hero";
import { ServicesSummary } from "@/components/services-summary";
import { ScrollReveal } from "@/components/scroll-reveal";
import { motion } from "framer-motion";
import { ArrowRight, Recycle, ShieldCheck, Factory, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white selection:bg-emerald-500 selection:text-white grain-overlay">
      <Hero />
      
      <ServicesSummary />

      {/* Luxury Commitment Section */}
      <section className="py-60 bg-emerald-50/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-technical opacity-40" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="lg:flex lg:items-center lg:gap-40">
            
            <ScrollReveal direction="right" className="lg:w-1/2 mb-32 lg:mb-0">
              <div className="flex items-center space-x-4 mb-10">
                <div className="w-12 h-px bg-emerald-600" />
                <span className="text-emerald-600 text-[10px] font-black uppercase tracking-[0.5em]">Padrões Globais</span>
              </div>
              
              <h3 className="text-5xl md:text-8xl font-black text-[#012F24] mb-16 tracking-[-0.06em] leading-[0.85] uppercase">
                ZERO <br /><span className="text-emerald-600">COMPROMISSO</span>
              </h3>
              
              <p className="text-[#065F46]/70 text-xl md:text-2xl mb-20 font-medium leading-relaxed max-w-xl tracking-tight">
                Na 20 Recolher, elevamos a gestão de resíduos a um nível de consultoria estratégica de elite.
              </p>
              
              <div className="grid grid-cols-1 gap-12 mb-20">
                {[
                  { icon: ShieldCheck, title: "Certificação de Elite", text: "Rastreabilidade total com validade jurídica internacional." },
                  { icon: Zap, title: "Execução Ágil", text: "Logística de precisão que se adapta ao seu ritmo industrial." },
                ].map((item, idx) => (
                  <ScrollReveal key={idx} delay={idx * 0.1} className="flex items-start space-x-8 group">
                    <div className="bg-white p-5 rounded-[2rem] border border-emerald-100 shadow-sm group-hover:border-emerald-300 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-emerald-500/10">
                      <item.icon className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="text-[#012F24] font-black text-xs tracking-[0.2em] uppercase mb-3">{item.title}</h4>
                      <p className="text-[#065F46]/70 text-lg font-medium leading-relaxed tracking-tight">{item.text}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <Link
                href="/sobre"
                className="inline-flex items-center font-black text-[#012F24] hover:text-emerald-600 transition-all group tracking-tighter text-sm uppercase"
              >
                Conheça o nosso legado industrial
                <ArrowRight className="ml-4 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="left" className="lg:w-1/2">
              <div className="relative">
                <div className="bento-card-emerald h-[600px] flex items-center justify-center relative overflow-hidden group shadow-2xl shadow-emerald-900/40">
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-400/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                   
                   <div className="text-center relative z-10 px-12">
                      <motion.div 
                        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="w-32 h-32 bg-emerald-400/10 rounded-[3rem] flex items-center justify-center mx-auto mb-12 border border-emerald-400/20 backdrop-blur-xl"
                      >
                        <Recycle className="h-12 w-12 text-emerald-300" />
                      </motion.div>
                      <h4 className="text-white font-black text-4xl md:text-5xl tracking-[-0.05em] leading-[1.1] mb-10 italic">
                        "Cuidamos do ambiente, <br />um resíduo de cada vez."
                      </h4>
                      <div className="flex justify-center space-x-2">
                        {[1,2,3].map(i => (
                          <div key={i} className="w-1.5 h-1.5 rounded-full bg-emerald-400/40" />
                        ))}
                      </div>
                   </div>

                   {/* Decorative Elements */}
                   <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
                </div>

                {/* Floating Info Tag */}
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  className="absolute -bottom-10 -left-10 glass p-8 rounded-[2.5rem] shadow-2xl border border-emerald-100/50 hidden md:block"
                >
                   <div className="flex items-center space-x-6">
                      <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                        <Factory className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="text-[10px] font-black text-[#065F46]/40 uppercase tracking-widest">Base de Operações</div>
                        <div className="text-lg font-black tracking-tight text-[#012F24]">Cantanhede, PT</div>
                      </div>
                   </div>
                </motion.div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Elite Call to Action */}
      <section className="py-60 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-emerald-100 to-transparent" />
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-12 border border-emerald-100"
            >
              <Zap className="h-8 w-8 text-emerald-600" />
            </motion.div>
            
            <h2 className="text-5xl md:text-8xl font-black text-[#012F24] mb-12 tracking-[-0.07em] leading-[0.85] uppercase">
              REDEFINE O TEU <br /><span className="text-emerald-600">IMPACTO.</span>
            </h2>
            
            <p className="text-[#065F46]/60 text-xl md:text-2xl mb-20 font-medium max-w-2xl mx-auto tracking-tight leading-relaxed">
              Junte-se à rede de parceiros que está a moldar a nova era da sustentabilidade industrial.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-10">
              <Link
                href="/pedido-recolha"
                className="btn-elite min-w-[280px] py-6 text-sm"
              >
                Solicitar Agendamento
              </Link>
              <Link
                href="/contactos"
                className="text-[12px] font-black uppercase tracking-[0.3em] text-[#012F24] hover:text-emerald-600 transition-colors border-b-2 border-emerald-100 hover:border-emerald-600 pb-2"
              >
                Falar com Consultor
              </Link>
            </div>
          </ScrollReveal>
        </div>
        
        {/* Subtle Background Mesh */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[radial-gradient(circle_at_50%_100%,_rgba(16,185,129,0.05),_transparent)] pointer-events-none" />
      </section>
    </div>
  );
}


