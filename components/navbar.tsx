"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Início", href: "/" },
  { name: "Legado", href: "/sobre" },
  { name: "Serviços", href: "/servicos" },
  { name: "Clientes", href: "/clientes" },
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
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 transition-all duration-700">
      <div className="max-w-7xl w-full px-6 flex justify-center">
        <div 
          className={`glass relative px-8 py-3.5 flex justify-between items-center transition-all duration-700 rounded-full border border-green-100/50 ${
            scrolled ? "w-full shadow-[0_20px_50px_-10px_rgba(16,185,129,0.1)]" : "w-[98%] shadow-none"
          }`}
        >
          {/* Logo Section */}
          <Link href="/" className="flex items-center group relative z-10">
            <div className="relative h-12 w-48 transition-transform duration-500 group-hover:scale-105">
              <Image 
                src="/logo.png" 
                alt="20 Recolher Logo" 
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-[11px] font-bold text-[#0a2d10]/60 hover:text-[#34bf49] transition-colors tracking-[0.2em] uppercase py-2 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-green-500 transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              href="/pedido-recolha"
              className="btn-elite scale-90"
            >
              Pedir Recolha
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden relative z-10">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#0a2d10] p-2 hover:bg-green-50 rounded-full transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] bg-white z-50 md:hidden flex flex-col p-12 shadow-[-20px_0_80px_rgba(0,0,0,0.1)]"
            >
              <div className="flex justify-between items-center mb-20">
                <div className="relative h-10 w-40">
                  <Image 
                    src="/logo.png" 
                    alt="20 Recolher Logo" 
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-3 bg-gray-50 rounded-full text-black"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex flex-col space-y-10">
                {NAV_LINKS.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="text-4xl font-black text-[#0a2d10] tracking-tighter hover:text-green-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto">
                <Link
                  href="/pedido-recolha"
                  className="btn-elite w-full py-7 text-[13px]"
                  onClick={() => setIsOpen(false)}
                >
                  Solicitar Agendamento
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}



