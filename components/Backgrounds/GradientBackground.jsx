"use client";

import { motion } from "framer-motion";

export default function GradientBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10 ">
      <motion.div
        animate={{
          x: [0, 80, -50, 0],
          y: [0, -60, 40, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-[500px] w-[500px] rounded-full bg-pink-500/30 blur-[120px]"
      />
      <motion.div
        animate={{
          x: [100, -50, 80, 100],
          y: [-50, 100, -30, -50],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-0 top-20 h-[400px] w-[400px] rounded-full bg-purple-500/30 blur-[120px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-rose-400/30 blur-[120px]"
      />
    </div>
  );
}
