"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import EndingScreen from "./EndingScreen";

export default function StoryPlayer({ experience }) {
  const memories = Array.isArray(experience.story) ? experience.story : [];

  const [current, setCurrent] = useState(0);

  const isFinished = memories.length === 0 || current >= memories.length;

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
      if (e.key === "ArrowRight") {
        next();
      }

      if (e.key === "ArrowLeft") {
        previous();
      }
    }

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [next, previous]);

  // Swipe navigation
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

  // Automatically move to next memory after 12 seconds
  useEffect(() => {
    if (isFinished) return;

    const timer = setTimeout(() => {
      if (current < memories.length - 1) {
        next();
      }
    }, 12000);

    return () => clearTimeout(timer);
  }, [current, next, memories.length, isFinished]);

  // No memories
  if (memories.length === 0) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            This LoveQuest has no memories yet.
          </h1>

          <p className="mt-4 text-zinc-400">
            Something went wrong while loading the memories.
          </p>
        </div>
      </main>
    );
  }

  // Finished
  if (isFinished) {
    return <EndingScreen onReplay={() => setCurrent(0)} />;
  }

  // Safely get the image URL
  const imageUrl = typeof memory?.image === "string" ? memory.image.trim() : "";

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
          <div className="relative h-[45vh] w-full overflow-hidden bg-zinc-950">
            {imageUrl ? (
              <motion.div
                className="absolute inset-0"
                animate={{
                  scale: [1, 1.08],
                }}
                transition={{
                  duration: 12,
                  ease: "linear",
                }}
              >
                <Image
                  src={imageUrl}
                  alt={memory.title || "LoveQuest memory"}
                  fill
                  priority={current === 0}
                  sizes="100vw"
                  className="object-cover"
                />
              </motion.div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-pink-950 via-black to-purple-950">
                <div className="text-center">
                  <div className="text-6xl">❤️</div>

                  <p className="mt-4 text-sm text-zinc-400">
                    Memory photo unavailable
                  </p>
                </div>
              </div>
            )}

            {/* Image overlay */}
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

      {/* Previous */}
      <button
        onClick={previous}
        disabled={current === 0}
        aria-label="Previous memory"
        className="fixed left-5 top-1/2 z-50 h-16 w-16 -translate-y-1/2 rounded-full bg-white/10 text-3xl backdrop-blur transition hover:bg-white/20 disabled:opacity-20"
      >
        ←
      </button>

      {/* Next */}
      <button
        onClick={() => {
          if (current === memories.length - 1) {
            setCurrent(memories.length);
          } else {
            next();
          }
        }}
        aria-label="Next memory"
        className="fixed right-5 top-1/2 z-50 h-16 w-16 -translate-y-1/2 rounded-full bg-white/10 text-3xl backdrop-blur transition hover:bg-white/20"
      >
        →
      </button>
    </main>
  );
}
