"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl"
      >
        <motion.h1
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-extrabold tracking-tight text-white md:text-8xl"
        >
          LoveQuest
        </motion.h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-300 md:text-2xl">
          Turn your love story into a beautiful interactive experience with
          memories, photos, animations and heartfelt surprises they&apos;ll
          never forget.
        </p>

        <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <Button href="/dashboard/create">
            <span className="flex items-center gap-2">
              Create Yours
              <ArrowRight size={18} />
            </span>
          </Button>

          <Link
            href="/explore"
            className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-white transition hover:border-pink-500 hover:bg-white/10"
          >
            <Compass size={18} />
            Explore
          </Link>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-8 text-sm text-zinc-500">
          <span>❤️ Unlimited Memories</span>
          <span>📸 Photo Stories</span>
          <span>🎁 Interactive Experience</span>
        </div>
      </motion.div>
    </section>
  );
}
