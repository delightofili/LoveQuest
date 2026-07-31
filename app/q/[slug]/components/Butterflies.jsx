"use client";

import { motion } from "framer-motion";

export default function Butterflies() {
  return (
    <>
      {Array.from({ length: 8 }).map((_, i) => {
        // Deterministic pseudo-random math based on index 'i'
        const yPos = (i * 97) % 700; // Spreads y position evenly up to 700px
        const duration = 15 + ((i * 13) % 10); // Durations between 15s and 25s

        return (
          <motion.div
            key={i}
            initial={{
              x: -100,
              y: yPos,
            }}
            animate={{
              x: 1500,
            }}
            transition={{
              repeat: Infinity,
              duration: duration,
              delay: i,
            }}
            className="absolute text-3xl"
          >
            🦋
          </motion.div>
        );
      })}
    </>
  );
}
