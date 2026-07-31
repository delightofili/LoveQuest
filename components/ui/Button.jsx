"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion(Link);

export default function Button({ children, href = "#" }) {
  return (
    <MotionLink
      href={href}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="rounded-full bg-gradient-to-r from-pink-500 to-rose-500 w-full sm:w-auto px-10 py-4 text-white font-semibold shadow-lg shadow-pink-500/30 transition"
    >
      {children}
    </MotionLink>
  );
}
