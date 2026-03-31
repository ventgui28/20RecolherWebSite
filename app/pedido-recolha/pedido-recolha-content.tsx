"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, 
  Package, 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Truck
} from "lucide-react";

const steps = [
  { id: 1, name: "Entidade", icon: Building2 },
  { id: 2, name: "Resíduos", icon: Package },
  { id: 3, name: "Logística", icon: Calendar },
];

export function PedidoRecolhaContent() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-transparent px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center"
        >
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-black text-[#111111] mb-4 tracking-tighter">SOLICITAÇÃO RECEBIDA.</h2>
          <p className="text-gray-800 font-bold mb-10 leading-relaxed">
            Obrigado por escolher a excelência da 20 Recolher. O nosso concierge ambiental entrará em contacto nas próximas 2 horas úteis para confirmar os detalhes.
          </p>
          <button 
            onClick={() => window.location.href = "/"}
            className="w-full py-4 bg-[#111111] text-white font-bold rounded-2xl hover:bg-green-600 transition-all tracking-widest text-xs uppercase"
          >
            Voltar ao Início
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        
        {/* Header da Página */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
          >
            <Truck className="h-3.5 w-3.5" />
            <span>Serviço de Concierge Ambiental</span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-black text-[#111111] tracking-tighter mb-4">PEDIDO DE RECOLHA.</h1>
          <p className="text-gray-800 font-bold max-w-xl mx-auto">
            Preencha os detalhes abaixo para que possamos desenhar a solução de gestão de resíduos ideal para a sua organização.
          </p>
        </div>

        {/* Progress Bar Minimalista */}
        <div className="flex items-center justify-between mb-16 px-4">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center flex-1 relative">
              <div 
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 z-10 ${
                  currentStep >= step.id ? "bg-[#111111] text-white" : "bg-gray-100 text-gray-500"
                }`}
              >
                <step.icon className="h-5 w-5" />
              </div>
              <span className={`mt-3 text-[10px] font-bold uppercase tracking-widest ${
                currentStep >= step.id ? "text-[#111111]" : "text-gray-500"
              }`}>
                {step.name}
              </span>
              {step.id !== steps.length && (
                <div className={`absolute top-5 left-[calc(50%+20px)] w-[calc(100%-40px)] h-[1px] ${
                  currentStep > step.id ? "bg-[#111111]" : "bg-gray-200"
                }`} />
              )}
            </div>
          ))}
        </div>

        {/* Formulário */}
        <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold uppercase tracking-widest text-[#111111]">Nome da Entidade</label>
                      <input type="text" placeholder="Ex: Empresa S.A." className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-green-500/20 outline-none transition-all placeholder:text-gray-400 font-medium" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold uppercase tracking-widest text-[#111111]">NIF</label>
                      <input type="text" placeholder="9 dígitos" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-green-500/20 outline-none transition-all placeholder:text-gray-400 font-medium" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-[#111111]">Email Profissional</label>
                    <input type="email" placeholder="geral@empresa.pt" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-green-500/20 outline-none transition-all placeholder:text-gray-400 font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-[#111111]">Contacto Telefónico</label>
                    <input type="tel" placeholder="+351 ..." className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-green-500/20 outline-none transition-all placeholder:text-gray-400 font-medium" />
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-[#111111]">Tipo de Resíduos</label>
                    <select className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-green-500/20 outline-none transition-all font-bold text-gray-800 appearance-none">
                      <option>REEE (Eletrónicos)</option>
                      <option>Metais</option>
                      <option>Papel e Cartão</option>
                      <option>Plásticos Industriais</option>
                      <option>Outros</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-[#111111]">Volume Estimado</label>
                    <input type="text" placeholder="Ex: 500kg, 2 Contentores, etc." className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-green-500/20 outline-none transition-all placeholder:text-gray-400 font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-[#111111]">Notas de Manuseamento</label>
                    <textarea rows={4} placeholder="Descreva particularidades da recolha..." className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-green-500/20 outline-none transition-all placeholder:text-gray-400 font-medium resize-none"></textarea>
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-[#111111]">Local de Recolha</label>
                    <input type="text" placeholder="Morada completa" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-green-500/20 outline-none transition-all placeholder:text-gray-400 font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-[#111111]">Data Preferencial</label>
                    <input type="date" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-green-500/20 outline-none transition-all font-bold text-gray-800" />
                  </div>
                  <div className="p-6 bg-green-50 rounded-2xl border border-green-200">
                    <p className="text-green-900 text-sm font-bold leading-relaxed">
                      <strong>Nota de Elite:</strong> Após a submissão, a nossa equipa logística irá verificar a disponibilidade e enviar-lhe-á a confirmação oficial via email.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Botoões de Navegação */}
            <div className="mt-12 flex items-center justify-between pt-8 border-t border-gray-100">
              <button
                type="button"
                onClick={prevStep}
                className={`flex items-center space-x-2 text-[#111111] font-black text-xs uppercase tracking-widest transition-opacity ${
                  currentStep === 1 ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Anterior</span>
              </button>
              
              {currentStep < steps.length ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex items-center space-x-2 px-8 py-4 bg-[#111111] text-white font-bold rounded-2xl hover:bg-green-600 transition-all text-xs uppercase tracking-widest"
                >
                  <span>Próximo Passo</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-12 py-4 bg-green-600 text-white font-bold rounded-2xl hover:bg-green-700 transition-all text-xs uppercase tracking-widest shadow-xl shadow-green-900/10"
                >
                  Confirmar Pedido
                </button>
              )}
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}

