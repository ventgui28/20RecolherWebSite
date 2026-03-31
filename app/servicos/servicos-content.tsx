"use client";

import { motion } from "framer-motion";
import { 
  Truck, 
  ShieldCheck, 
  RefreshCw, 
  Factory, 
  Printer, 
  Cpu, 
  ArrowRight,
  ClipboardCheck,
  Zap,
  ArrowUpRight
} from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";

export function ServicosContent() {
  return (
    <div className="bg-transparent selection:bg-green-500 selection:text-white grain-overlay pt-32">
      
      {/* 08. Catálogo de Valorização - Premium Interactive Grid */}
      <section className="py-40 bg-transparent overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-technical opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12">
            <div className="max-w-3xl">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-8xl font-black text-black tracking-[-0.07em] leading-[0.85] uppercase"
              >
                O QUE <br /><span className="text-green-600">RECOLHEMOS.</span>
              </motion.p>
            </div>
            <div className="hidden md:block pb-4">
              {/* CORREÇÃO: Gray-400 para Gray-700 (Contraste alto em fundo claro) */}
              <p className="text-gray-700 font-semibold text-right max-w-[240px] leading-relaxed italic">
                Soluções certificadas para todos os fluxos de resíduos industriais e tecnológicos.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Category: Hardware & IT */}
            <ScrollReveal className="group">
              <div className="h-full p-10 rounded-[3rem] bg-white border border-green-500/20 transition-all duration-700 group-hover:shadow-[0_40px_100px_-20px_rgba(16,185,129,0.1)] group-hover:border-green-300">
                <div className="flex items-center space-x-4 mb-12">
                  <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center shadow-lg">
                    <Cpu className="h-6 w-6 text-green-400" />
                  </div>
                  <h4 className="text-xl font-black text-black uppercase tracking-tighter">Hardware & IT</h4>
                </div>
                <ul className="space-y-6">
                  {[
                    "Computadores e Servidores",
                    "Impressoras e Multifunções",
                    "Monitores e Televisões",
                    "Telemóveis e Telefones",
                    "UPS, Routers e Centrais",
                    "Componentes Informáticos"
                  ].map((item) => (
                    <li key={item} className="flex items-center space-x-4 group/item">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 transition-all duration-500 group-hover/item:scale-150 group-hover/item:shadow-[0_0_10px_#34bf49]" />
                      {/* CORREÇÃO: Aumentado contraste do texto dos itens */}
                      <span className="text-black/80 font-bold text-lg transition-colors group-hover/item:text-green-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Category: Equipamentos & Consumíveis */}
            <ScrollReveal delay={0.1} className="group">
              <div className="h-full p-10 rounded-[3rem] bg-white border border-green-500/20 transition-all duration-700 group-hover:shadow-[0_40px_100px_-20px_rgba(16,185,129,0.1)] group-hover:border-green-300">
                <div className="flex items-center space-x-4 mb-12">
                  <div className="w-12 h-12 bg-green-600 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/20">
                    <Printer className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl font-black text-black uppercase tracking-tighter">Equipamentos</h4>
                </div>
                <ul className="space-y-6">
                  {[
                    "Eletrodomésticos e Frio",
                    "Ar Condicionado",
                    "Ferramentas Elétricas",
                    "Tinteiros e Toners",
                    "Baterias e Cabos Elétricos",
                    "Papel, Cartão e Plástico"
                  ].map((item) => (
                    <li key={item} className="flex items-center space-x-4 group/item">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 transition-all duration-500 group-hover/item:scale-150 group-hover/item:shadow-[0_0_10px_#34bf49]" />
                      <span className="text-black/80 font-bold text-lg transition-colors group-hover/item:text-green-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Category: Metais & Ligas */}
            <ScrollReveal delay={0.2} className="group">
              <div className="bento-card-green h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="flex items-center space-x-4 mb-12 relative z-10">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
                    <Factory className="h-6 w-6 text-green-400" />
                  </div>
                  <h4 className="text-xl font-black text-white uppercase tracking-tighter">Metais & Ligas</h4>
                </div>
                <ul className="space-y-6 relative z-10">
                  {[
                    "Ferro e Aço Inox",
                    "Cobre e Alumínio",
                    "Inox e Outras Ligas",
                    "Cabos Elétricos",
                    "Estruturas Metálicas"
                  ].map((item) => (
                    <li key={item} className="flex items-center space-x-4 group/item">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 transition-all duration-500 group-hover/item:scale-150 group-hover/item:shadow-[0_0_10px_#34D399]" />
                      {/* CORREÇÃO: Green-100/60 para White (Fundo Escuro exige texto claro forte) */}
                      <span className="text-white font-bold text-lg transition-colors group-hover/item:text-green-400">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-20 pt-10 border-t border-white/10 relative z-10">
                  <p className="text-[10px] font-black text-green-400 uppercase tracking-[0.3em] mb-4">Certificação Total</p>
                  {/* CORREÇÃO: White/40 para White/90 */}
                  <p className="text-white/90 text-sm font-semibold leading-relaxed">Garantimos a valorização de 100% dos metais recolhidos.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-40 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* 01. REEE e Metais */}
            <ScrollReveal className="md:col-span-8">
              <div className="bento-card-green h-full flex flex-col justify-between group">
                <div className="flex justify-between items-start mb-16">
                  <div className="bg-white/10 p-6 rounded-3xl border border-white/20">
                    <Cpu className="h-10 w-10 text-green-400" />
                  </div>
                  {/* CORREÇÃO: White/10 para White/30 (Ainda discreto mas visível) */}
                  <span className="text-4xl font-black text-white/30">01</span>
                </div>
                <div>
                  <h3 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase leading-[0.9] text-white">Recolha REEE&apos;s <br />e Metais</h3>
                  {/* CORREÇÃO: Descrição de alta legibilidade em fundo escuro */}
                  <p className="text-white/90 text-lg font-semibold leading-relaxed mb-8 max-w-xl">
                    Recolha e valorização de equipamentos Informáticos, Eletrónicos e Eletrodomésticos (EEE) e diversos metais.
                  </p>
                  <Link href="/pedido-recolha" className="btn-elite scale-90 w-fit">
                    Marcar Recolha
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* 03. Toners Vazios */}
            <ScrollReveal className="md:col-span-4">
              <div className="bento-card h-full flex flex-col justify-between group">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center border border-green-100 shadow-sm">
                    <Printer className="h-8 w-8 text-green-600" />
                  </div>
                  <span className="text-2xl font-black text-black/20">03</span>
                </div>
                <div>
                  <h3 className="text-3xl font-black text-black mb-4 tracking-tighter uppercase">Toners Vazios</h3>
                  <p className="text-black/90 font-bold leading-relaxed">
                    Recolha e reciclagem de tinteiros e toners vazios com foco ambiental.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* 02. Componentes */}
            <ScrollReveal className="md:col-span-4">
              <div className="bento-card h-full flex flex-col justify-between group">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-16 h-16 bg-green-50/30 rounded-2xl flex items-center justify-center border border-green-100/20 shadow-sm">
                    <Zap className="h-8 w-8 text-green-600" />
                  </div>
                  <span className="text-2xl font-black text-black/20">02</span>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-black mb-4 tracking-tighter uppercase leading-tight">Componentes <br />Informáticos</h3>
                  <p className="text-black/90 font-bold leading-relaxed text-sm">
                    Valorização de placas, processadores, memórias e discos em quantidade.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* 05. Abate Fiscal */}
            <ScrollReveal className="md:col-span-8">
              <div className="bento-card h-full flex flex-col md:flex-row gap-12 group overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-green-50/30 -skew-x-12 translate-x-1/2 pointer-events-none" />
                <div className="md:w-3/5 relative z-10 flex flex-col justify-between">
                  <div>
                    <div className="w-20 h-20 bg-black rounded-3xl flex items-center justify-center mb-12 shadow-2xl">
                      <ClipboardCheck className="h-10 w-10 text-green-400" />
                    </div>
                    <h3 className="text-4xl font-black text-black mb-6 tracking-tighter uppercase leading-[0.9]">Abate Fiscal e Imobilizado</h3>
                    {/* CORREÇÃO: Gray-500 para Gray-800 */}
                    <p className="text-gray-800 text-lg font-bold leading-relaxed mb-8">
                      Efetuamos abates fiscais, entregamos declaração de abate e emitimos E-Gar para comprovar a reciclagem.
                    </p>
                  </div>
                  <span className="text-5xl font-black text-black/20">05</span>
                </div>
                <div className="md:w-2/5 flex flex-col justify-center space-y-4 relative z-10">
                   {["Declaração de Abate", "Emissão E-Gar", "Conformidade Total"].map((text) => (
                     <div key={text} className="p-5 bg-white rounded-2xl border border-green-200 shadow-xl flex items-center space-x-4">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span className="text-[11px] font-black text-black uppercase tracking-widest">{text}</span>
                     </div>
                   ))}
                </div>
              </div>
            </ScrollReveal>

            {/* 04. Toners Fora Validade */}
            <ScrollReveal className="md:col-span-4">
              <div className="bento-card h-full flex flex-col justify-between group">
                <div className="flex justify-between items-start mb-10">
                  <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center">
                    <ShieldCheck className="h-6 w-6 text-green-600" />
                  </div>
                  <span className="text-2xl font-black text-black/20">04</span>
                </div>
                <h3 className="text-2xl font-black text-black mb-4 uppercase tracking-tighter">Toners Originais <br />Fora de Validade</h3>
                <p className="text-gray-800 text-sm font-bold">Recolha e valorização de consumíveis cheios originais.</p>
              </div>
            </ScrollReveal>

            {/* 06. Consultadoria Ambiental */}
            <ScrollReveal className="md:col-span-4">
              <div className="bento-card h-full flex flex-col justify-between group">
                <div className="flex justify-between items-start mb-10">
                  <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center">
                    <Factory className="h-6 w-6 text-green-600" />
                  </div>
                  <span className="text-2xl font-black text-black/20">06</span>
                </div>
                <h3 className="text-2xl font-black text-black mb-4 uppercase tracking-tighter">Consultadoria Ambiental</h3>
                <p className="text-gray-800 text-sm font-bold">Apoio no Siliamb, emissão de E-gar e suporte legal especializado.</p>
              </div>
            </ScrollReveal>

            {/* 07. Destruição de Dados */}
            <ScrollReveal className="md:col-span-4">
              <div className="bento-card-green h-full flex flex-col justify-between group border-none shadow-[0_30px_60px_-15px_rgba(22,163,74,0.4)]">
                <div className="flex justify-between items-start mb-10">
                  <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center">
                    <ShieldCheck className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-2xl font-black text-white/30">07</span>
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter text-white">Destruição de Discos</h3>
                  <p className="text-white/95 text-sm font-bold">Destruição certificada no cliente ou nas nossas instalações.</p>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Process Simple Steps (The 20 Recolher Way) - High-End Overhaul */}
      <section className="py-60 bg-transparent relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-technical opacity-[0.03] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col mb-40 text-center items-center">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-green-600 text-[11px] font-black uppercase tracking-[0.5em] mb-10"
            >
              A Nossa Operação
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black text-black tracking-[-0.07em] leading-[0.85] uppercase max-w-4xl"
            >
              MÉTODO DE <br /><span className="text-green-600">ALTA PRECISÃO.</span>
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {[
              { id: '01', title: 'Agendamento', text: 'Solicita a recolha através do nosso concierge digital de luxo.', icon: Zap },
              { id: '02', title: 'Recolha', text: 'Equipas de elite deslocam-se à sua unidade com pontualidade suíça.', icon: Truck },
              { id: '03', title: 'Valorização', text: 'Triagem técnica avançada no nosso centro de excelência industrial.', icon: RefreshCw },
              { id: '04', title: 'Garantia', text: 'Emissão imediata de certificados oficiais de destino final.', icon: ShieldCheck },
            ].map((step, idx) => (
              <ScrollReveal 
                key={step.id} 
                delay={idx * 0.1}
                className="relative group"
              >
                <div className="p-10 rounded-[2.5rem] bg-white border border-green-100 transition-all duration-700 hover:border-green-500 hover:shadow-[0_40px_100px_-20px_rgba(16,185,129,0.1)] h-full">
                  <div className="flex flex-col">
                    <div className="flex justify-between items-start mb-16">
                      <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center group-hover:bg-green-500 transition-all duration-700">
                        <step.icon className="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-700" />
                      </div>
                      {/* CORREÇÃO: Green-100/50 em fundo branco era invisível. Alterado para Black/10 */}
                      <span className="text-5xl font-black text-black/10 group-hover:text-green-600/20 transition-colors">
                        {step.id}
                      </span>
                    </div>
                    
                    <h4 className="text-black font-black text-2xl mb-6 tracking-tighter uppercase">
                      {step.title}
                    </h4>
                    {/* CORREÇÃO: Aumentado contraste da descrição do passo */}
                    <p className="text-black/80 font-bold text-sm leading-relaxed tracking-tight">
                      {step.text}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-60 bg-transparent relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-5xl md:text-8xl font-black text-black mb-16 tracking-[-0.07em] leading-[0.85] uppercase">O TEU PARCEIRO <br />DE <span className="text-green-600">CONFIANÇA.</span></h2>
            {/* CORREÇÃO: Gray-500 para Gray-800 */}
            <p className="text-gray-800 text-xl md:text-2xl font-bold mb-20 tracking-tight leading-relaxed max-w-2xl mx-auto">
              Garanta a proteção do ambiente e a conformidade da sua empresa com a 20 Recolher.
            </p>
            <div className="flex justify-center">
              <Link
                href="/pedido-recolha"
                className="btn-elite px-16 py-7 text-[13px]"
              >
                Solicitar Orçamento Grátis
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
