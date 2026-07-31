"use client";

import { Heart } from "lucide-react";

export default function Ending({ experience }) {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <Heart size={90} fill="#ec4899" color="#ec4899" />

      <h1 className="mt-10 text-5xl font-bold">The End...</h1>

      <p className="mt-8 max-w-xl text-xl text-zinc-400">
        Thank you for taking this journey. I hope these memories remind you how
        special you are.
      </p>

      <p className="mt-16 text-pink-500">Made with ❤️</p>
    </section>
  );
}
