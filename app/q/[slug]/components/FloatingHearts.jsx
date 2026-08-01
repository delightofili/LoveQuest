"use client";

import { Heart } from "lucide-react";

const hearts = [
  {
    left: "8%",
    top: "15%",
    animationDuration: "7s",
    animationDelay: "0s",
  },
  {
    left: "22%",
    top: "68%",
    animationDuration: "9s",
    animationDelay: "1s",
  },
  {
    left: "38%",
    top: "28%",
    animationDuration: "8s",
    animationDelay: "2s",
  },
  {
    left: "54%",
    top: "78%",
    animationDuration: "10s",
    animationDelay: "0.5s",
  },
  {
    left: "71%",
    top: "19%",
    animationDuration: "7.5s",
    animationDelay: "1.5s",
  },
  {
    left: "86%",
    top: "57%",
    animationDuration: "9.5s",
    animationDelay: "2.5s",
  },
  {
    left: "14%",
    top: "42%",
    animationDuration: "8.5s",
    animationDelay: "3s",
  },
  {
    left: "63%",
    top: "45%",
    animationDuration: "11s",
    animationDelay: "1s",
  },
];

export default function FloatingHearts() {
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
