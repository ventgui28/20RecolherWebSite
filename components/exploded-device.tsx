"use client";

import { motion, useTransform, MotionValue, useSpring } from "framer-motion";
import { Check } from "lucide-react";

interface ExplodedDeviceProps {
  progress: MotionValue<number>;
}

export function ExplodedDevice({ progress }: ExplodedDeviceProps) {
  // Física de Precisão Apple
  const smoothProgress = useSpring(progress, {
    stiffness: 25,
    damping: 30,
    mass: 1.2
  });

  // Mapeamento dos 4 Passos (0.0 a 1.0)
  const loopRotate = useTransform(smoothProgress, [0, 1], [0, 270]);
  const loopScale = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1.1, 1]);
  
  const pathLength = useTransform(smoothProgress, [0, 0.75], [0.2, 1]);
  const pathOpacity = useTransform(smoothProgress, [0, 0.1], [0, 1]);

  // Brilho apenas no Core do objeto (não no fundo)
  const coreScale = useTransform(smoothProgress, [0.6, 0.8], [0.5, 1.2]);

  // Check Final
  const checkOpacity = useTransform(smoothProgress, [0.75, 0.9], [0, 1]);
  const checkScale = useTransform(smoothProgress, [0.75, 0.9], [0.5, 1]);
  const checkY = useTransform(smoothProgress, [0.75, 0.9], [20, 0]);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-72 h-72 md:w-[500px] md:h-[500px] flex items-center justify-center">
        
        {/* O Elo de Sustentabilidade (Circular Economy Loop) */}
        <motion.svg
          viewBox="0 0 200 200"
          style={{ 
            rotate: loopRotate, 
            scale: loopScale,
          }}
          className="w-64 h-64 md:w-96 md:h-96 drop-shadow-[0_20px_50px_rgba(0,0,0,0.05)] will-change-transform"
        >
          <defs>
            <linearGradient id="metal-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e2e8f0" />
              <stop offset="50%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </linearGradient>
          </defs>

          <circle 
            cx="100" cy="100" r="80" 
            fill="none" 
            stroke="#f1f5f9" 
            strokeWidth="12" 
            strokeDasharray="10 5"
            className="opacity-20"
          />

          <motion.circle
            cx="100" cy="100" r="80"
            fill="none"
            stroke="url(#metal-gradient)"
            strokeWidth="16"
            strokeLinecap="round"
            style={{ 
              pathLength,
              opacity: pathOpacity,
              rotate: -90
            }}
          />

          {/* O Core de Luz (O Valor Recuperado) */}
          <motion.circle
            cx="100" cy="100" r="45"
            fill="#34bf49"
            style={{ 
              scale: coreScale,
              opacity: useTransform(smoothProgress, [0.6, 0.9], [0, 1]),
            }}
          />
        </motion.svg>

        {/* Check de Sucesso */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
           <div className="relative w-full h-full">
              <motion.div
                style={{ opacity: checkOpacity, scale: checkScale, y: checkY }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white rounded-full p-4 shadow-2xl border border-green-50"
              >
                 <Check className="w-12 h-12 md:w-16 md:h-16 text-green-600" strokeWidth={3} />
              </motion.div>

              <motion.div 
                style={{ opacity: useTransform(smoothProgress, [0.9, 0.98], [0, 1]) }}
                className="absolute top-[65%] md:top-[70%] left-1/2 -translate-x-1/2"
              >
                 <div className="bg-white/95 backdrop-blur-md border border-green-100 px-8 py-3 rounded-2xl shadow-xl whitespace-nowrap">
                    <span className="block text-[9px] font-black uppercase tracking-[0.5em] text-green-600 mb-1">Processo Concluído</span>
                    <span className="block text-sm font-black text-[#0a2d10]">CONFORMIDADE TOTAL</span>
                 </div>
              </motion.div>
           </div>
        </div>
      </div>
    </div>
  );
}
