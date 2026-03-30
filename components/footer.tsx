import Link from "next/link";
import { Recycle, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-500 py-32 border-t border-white/[0.03] mt-auto relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20">
          
          {/* Brand Identity */}
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center space-x-3 mb-10 group">
              <div className="bg-emerald-600 p-2.5 rounded-xl transition-transform duration-500 group-hover:rotate-[15deg]">
                <Recycle className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-black tracking-[-0.05em] text-white">20 RECOLHER</span>
            </Link>
            <p className="text-lg leading-relaxed max-w-sm mb-12 font-medium tracking-tight">
              Liderança em economia circular e gestão de resíduos de elite. 
              Transformamos passivos industriais em valor sustentável para a sua organização.
            </p>
            <div className="flex space-x-8">
               <div className="w-px h-12 bg-emerald-600/30" />
               <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 leading-relaxed">
                  Licenciamento CCDRC <br />Autoridade Central de Resíduos
               </p>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-2">
            <h3 className="text-white text-[10px] font-black uppercase tracking-[0.4em] mb-10">Ecossistema</h3>
            <ul className="space-y-6 text-[12px] font-bold uppercase tracking-widest">
              <li><Link href="/sobre" className="hover:text-emerald-400 transition-colors">Legado</Link></li>
              <li><Link href="/servicos" className="hover:text-emerald-400 transition-colors">Portfólio</Link></li>
              <li><Link href="/clientes" className="hover:text-emerald-400 transition-colors">Setores</Link></li>
              <li><Link href="/sustentabilidade" className="hover:text-emerald-400 transition-colors">Manifesto</Link></li>
              <li><Link href="/contactos" className="hover:text-emerald-400 transition-colors">Canais</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-5">
            <h3 className="text-white text-[10px] font-black uppercase tracking-[0.4em] mb-10">Concierge Industrial</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
               <div className="space-y-8">
                  <div className="flex flex-col space-y-2">
                     <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">Localização Central</span>
                     <span className="text-sm font-medium text-white leading-relaxed">Zona Industrial de Cantanhede, <br />Núcleo 1, Lote 2 Fração E, PT</span>
                  </div>
                  <div className="flex flex-col space-y-2">
                     <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">Linha de Apoio</span>
                     <span className="text-lg font-black text-white">+351 912 858 819</span>
                  </div>
               </div>
               <div className="space-y-8">
                  <div className="flex flex-col space-y-2">
                     <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">Comunicação Oficial</span>
                     <span className="text-sm font-medium text-white">info@20recolher.pt</span>
                  </div>
                  <Link
                    href="/pedido-recolha"
                    className="inline-flex items-center justify-between w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white text-[11px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all group"
                  >
                    Agendar Recolha <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
               </div>
            </div>
          </div>

        </div>

        {/* Legal & Footer Bottom */}
        <div className="border-t border-white/5 mt-32 pt-16 flex flex-col md:flex-row items-center justify-between">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 mb-8 md:mb-0">
             © {currentYear} 20 Recolher. Excellence in Global Sustainability.
          </p>
          <div className="flex space-x-12 text-[10px] font-bold uppercase tracking-[0.2em]">
            <Link href="/privacidade" className="text-white/20 hover:text-emerald-400 transition-colors">Privacidade</Link>
            <Link href="/termos" className="text-white/20 hover:text-emerald-400 transition-colors">Termos de Serviço</Link>
            <div className="flex items-center text-white/10">
               <span className="w-1 h-1 rounded-full bg-emerald-500 mr-2" />
               Portugal / EU
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

