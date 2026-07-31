"use client";

import { motion } from "framer-motion";

export default function MemoryCard({
  memory,

  index,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,

        y: 100,
      }}
      whileInView={{
        opacity: 1,

        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.8,
      }}
      className="overflow-hidden rounded-[40px] bg-white/5"
    >
      {memory.image && (
        <img src={memory.image} className="h-[450px] w-full object-cover" />
      )}

      <div className="p-10">
        <div className="mb-4 text-pink-500">Memory {index + 1}</div>

        <h2 className="text-4xl font-bold">{memory.title}</h2>

        <p className="mt-6 text-lg leading-9 text-zinc-300">{memory.content}</p>
      </div>
    </motion.div>
  );
}
