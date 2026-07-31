"use client";

import { useState } from "react";
import { Heart } from "lucide-react";

// Helper to generate positions
const generateHearts = () =>
  Array.from({ length: 25 }).map(() => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDuration: `${4 + Math.random() * 5}s`,
  }));

export default function FloatingHearts() {
  // Pass a function to useState so it only executes on initial render
  const [hearts] = useState(() => {
    if (typeof window !== "undefined") {
      return generateHearts();
    }
    return [];
  });

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {hearts.map((style, i) => (
        <div key={i} className="absolute animate-pulse" style={style}>
          <Heart size={18} fill="#ec4899" color="#ec4899" />
        </div>
      ))}
    </div>
  );
}
