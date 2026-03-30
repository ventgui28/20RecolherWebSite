"use client";

import { motion } from "framer-motion";
import { 
  Award, 
  History, 
  ShieldCheck, 
  Recycle, 
  Users,
  Building2,
  MapPin,
  Heart
} from "lucide-react";
import Link from "next/link";

const milestones = [
  {
    year: "2013",
    title: "Prémio de Empreendedorismo",
    description: "Projeto distinguido com o prémio oficial da CIM-BM em Abril de 2013, lançando as bases da nossa visão.",
    icon: Award,
  },
  {
    year: "2014",
    title: "Nascimento da 20 Recolher",
    description: "Início das operações focadas na resposta eficiente à necessidade de tratamento de REEE.",
    icon: History,
  },
  {
    year: "2016 - 2022",
    title: "Consolidação em Tentúgal",
    description: "Seis anos de crescimento e rigor operacional, servindo o mercado empresarial e público.",
    icon: Building2,
  },
  {
    year: "2022",
    title: "Expansão para Cantanhede",
    description: "Mudança estratégica para a Zona Industrial de Cantanhede em Novembro, para instalações de elite.",
    icon: MapPin,
  },
];

export function SobreContent() {
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
              className="text-5xl md:text-8xl font-black text-[#111111] tracking-tighter leading-[0.9] mb-12 uppercase"
            >
              EXCELÊNCIA <br />
              <span className="text-emerald-600">DESDE 2014.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#6B7280] text-xl md:text-2xl font-medium leading-relaxed tracking-tight"
            >
              Somos uma equipa jovem e dinâmica licenciada pela <span className="text-[#111111] font-bold underline decoration-emerald-500/30 underline-offset-4">CCDRC</span>, dedicada à proteção do meio ambiente através da gestão rigorosa de resíduos.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-16 lg:mb-0 lg:sticky lg:top-32"
            >
              <h2 className="text-[#111111] text-3xl font-black tracking-tighter mb-8 uppercase">A Nossa Jornada.</h2>
              <div className="space-y-8 text-[#6B7280] text-lg font-medium leading-relaxed">
                <p>
                  Depois de 6 anos a operar em Tentúgal, mudámos em Novembro de 2022 para a <span className="text-[#111111]">Zona Industrial de Cantanhede</span>. Ocupamos agora um espaço maior e com melhores condições para dar resposta à crescente procura dos nossos serviços.
                </p>
                <p>
                  O nosso foco principal é a recolha e reciclagem de equipamentos Informáticos, Elétricos, Eletrónicos (REEE) e Consumíveis de impressão. Entendemos que o melhor destino é o tratamento correto, neutralizando substâncias perigosas para a saúde humana.
                </p>
                <p>
                  Trabalhamos sobretudo no mercado empresarial e no estado, sendo parceiros de confiança de <span className="text-[#111111]">Conservatórias, Tribunais e Escolas</span>.
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
                  <div className="text-emerald-600 font-black text-2xl tracking-tighter w-24 pt-1 italic shrink-0">
                    {milestone.year}
                  </div>
                  <div className="flex-1 pb-10 border-b border-gray-100 group-last:border-none">
                    <h3 className="text-[#111111] font-bold text-lg mb-2 uppercase">{milestone.title}</h3>
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

      {/* Philosophy Section - Transformações Sociais */}
      <section className="py-32 bg-[#F9F9FB] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-10 shadow-sm border border-gray-100"
            >
              <Heart className="h-7 w-7 text-emerald-600" />
            </motion.div>
            <h2 className="text-emerald-600 text-[11px] font-bold uppercase tracking-[0.4em] mb-8">Janelas de Oportunidade</h2>
            <p className="text-3xl md:text-5xl font-black text-[#111111] tracking-tighter leading-tight mb-12 italic">
              "PEQUENAS ATITUDES TÊM UM EFEITO MULTIPLICADOR, CAPAZ DE UMA MUDANÇA EM LARGA ESCALA."
            </p>
            <p className="text-[#6B7280] text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
              A 20 Recolher contribui para as transformações sociais através da responsabilidade ambiental. É fundamental para a nossa sobrevivência cuidar da saúde do ecossistema e preservar a saúde humana.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contacts Footer in About */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-black text-[#111111] tracking-tighter mb-6 uppercase">Prontos para agir?</h3>
              <p className="text-[#6B7280] font-medium text-lg mb-10 leading-relaxed">
                Contacte-nos para saber como podemos simplificar a gestão de resíduos da sua entidade com rigor e rapidez.
              </p>
              <div className="space-y-4">
                <a href="mailto:info@20recolher.pt" className="flex items-center space-x-4 text-[#111111] font-bold hover:text-emerald-600 transition-colors">
                  <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100">
                    <History className="h-5 w-5 text-emerald-600" />
                  </div>
                  <span>info@20recolher.pt</span>
                </a>
                <div className="flex items-center space-x-4 text-[#111111] font-bold">
                  <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100">
                    <Building2 className="h-5 w-5 text-emerald-600" />
                  </div>
                  <span>+351 912 858 819</span>
                </div>
              </div>
            </div>
            <div className="bg-[#111111] rounded-[3rem] p-12 text-center relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-white font-bold text-xl mb-8 uppercase tracking-tighter">Sede Cantanhede</h4>
                <p className="text-zinc-400 font-medium mb-10 text-sm">
                  Zona Industrial de Cantanhede, <br />
                  Núcleo 1, Lote 2 Fração E <br />
                  3060-197 Cantanhede
                </p>
                <Link href="/contactos" className="inline-block bg-emerald-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-emerald-700 transition-all text-xs uppercase tracking-widest">
                  Ver Mapa
                </Link>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-600/10 rounded-full blur-3xl -mr-16 -mt-16" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
