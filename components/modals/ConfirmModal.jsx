"use client";

import { AnimatePresence, motion } from "framer-motion";
import { TriangleAlert } from "lucide-react";

export default function ConfirmModal({
  open,
  title,
  description,
  confirmText = "Confirm",
  cancelText = "Cancel",
  loading = false,
  onConfirm,
  onCancel,
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
              scale: 0.9,
              opacity: 0,
              y: 20,
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
            className="w-full max-w-md rounded-3xl border border-white/10 bg-zinc-950 p-8"
          >
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-500/15">
              <TriangleAlert size={42} className="text-red-500" />
            </div>

            <h2 className="mt-8 text-center text-3xl font-bold">{title}</h2>

            <p className="mt-4 text-center leading-8 text-zinc-400">
              {description}
            </p>

            <div className="mt-10 flex gap-4">
              <button
                onClick={onCancel}
                className="flex-1 rounded-2xl border border-white/10 py-4 transition hover:bg-white/5"
              >
                {cancelText}
              </button>

              <button
                disabled={loading}
                onClick={onConfirm}
                className="flex-1 rounded-2xl bg-red-500 py-4 font-semibold transition hover:bg-red-600 disabled:opacity-50"
              >
                {loading ? "Please wait..." : confirmText}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
