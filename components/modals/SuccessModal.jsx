"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function SuccessModal({
  open,
  title,
  description,
  buttonText = "Continue",
  onClose,
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-5 backdrop-blur-sm"
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
            }}
            className="w-full max-w-md rounded-3xl border border-white/10 bg-zinc-950 p-8 text-center"
          >
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-500/15">
              <CheckCircle2 size={45} className="text-green-400" />
            </div>

            <h2 className="mt-8 text-3xl font-bold">{title}</h2>

            <p className="mt-5 leading-8 text-zinc-400">{description}</p>

            <button
              onClick={onClose}
              className="mt-10 w-full rounded-2xl bg-pink-500 py-4 text-lg font-semibold transition hover:bg-pink-600"
            >
              {buttonText}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
