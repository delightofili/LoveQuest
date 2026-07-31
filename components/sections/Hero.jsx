"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 text-center">
      <motion.div
        initial={{
          opacity: 0,
          y: 60,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
      >
        <motion.h1
          initial={{
            scale: 0.9,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="text-6xl font-bold text-white md:text-8xl"
        >
          LoveQuest
        </motion.h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-zinc-300 md:text-2xl">
          Create unforgettable interactive love experiences with memories,
          games, voice notes and surprises.
        </p>

        <div className="mt-12 flex justify-center gap-5">
          <Button>Create Yours</Button>

          <button className="rounded-full border border-white/20 px-8 py-4 text-white backdrop-blur-lg">
            Explore
          </button>
        </div>
      </motion.div>
    </section>
  );
}
