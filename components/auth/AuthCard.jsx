"use client";

import { motion } from "framer-motion";

export default function AuthCard({ children }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
        scale: 0.97,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.6,
      }}
      className="
      w-full
      max-w-md
      rounded-[32px]
      border
      border-white/10
      bg-white/5
      backdrop-blur-2xl
      p-8
      shadow-3xl
      "
    >
      {children}
    </motion.div>
  );
}
