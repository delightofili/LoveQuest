"use client";

import { motion } from "framer-motion";

function pseudoRandom(seed) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

// Format percentages with .toFixed(2) so Server & Client produce identical strings
const PARTICLES = Array.from({ length: 25 }).map((_, index) => ({
  id: index,
  left: `${(pseudoRandom(index * 1.5) * 100).toFixed(2)}%`,
  top: `${(pseudoRandom(index * 2.5) * 100).toFixed(2)}%`,
  duration: 3 + pseudoRandom(index * 3.5) * 4,
  delay: pseudoRandom(index * 4.5) * 5,
}));

export default function FloatingParticles() {
  return (
    <>
      {PARTICLES.map((particle) => (
        <motion.div
          key={particle.id}
          animate={{
            y: [0, -40, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
          className="absolute h-2 w-2 rounded-full bg-pink-400"
          style={{
            left: particle.left,
            top: particle.top,
          }}
        />
      ))}
    </>
  );
}
