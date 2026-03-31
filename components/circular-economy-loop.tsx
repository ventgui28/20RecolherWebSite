"use client";

import { motion, useAnimation } from "framer-motion";
import { Recycle, ArrowRightLeft, Leaf, ShieldCheck, Gem } from "lucide-react";
import { useState, useEffect } from "react";

const ORBIT_ITEMS = [
  { icon: Recycle, label: "Reciclagem", color: "text-green-500", delay: 0 },
  { icon: ArrowRightLeft, label: "Logística Inversa", color: "text-emerald-500", delay: 2 },
  { icon: Leaf, label: "Eco-Design", color: "text-teal-500", delay: 4 },
  { icon: ShieldCheck, label: "Conformidade", color: "text-green-600", delay: 6 },
  { icon: Gem, label: "Valorização", color: "text-emerald-600", delay: 8 },
];

export function CircularEconomyLoop() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-square flex items-center justify-center overflow-hidden">
      {/* Central Hub - Floating with subtle scale */}
      <motion.div 
        animate={{ 
          scale: [1, 1.03, 1],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="relative z-10 w-40 h-40 md:w-56 md:h-56 bg-white rounded-full shadow-[0_40px_100px_rgba(52,191,73,0.08)] border border-green-50 flex items-center justify-center"
      >
        <div className="text-center relative z-10">
           <span className="block text-[10px] font-black uppercase tracking-[0.4em] text-green-600/40 mb-2">Impacto</span>
           <span className="block text-3xl md:text-5xl font-black text-[#0a2d10]">20</span>
           <span className="block text-[10px] font-black uppercase tracking-[0.3em] text-green-600 mt-2">Recolher</span>
        </div>
        
        {/* Pulsing Rings */}
        <div className="absolute inset-[-30px] border border-green-100/30 rounded-full animate-pulse opacity-20" />
      </motion.div>

      {/* Main Orbit Path */}
      <div className="absolute inset-[15%] border border-dashed border-green-100/40 rounded-full" />

      {/* Orbiting Elements Container */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          rotate: isHovered ? [null] : 360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {ORBIT_ITEMS.map((item, index) => {
          const angle = (index / ORBIT_ITEMS.length) * (2 * Math.PI);
          const radius = typeof window !== 'undefined' && window.innerWidth < 768 ? 130 : 220;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <div
              key={index}
              className="absolute left-1/2 top-1/2"
              style={{ 
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`
              }}
            >
              <motion.div
                animate={{
                   // Counter-rotate the icons so they stay upright
                   rotate: isHovered ? [null] : -360
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                whileHover={{ scale: 1.15, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className="group relative cursor-pointer"
              >
                <div className={`w-14 h-14 md:w-20 md:h-20 bg-white rounded-[1.8rem] shadow-[0_20px_40px_rgba(0,0,0,0.04)] border border-green-50/50 flex items-center justify-center transition-all duration-700 group-hover:shadow-[0_25px_50px_rgba(52,191,73,0.15)] group-hover:border-green-500/30`}>
                  <item.icon className={`w-7 h-7 md:w-9 md:h-9 ${item.color}`} strokeWidth={1.2} />
                </div>
                
                {/* Elite Label Overlay */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 whitespace-nowrap">
                  <span className="text-[9px] font-black uppercase tracking-[0.25em] text-green-700 bg-white shadow-lg border border-green-50 px-4 py-1.5 rounded-full">
                    {item.label}
                  </span>
                </div>
              </motion.div>
            </div>
          );
        })}
      </motion.div>

      {/* Background Ornaments */}
      <div className="absolute inset-0 border-[1px] border-green-50/20 rounded-full scale-[0.95]" />
      <div className="absolute inset-0 bg-gradient-radial from-green-50/20 to-transparent opacity-40" />
    </div>
  );
}
