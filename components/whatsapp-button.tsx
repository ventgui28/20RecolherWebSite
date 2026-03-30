"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show button after 2 seconds for a smoother entry
    const timer = setTimeout(() => setIsVisible(true), 2000);
    // Show tooltip after 5 seconds to draw attention without being annoying
    const tooltipTimer = setTimeout(() => setShowTooltip(true), 5000);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const whatsappNumber = "351000000000"; // Replace with real number
  const message = "Olá! Gostaria de solicitar informações sobre a recolha de resíduos.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-8 right-8 z-[60] flex flex-col items-end">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative"
          >
            {/* Minimalist Tooltip */}
            <AnimatePresence>
              {showTooltip && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="absolute right-20 bottom-2 bg-white border border-gray-100 shadow-2xl rounded-2xl p-4 w-48 hidden md:block"
                >
                  <button 
                    onClick={() => setShowTooltip(false)}
                    className="absolute top-2 right-2 text-gray-300 hover:text-gray-500"
                  >
                    <X className="h-3 w-3" />
                  </button>
                  <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1">Online agora</p>
                  <p className="text-[12px] font-medium text-[#111111] leading-tight">Como posso ajudar com a sua recolha hoje?</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main Floating Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-16 h-16 bg-white border border-gray-100 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_rgba(16,185,129,0.2)] transition-all duration-500 overflow-hidden"
              aria-label="Contact via WhatsApp"
            >
              <div className="absolute inset-0 bg-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <MessageCircle className="h-7 w-7 text-emerald-600 relative z-10 transition-transform duration-500 group-hover:scale-110" />
            </a>

            {/* Status Indicator (Pulse) */}
            <span className="absolute top-0 right-0 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
