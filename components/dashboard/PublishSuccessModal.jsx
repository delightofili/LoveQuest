"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Heart,
  Copy,
  Check,
  MessageCircle,
  LayoutDashboard,
  ExternalLink,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function PublishSuccessModal({
  open,
  slug,
  recipient,
  onClose,
}) {
  const [copied, setCopied] = useState(false);

  // Derive the full URL dynamically when in browser environment
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const url = slug ? `${origin}/q/${slug}` : "";

  async function copyLink() {
    if (!url) return;

    await navigator.clipboard.writeText(url);

    if (navigator.vibrate) {
      navigator.vibrate(40);
    }

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-5 backdrop-blur-lg"
        >
          <motion.div
            initial={{
              scale: 0.85,
              opacity: 0,
              y: 30,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
            }}
            exit={{
              scale: 0.9,
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
            }}
            className="relative w-full max-w-xl rounded-3xl border border-white/10 bg-zinc-950 p-8 shadow-2xl"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute right-5 top-5 rounded-xl p-2 transition hover:bg-white/10"
            >
              <X size={20} />
            </button>

            {/* Heart */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-pink-500/10"
            >
              <Heart fill="currentColor" className="text-pink-500" size={46} />
            </motion.div>

            <h2 className="mt-8 text-center text-4xl font-bold">
              LoveQuest Published
            </h2>

            <p className="mt-4 text-center text-zinc-400">Your LoveQuest for</p>

            <h3 className="mt-2 text-center text-3xl font-bold text-pink-500">
              {recipient}
            </h3>

            <p className="mt-5 text-center text-zinc-500">
              Share this link with them and let the magic begin.
            </p>

            {/* URL */}
            <div className="mt-8 rounded-2xl border border-white/10 bg-black/40 p-4">
              <p className="break-all text-sm text-zinc-300">
                {url || `/q/${slug}`}
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-8 space-y-4">
              <button
                onClick={copyLink}
                className={`flex w-full items-center justify-center gap-3 rounded-2xl py-4 font-semibold transition ${
                  copied ? "bg-green-600" : "bg-pink-500 hover:bg-pink-600"
                }`}
              >
                {copied ? (
                  <>
                    <Check size={20} />
                    Link Copied
                  </>
                ) : (
                  <>
                    <Copy size={20} />
                    Copy Link
                  </>
                )}
              </button>

              <Link
                href={url || `/q/${slug}`}
                target="_blank"
                className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 py-4 transition hover:bg-white/5"
              >
                <ExternalLink size={20} />
                Open LoveQuest
              </Link>

              <Link
                href={`https://wa.me/?text=${encodeURIComponent(
                  `❤️ I created something special for you.\n\n${url || `/q/${slug}`}`,
                )}`}
                target="_blank"
                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-green-600 py-4 font-semibold transition hover:bg-green-700"
              >
                <MessageCircle size={20} />
                Send to {recipient}
              </Link>

              <Link
                href="/dashboard"
                className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 py-4 transition hover:bg-white/5"
              >
                <LayoutDashboard size={20} />
                Back to Dashboard
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
