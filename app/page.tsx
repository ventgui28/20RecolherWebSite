"use client";

import { Hero } from "@/components/hero";
import { ServicesSummary } from "@/components/services-summary";
import { motion } from "framer-motion";
import { ArrowRight, Recycle, ShieldCheck, Factory } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white selection:bg-emerald-500 selection:text-white">
      <Hero />
      
      <ServicesSummary />

      {/* Modern Commitment Section - High Contrast Minimalist */}
      <section className="py-40 bg-[#F9F9FB] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:flex lg:items-center lg:gap-32">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2 mb-20 lg:mb-0"
            >
              <h2 className="text-emerald-600 text-[11px] font-bold uppercase tracking-[0.4em] mb-8">Padrões Globais</h2>
              <h3 className="text-4xl md:text-6xl font-black text-[#111111] mb-12 tracking-tighter leading-tight">
                COMPROMISSO <br />SEM COMPROMISSOS.
              </h3>
              <p className="text-[#6B7280] text-lg md:text-xl mb-12 font-medium leading-relaxed max-w-xl">
                Na 20 Recolher, elevamos a gestão de resíduos a um nível de consultoria estratégica. 
                Garantimos conformidade absoluta e documentação impecável para empresas que valorizam a excelência.
              </p>
              
              <div className="space-y-10 mb-14">
                {[
                  { icon: ShieldCheck, title: "Certificação Oficial", text: "Destino final certificado com rigor jurídico." },
                  { icon: Recycle, title: "Economia Circular", text: "Valorização máxima dos componentes reciclados." },
                  { icon: Factory, title: "Logística Industrial", text: "Operações dedicadas em Cantanhede e região." },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-6">
                    <div className="mt-1 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                      <item.icon className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="text-[#111111] font-bold text-sm tracking-widest uppercase mb-1">{item.title}</h4>
                      <p className="text-[#6B7280] text-[15px] font-medium leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/sobre"
                className="inline-flex items-center font-bold text-[#111111] hover:text-emerald-600 transition-all group tracking-tighter text-sm"
              >
                Conheça a nossa história e missão
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="relative group">
                <div className="relative aspect-square bg-white rounded-[4rem] overflow-hidden border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] flex items-center justify-center p-20">
                   <div className="text-center">
                      <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-10">
                        <Recycle className="h-8 w-8 text-emerald-600" />
                      </div>
                      <p className="text-[#111111] font-bold text-2xl tracking-tighter italic mb-8">"Cuidamos do ambiente, <br />um resíduo de cada vez."</p>
                      <div className="mt-12 w-px h-24 bg-gradient-to-b from-emerald-600 to-transparent mx-auto" />
                   </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Final Minimalist Call to Action */}
      <section className="py-40 bg-white relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-[#111111] mb-10 tracking-tighter leading-tight">PREPARADO PARA <br />OTIMIZAR A SUA GESTÃO?</h2>
            <p className="text-[#6B7280] text-xl md:text-2xl mb-14 font-medium max-w-2xl mx-auto tracking-tight">
              Fale com os nossos especialistas e solicite um agendamento de recolha profissional para a sua empresa.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <Link
                href="/pedido-recolha"
                className="bg-[#111111] text-white px-12 py-5 rounded-2xl font-bold hover:bg-emerald-600 transition-all shadow-xl shadow-black/5 text-sm uppercase tracking-widest"
              >
                Solicitar Recolha
              </Link>
              <Link
                href="/contactos"
                className="bg-white border border-gray-200 text-[#111111] px-12 py-5 rounded-2xl font-bold hover:bg-gray-50 transition-all text-sm uppercase tracking-widest"
              >
                Falar com Especialista
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
