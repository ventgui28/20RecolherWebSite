import Link from "next/link";
import { Trash2, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] text-zinc-500 py-20 border-t border-zinc-900 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Trash2 className="h-6 w-6 text-emerald-500" />
              <span className="text-xl font-bold tracking-tighter text-white">20 Recolher</span>
            </div>
            <p className="text-[13px] leading-relaxed max-w-xs">
              Especialistas em gestão de resíduos e REEE. 
              Elevando os padrões de sustentabilidade e conformidade ambiental para a elite empresarial.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-[11px] font-bold uppercase tracking-[0.2em] mb-6">Empresa</h3>
            <ul className="space-y-4 text-[13px]">
              <li><Link href="/sobre" className="hover:text-emerald-500 transition-colors">Nosso Legado</Link></li>
              <li><Link href="/servicos" className="hover:text-emerald-500 transition-colors">Serviços de Elite</Link></li>
              <li><Link href="/sustentabilidade" className="hover:text-emerald-500 transition-colors">Sustentabilidade</Link></li>
              <li><Link href="/contactos" className="hover:text-emerald-500 transition-colors">Contactos</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-[11px] font-bold uppercase tracking-[0.2em] mb-6">Contacto Directo</h3>
            <ul className="space-y-4 text-[13px]">
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>Cantanhede, Portugal</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>+351 000 000 000</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>concierge@20recolher.pt</span>
              </li>
            </ul>
          </div>

          {/* Luxury CTA */}
          <div>
            <h3 className="text-white text-[11px] font-bold uppercase tracking-[0.2em] mb-6">Recolha Profissional</h3>
            <p className="text-[13px] mb-6">Solicite o serviço de concierge para a sua gestão de resíduos.</p>
            <Link
              href="/pedido-recolha"
              className="inline-flex items-center px-6 py-2.5 rounded-full border border-zinc-700 text-white text-[12px] font-bold hover:bg-white hover:text-black transition-all"
            >
              Agendar Serviço
            </Link>
          </div>

        </div>

        <div className="border-t border-zinc-900 mt-20 pt-10 flex flex-col md:flex-row items-center justify-between text-[11px] uppercase tracking-widest">
          <p>© {currentYear} 20 Recolher. Excellence in Waste Management.</p>
          <div className="flex space-x-10 mt-6 md:mt-0">
            <Link href="/privacidade" className="hover:text-white transition-colors">Privacidade</Link>
            <Link href="/termos" className="hover:text-white transition-colors">Termos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
