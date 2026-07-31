"use client";

import { motion } from "framer-motion";

export default function Hero({ experience }) {
  const themes = {
    Rose: "from-pink-500 via-rose-500 to-pink-900",

    Luxury: "from-yellow-400 via-black to-zinc-900",

    Galaxy: "from-purple-500 via-indigo-900 to-black",

    Sunset: "from-orange-500 via-red-500 to-pink-700",

    Ocean: "from-cyan-500 via-blue-700 to-slate-900",

    Dark: "from-zinc-900 via-black to-black",
  };

  return (
    <section
      className={`flex min-h-screen flex-col items-center justify-center bg-gradient-to-br px-6 text-center ${themes[experience.theme]}`}
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-bold"
      >
        {experience.title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.5,

          duration: 1,
        }}
        className="mt-6 max-w-xl text-xl text-zinc-400"
      >
        Someone spent time creating something beautiful just for you.
      </motion.p>

      <motion.button
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{
          delay: 1,
        }}
        onClick={() => {
          document

            .getElementById("timeline")

            .scrollIntoView({
              behavior: "smooth",
            });
        }}
        className="mt-16 rounded-full bg-pink-500 px-10 py-5"
      >
        Begin ❤️
      </motion.button>
    </section>
  );
}
