"use client";

import { motion } from "framer-motion";
import { 
  Award, 
  History, 
  MapPin, 
  ShieldCheck, 
  Recycle, 
  Users,
  Building2,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const milestones = [
  {
    year: "2013",
    title: "Prémio de Empreendedorismo",
    description: "Reconhecimento oficial pela CIM-BM em Abril de 2013, lançando as bases para a nossa visão.",
    icon: Award,
  },
  {
    year: "2014",
    title: "Fundação oficial em Cantanhede",
    description: "Início das operações com foco na recolha responsável de resíduos eletrónicos (REEE).",
    icon: History,
  },
  {
    year: "2022",
    title: "Expansão para a Zona Industrial",
    description: "Mudança para novas instalações de elite, reforçando o compromisso com a sustentabilidade.",
    icon: Building2,
  },
];

const values = [
  {
    title: "Responsabilidade Ambiental",
    text: "Asseguramos o correto tratamento e encaminhamento dos resíduos para proteger o meio ambiente e a saúde pública.",
    icon: Recycle,
  },
  {
    title: "Rigor e Conformidade",
    text: "Cumprimos todas as normas legais e boas práticas do setor com total transparência e segurança jurídica.",
    icon: ShieldCheck,
  },
  {
    title: "Proximidade e Eficiência",
    text: "Serviço ágil e personalizado, criando relações de confiança duradouras com a nossa comunidade e clientes.",
    icon: Users,
  },
];

export default function SobreNos() {
  return (
    <div className="bg-white selection:bg-emerald-500 selection:text-white">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-[0.2em] mb-8"
            >
              <span>O Nosso Legado</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-black text-[#111111] tracking-tighter leading-[0.9] mb-12"
            >
              EXCELÊNCIA <br />
              <span className="text-emerald-600">DESDE A ORIGEM.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#6B7280] text-xl md:text-2xl font-medium leading-relaxed tracking-tight"
            >
              Nascida da paixão pela sustentabilidade e reconhecida pelo empreendedorismo, a 20 Recolher é a resposta de elite para a gestão de resíduos em Cantanhede.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Narrative Section - The Award and Growth */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-16 lg:mb-0"
            >
              <h2 className="text-[#111111] text-3xl font-black tracking-tighter mb-8 uppercase">A Nossa Jornada.</h2>
              <div className="space-y-8">
                <p className="text-[#6B7280] text-lg font-medium leading-relaxed">
                  A nossa história começou com um reconhecimento de prestígio. Em Abril de 2013, fomos distinguidos com o prémio de empreendedorismo da CIM-BM, o que nos deu o impulso necessário para fundar a 20 Recolher em 2014.
                </p>
                <p className="text-[#6B7280] text-lg font-medium leading-relaxed">
                  Desde então, a nossa missão tem sido clara: dar uma resposta eficiente e responsável à crescente necessidade de tratamento de resíduos informáticos, elétricos e eletrónicos (REEE) e consumíveis de impressão.
                </p>
                <p className="text-[#6B7280] text-lg font-medium leading-relaxed">
                  Em Novembro de 2022, atingimos um novo patamar. Mudámos para a Zona Industrial de Cantanhede, para instalações de elite preparadas para o futuro da Economia Circular.
                </p>
              </div>
            </motion.div>

            {/* Visual Timeline */}
            <div className="space-y-12">
              {milestones.map((milestone, idx) => (
                <motion.div 
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-6 group"
                >
                  <div className="text-emerald-600 font-black text-2xl tracking-tighter w-20 pt-1 italic">
                    {milestone.year}
                  </div>
                  <div className="flex-1 pb-10 border-b border-gray-100 group-last:border-none">
                    <h3 className="text-[#111111] font-bold text-lg mb-2">{milestone.title}</h3>
                    <p className="text-[#6B7280] text-[15px] font-medium leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The 3 Pillars Section */}
      <section className="py-32 bg-[#F9F9FB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-emerald-600 text-[11px] font-bold uppercase tracking-[0.4em] mb-4">Os Nossos Pilares</h2>
            <p className="text-4xl md:text-5xl font-black text-[#111111] tracking-tighter">Valores que definem a nossa Excelência.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, idx) => (
              <motion.div 
                key={value.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-12 rounded-[2.5rem] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] text-center group"
              >
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-10 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-[#111111] mb-6 tracking-tight">{value.title}</h3>
                <p className="text-[#6B7280] font-medium leading-relaxed text-[15px]">
                  {value.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Connection */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#111111] rounded-[3.5rem] p-12 md:p-24 text-center overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-[100px] -mr-48 -mt-48" />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-emerald-500 text-[11px] font-bold uppercase tracking-[0.4em] mb-8">Ligação à Comunidade</h2>
              <p className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-12 max-w-4xl mx-auto leading-tight">
                Um parceiro local com <br />impacto ambiental global.
              </p>
              <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto mb-16">
                Desde escolas a tribunais e conservatórias, servimos com rigor e proximidade todas as entidades em Cantanhede e arredores, garantindo um futuro mais limpo para a nossa região.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                <Link
                  href="/pedido-recolha"
                  className="bg-emerald-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-emerald-700 transition-all text-sm uppercase tracking-widest"
                >
                  Solicitar Serviço
                </Link>
                <Link
                  href="/contactos"
                  className="bg-zinc-900 text-white border border-zinc-800 px-10 py-4 rounded-2xl font-bold hover:bg-zinc-800 transition-all text-sm uppercase tracking-widest"
                >
                  Contactar Equipa
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
