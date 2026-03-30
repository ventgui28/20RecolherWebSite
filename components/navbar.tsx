"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Trash2 } from "lucide-react";

const NAV_LINKS = [
  { name: "Início", href: "/" },
  { name: "Sobre Nós", href: "/sobre" },
  { name: "Serviços", href: "/servicos" },
  { name: "Sustentabilidade", href: "/sustentabilidade" },
  { name: "Contactos", href: "/contactos" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div 
          className={`glass rounded-2xl px-6 py-2.5 flex justify-between items-center transition-all duration-500 ${
            scrolled ? "shadow-[0_8px_30px_rgb(0,0,0,0.04)]" : "border-transparent bg-transparent"
          }`}
        >
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Trash2 className="h-6 w-6 text-emerald-600 transition-transform duration-300 group-hover:scale-110" />
            <span className="text-xl font-black tracking-tighter text-[#111111]">
              20 <span className="text-emerald-600">Recolher</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[13px] font-bold text-[#111111]/60 hover:text-emerald-600 transition-colors tracking-tight"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/pedido-recolha"
              className="bg-[#111111] hover:bg-emerald-600 text-white text-[12px] font-bold px-6 py-2.5 rounded-xl transition-all"
            >
              Pedir Recolha
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#111111]/80 hover:text-emerald-600 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-24 left-6 right-6 glass rounded-3xl p-8 md:hidden shadow-2xl"
          >
            <div className="flex flex-col space-y-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-bold text-[#111111]/80 hover:text-emerald-600"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/pedido-recolha"
                className="bg-[#111111] text-white text-center py-4 rounded-2xl font-bold"
                onClick={() => setIsOpen(false)}
              >
                Pedir Recolha
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
