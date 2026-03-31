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
    <div className="bg-transparent selection:bg-green-500 selection:text-white">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-[0.2em] mb-8"
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
            <span className="text-green-600">CONCIERGE.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-800 text-xl md:text-2xl font-bold leading-relaxed tracking-tight max-w-3xl"
          >
            Estamos prontos para desenhar a solução de gestão de resíduos que a sua empresa merece. Contacte-nos através dos nossos canais diretos ou utilize o formulário abaixo.
          </motion.p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="pb-32 bg-transparent">
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
                    <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                      <Mail className="h-5 w-5" />
                    </div>
                    <h3 className="text-[#111111] font-black text-xs uppercase tracking-widest">Email Corporativo</h3>
                  </div>
                  <a href="mailto:info@20recolher.pt" className="text-2xl md:text-3xl font-black text-[#111111] hover:text-green-600 transition-colors tracking-tighter">
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
                    <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                      <Phone className="h-5 w-5" />
                    </div>
                    <h3 className="text-[#111111] font-black text-xs uppercase tracking-widest">Atendimento Directo</h3>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <a href="tel:+351912858819" className="text-2xl md:text-3xl font-black text-[#111111] hover:text-green-600 transition-colors tracking-tighter">
                      +351 912 858 819
                    </a>
                    <a href="tel:+351910121412" className="text-xl font-bold text-gray-800 hover:text-green-600 transition-colors">
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
                    <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <h3 className="text-[#111111] font-black text-xs uppercase tracking-widest">Sede e Logística</h3>
                  </div>
                  <p className="text-xl md:text-2xl font-black text-[#111111] leading-tight tracking-tight">
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
                  <div className="flex items-center space-x-3 text-gray-800 font-bold text-sm">
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
                className="bg-white rounded-[3rem] p-8 md:p-16 border border-gray-100 shadow-[0_30px_60px_rgba(0,0,0,0.02)]"
              >
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-[#111111]">Nome Completo</label>
                      <input type="text" placeholder="Ex: João Silva" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-green-500/20 outline-none transition-all placeholder:text-gray-400 font-medium" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-[#111111]">Email Profissional</label>
                      <input type="email" placeholder="nome@empresa.pt" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-green-500/20 outline-none transition-all placeholder:text-gray-400 font-medium" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#111111]">Assunto da Consulta</label>
                    <input type="text" placeholder="Ex: Gestão de REEE Industriais" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-green-500/20 outline-none transition-all placeholder:text-gray-400 font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#111111]">A sua Mensagem</label>
                    <textarea rows={6} placeholder="Descreva sucintamente a sua necessidade..." className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-green-500/20 outline-none transition-all placeholder:text-gray-400 font-medium resize-none"></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-5 bg-[#111111] text-white font-bold rounded-2xl hover:bg-green-600 transition-all flex items-center justify-center space-x-3 text-sm uppercase tracking-[0.2em] shadow-2xl shadow-black/10"
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

      {/* Interactive Map Section - Ultra Luxury Precision */}
      <section className="pb-32 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative w-full h-[600px] rounded-[3.5rem] overflow-hidden border border-gray-100 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] bg-white/10 backdrop-blur-md"
          >
            {/* Elegant Map Controls & Info Card - Restored */}
            <div className="absolute top-10 left-10 z-20 pointer-events-none md:pointer-events-auto">
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-white/90 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white shadow-2xl max-w-sm"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-green-600">Sede Global</span>
                </div>
                <h4 className="text-2xl font-black text-[#111111] tracking-tighter mb-2 leading-none uppercase">
                  Zona Industrial <br /> de Cantanhede
                </h4>
                <p className="text-gray-800 text-sm font-bold mb-8 leading-relaxed">
                  Núcleo 1, Lote 2 — Fração E <br />
                  3060-197 Cantanhede, Portugal
                </p>
                <div className="flex flex-col space-y-3">
                  <a 
                    href="https://www.google.com/maps/dir/?api=1&destination=20+Recolher-Gestão+de+Residuos,+Lda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full px-6 py-4 bg-[#111111] text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-green-600 transition-all group/btn"
                  >
                    <span>Iniciar Navegação</span>
                    <Send className="h-4 w-4 transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* The Map Core - Official Business Location (Pure View / UI Clipped) */}
            <div className="absolute inset-0 overflow-hidden rounded-[3.5rem]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d822.4634702222418!2d-8.605591399999987!3d40.354710000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2251ed8227a19f%3A0x9437f3302c9088ac!2s20%20Recolher-Gest%C3%A3o%20de%20Residuos%2C%20Lda!5e1!3m2!1spt-PT!2spt!4v1774949377299!5m2!1spt-PT!2spt" 
                width="100%" 
                height="100%" 
                style={{ 
                  border: 0, 
                  filter: 'contrast(1.05) brightness(1)',
                  width: 'calc(100% + 400px)',
                  height: 'calc(100% + 400px)',
                  position: 'absolute',
                  top: '-200px',
                  left: '-200px'
                }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Oficial 20 Recolher"
              />
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

