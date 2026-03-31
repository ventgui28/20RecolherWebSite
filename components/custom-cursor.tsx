"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // High performance spring config for zero-lag feel
  const springConfig = { damping: 20, stiffness: 800, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.closest("button") || 
        target.closest("a") || 
        target.closest(".group") ||
        window.getComputedStyle(target).cursor === "pointer";
      
      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 bg-green-500/20 border border-green-500/50 rounded-full pointer-events-none z-[9999] hidden md:block"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        scale: isHovered ? 2.5 : 1,
        backdropFilter: isHovered ? "blur(4px)" : "none",
      }}
      transition={{
        scale: { type: "spring", stiffness: 300, damping: 20 },
      }}
    >
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        initial={false}
        animate={{ opacity: isHovered ? 1 : 0 }}
      >
        <div className="w-1 h-1 bg-green-500 rounded-full" />
      </motion.div>
    </motion.div>
  );
}
