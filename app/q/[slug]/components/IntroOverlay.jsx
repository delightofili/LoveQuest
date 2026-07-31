"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart } from "lucide-react";

import FloatingHearts from "./FloatingHearts";
import ParticleBackground from "./ParticleBackground";
import Butterflies from "./Butterflies";

export default function IntroOverlay({ experience, onStart }) {
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowName(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-black"
      >
        <ParticleBackground />

        <FloatingHearts />

        <Butterflies />

        <div className="relative z-20 flex flex-col items-center px-6 text-center">
          <motion.button
            onClick={onStart}
            animate={{
              scale: [1, 0.92, 1.12, 1],
              rotate: [0, -3, 3, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="cursor-pointer"
          >
            <Heart size={140} fill="#ec4899" color="#ec4899" />
          </motion.button>

          <AnimatePresence>
            {showName && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 0.8,
                }}
              >
                <p className="mt-10 text-lg uppercase tracking-[8px] text-pink-400">
                  A LoveQuest For
                </p>

                <h1 className="mt-4 text-5xl font-bold md:text-7xl">
                  {experience.recipientName}
                </h1>

                <p className="mt-6 text-lg text-zinc-300">
                  Created with love by
                </p>

                <h2 className="mt-2 text-2xl font-semibold text-pink-400">
                  {experience.senderName}
                </h2>

                <p className="mt-10 animate-pulse text-lg text-white">
                  Tap the Heart to Begin
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
