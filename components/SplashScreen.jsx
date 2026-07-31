"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

const messages = [
  "Preparing your LoveQuest...",
  "Gathering beautiful memories...",
  "Adding a little romance...",
  "Almost ready for someone special...",
];

export default function SplashScreen() {
  const [show, setShow] = useState(true);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const visited = sessionStorage.getItem("lovequest-loaded");

    const duration = visited ? 3500 : 6500;

    const hideTimer = setTimeout(() => {
      sessionStorage.setItem("lovequest-loaded", "true");
      setShow(false);
    }, duration);

    const messageTimer = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 1800);

    return () => {
      clearTimeout(hideTimer);
      clearInterval(messageTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
            },
          }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#09090b]"
        >
          {/* Background Glow */}
          <div className="absolute h-[500px] w-[500px] rounded-full bg-pink-500/10 blur-[140px]" />

          <div className="relative z-10 flex flex-col items-center px-6 text-center">
            {/* Animated Heart */}
            <motion.div
              animate={{
                scale: [1, 1.12, 1],
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart
                size={95}
                fill="#ec4899"
                color="#ec4899"
                strokeWidth={1.5}
              />
            </motion.div>

            {/* Logo */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.25,
              }}
              className="mt-10 text-5xl font-bold tracking-tight text-white"
            >
              LoveQuest
            </motion.h1>

            {/* Changing Text */}
            <AnimatePresence mode="wait">
              <motion.p
                key={messageIndex}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -15,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="mt-5 text-lg text-zinc-400"
              >
                {messages[messageIndex]}
              </motion.p>
            </AnimatePresence>

            {/* Animated Dots */}
            <div className="mt-12 flex gap-3">
              {[0, 1, 2].map((dot) => (
                <motion.div
                  key={dot}
                  className="h-2.5 w-2.5 rounded-full bg-pink-500"
                  animate={{
                    y: [0, -8, 0],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: dot * 0.15,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
