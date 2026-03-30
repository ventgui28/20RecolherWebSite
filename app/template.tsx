"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: [0.21, 0.45, 0.32, 0.9], // Senior-level custom easing (Apple-style)
      }}
    >
      {children}
    </motion.div>
  );
}
