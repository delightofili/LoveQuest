"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRef, useCallback } from "react";
import EndingScreen from "./EndingScreen";

export default function StoryPlayer({ experience }) {
  const memories = experience.story;

  const [current, setCurrent] = useState(0);

  const isFinished = current >= memories.length;

  const memory = memories[current];

  const next = useCallback(() => {
    setCurrent((prev) => (prev < memories.length - 1 ? prev + 1 : prev));
  }, [memories.length]);

  const previous = useCallback(() => {
    setCurrent((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  // Keyboard navigation

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "ArrowRight") next();

      if (e.key === "ArrowLeft") previous();
    }

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [next, previous]);

  // Swipe

  const touchStart = useRef(0);

  function handleTouchStart(e) {
    touchStart.current = e.changedTouches[0].clientX;
  }

  function handleTouchEnd(e) {
    const touchEnd = e.changedTouches[0].clientX;

    if (touchStart.current - touchEnd > 60) {
      next();
    }

    if (touchEnd - touchStart.current > 60) {
      previous();
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (current < memories.length - 1) {
        next();
      }
    }, 12000);

    return () => clearTimeout(timer);
  }, [current, next, memories.length]);

  if (isFinished) {
    return <EndingScreen onReplay={() => setCurrent(0)} />;
  }

  return (
    <main
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      {/* Progress */}

      <div className="fixed left-0 top-0 z-50 h-1 w-full bg-white/10">
        <motion.div
          key={current}
          className="h-full bg-pink-500"
          initial={{
            width: `${(current / memories.length) * 100}%`,
          }}
          animate={{
            width: `${((current + 1) / memories.length) * 100}%`,
          }}
          transition={{
            duration: 12,
            ease: "linear",
          }}
        />
      </div>

      {/* Counter */}

      <div className="fixed right-6 top-6 z-50 rounded-full bg-black/40 px-5 py-2 backdrop-blur">
        {current + 1} / {memories.length}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{
            opacity: 0,
            scale: 1.05,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 0.96,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          {/* IMAGE */}

          <div className="relative h-[45vh] w-full overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.08],
              }}
              transition={{
                duration: 12,
              }}
            >
              <Image
                src={memory.image}
                alt={memory.title}
                fill
                priority
                className="object-cover"
              />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          </div>

          {/* CONTENT */}

          <section className="mx-auto max-w-3xl px-6 py-10">
            <motion.h1
              initial={{
                y: 40,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0.2,
              }}
              className="text-4xl font-bold md:text-6xl"
            >
              {memory.title}
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.45,
              }}
              className="mt-8 text-lg leading-9 text-zinc-300 md:text-xl"
            >
              {memory.content}
            </motion.p>
          </section>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}

      <button
        onClick={previous}
        disabled={current === 0}
        className="fixed left-5 top-1/2 h-16 w-16 -translate-y-1/2 rounded-full bg-white/10 text-3xl backdrop-blur transition hover:bg-white/20 disabled:opacity-20"
      >
        ←
      </button>

      <button
        onClick={() => {
          if (current === memories.length - 1) {
            setCurrent(memories.length);
          } else {
            next();
          }
        }}
        disabled={false}
        className="fixed right-5 top-1/2 h-16 w-16 -translate-y-1/2 rounded-full bg-white/10 text-3xl backdrop-blur transition hover:bg-white/20 disabled:opacity-20"
      >
        →
      </button>
    </main>
  );
}
