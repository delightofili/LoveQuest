import Link from "next/link";
import { Heart } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="max-w-xl text-center">
        <div className="flex justify-center">
          <Heart size={80} fill="#ec4899" className="text-pink-500" />
        </div>

        <h1 className="mt-8 text-5xl font-bold">LoveQuest Not Found</h1>

        <p className="mt-6 text-lg leading-8 text-zinc-400">
          This LoveQuest doesn&apos;t exist, has been removed, or the link is
          incorrect.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex rounded-2xl bg-pink-500 px-8 py-4 font-semibold transition hover:bg-pink-600"
        >
          Back Home
        </Link>
      </div>
    </main>
  );
}
