"use client";

import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock,
} from "lucide-react";

export function ContactosContent() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white selection:bg-emerald-500 selection:text-white">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-[0.2em] mb-8"
          >
            <span>Portal de Contacto</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black text-[#111111] tracking-tighter leading-[0.9] mb-12"
          >
            FALE COM O <br />
            <span className="text-emerald-600">CONCIERGE.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#6B7280] text-xl md:text-2xl font-medium leading-relaxed tracking-tight max-w-3xl"
          >
            Estamos prontos para desenhar a solução de gestão de resíduos que a sua empresa merece. Contacte-nos através dos nossos canais diretos ou utilize o formulário abaixo.
          </motion.p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-12 lg:gap-24">
            
            {/* Left: Contact Details */}
            <div className="lg:col-span-5 mb-24 lg:mb-0">
              <div className="space-y-16">
                
                {/* Channel: Email */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                      <Mail className="h-5 w-5" />
                    </div>
                    <h3 className="text-[#111111] font-bold text-xs uppercase tracking-widest">Email Corporativo</h3>
                  </div>
                  <a href="mailto:info@20recolher.pt" className="text-2xl md:text-3xl font-black text-[#111111] hover:text-emerald-600 transition-colors tracking-tighter">
                    info@20recolher.pt
                  </a>
                </motion.div>

                {/* Channel: Phone */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="group"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                      <Phone className="h-5 w-5" />
                    </div>
                    <h3 className="text-[#111111] font-bold text-xs uppercase tracking-widest">Atendimento Directo</h3>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <a href="tel:+351912858819" className="text-2xl md:text-3xl font-black text-[#111111] hover:text-emerald-600 transition-colors tracking-tighter">
                      +351 912 858 819
                    </a>
                    <a href="tel:+351910121412" className="text-xl font-bold text-[#6B7280] hover:text-emerald-600 transition-colors">
                      +351 910 121 412
                    </a>
                  </div>
                </motion.div>

                {/* Channel: Location */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="group"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <h3 className="text-[#111111] font-bold text-xs uppercase tracking-widest">Sede e Logística</h3>
                  </div>
                  <p className="text-xl md:text-2xl font-bold text-[#111111] leading-tight tracking-tight">
                    Zona Industrial de Cantanhede, <br />
                    Núcleo 1, Lote 2 Fração E <br />
                    3060-197 Cantanhede
                  </p>
                </motion.div>

                {/* Schedule */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="pt-8 border-t border-gray-100"
                >
                  <div className="flex items-center space-x-3 text-[#6B7280] font-medium text-sm">
                    <Clock className="h-4 w-4" />
                    <span>Segunda — Sexta: 09:00 - 18:00</span>
                  </div>
                </motion.div>

              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-[3rem] p-8 md:p-16 border border-gray-100 shadow-[0_30px_60px_rgba(0,0,0,0.02)]"
              >
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-[#111111]">Nome Completo</label>
                      <input type="text" placeholder="Ex: João Silva" className="w-full px-6 py-4 bg-white border-none rounded-2xl focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all placeholder:text-gray-200 font-medium" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-[#111111]">Email Profissional</label>
                      <input type="email" placeholder="nome@empresa.pt" className="w-full px-6 py-4 bg-white border-none rounded-2xl focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all placeholder:text-gray-200 font-medium" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#111111]">Assunto da Consulta</label>
                    <input type="text" placeholder="Ex: Gestão de REEE Industriais" className="w-full px-6 py-4 bg-white border-none rounded-2xl focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all placeholder:text-gray-200 font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#111111]">A sua Mensagem</label>
                    <textarea rows={6} placeholder="Descreva sucintamente a sua necessidade..." className="w-full px-6 py-4 bg-white border-none rounded-2xl focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all placeholder:text-gray-200 font-medium resize-none"></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-5 bg-[#111111] text-white font-bold rounded-2xl hover:bg-emerald-600 transition-all flex items-center justify-center space-x-3 text-sm uppercase tracking-[0.2em] shadow-2xl shadow-black/10"
                  >
                    <span>Enviar Mensagem</span>
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Visual Map Placeholder - Minimalist Elite */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative aspect-[21/9] bg-[#F9F9FB] rounded-[3rem] border border-gray-100 flex items-center justify-center group overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
             <div className="text-center">
                <div className="w-20 h-20 bg-white p-5 rounded-full shadow-2xl mx-auto mb-6 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-emerald-600" />
                </div>
                <h4 className="text-[#111111] font-black text-2xl tracking-tighter uppercase mb-2">Cantanhede Innovation Hub</h4>
                <p className="text-[#6B7280] font-medium text-sm tracking-widest uppercase">Zona Industrial, Núcleo 1, Lote 2</p>
             </div>
             <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="w-full h-px bg-black absolute top-1/3 -rotate-12" />
                <div className="w-full h-px bg-black absolute top-2/3 rotate-45" />
                <div className="h-full w-px bg-black absolute left-1/3 rotate-12" />
                <div className="h-full w-px bg-black absolute right-1/4 -rotate-45" />
             </div>
          </div>
        </div>
      </section>

    </div>
  );
}
