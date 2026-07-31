"use client";

import Link from "next/link";
import { RotateCcw, Heart, Home } from "lucide-react";
import { motion } from "framer-motion";

export default function EndingScreen({ onReplay }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex min-h-screen items-center justify-center bg-black px-6 text-center text-white"
    >
      <div className="max-w-xl">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="flex justify-center"
        >
          <Heart size={90} fill="#ec4899" color="#ec4899" />
        </motion.div>

        <h1 className="mt-10 text-5xl font-bold">The End</h1>

        <p className="mt-6 text-xl leading-9 text-zinc-400">
          Every beautiful memory deserves to be remembered forever.
        </p>

        <p className="mt-4 text-zinc-500">
          Thank you for experiencing this LoveQuest ❤️
        </p>

        <div className="mt-12 flex flex-col gap-4">
          <button
            onClick={onReplay}
            className="flex items-center justify-center gap-3 rounded-2xl bg-pink-500 py-4 font-semibold transition hover:bg-pink-600"
          >
            <RotateCcw />
            Replay LoveQuest
          </button>

          <Link
            href="/"
            className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 py-4 transition hover:bg-white/5"
          >
            <Home />
            Back Home
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
