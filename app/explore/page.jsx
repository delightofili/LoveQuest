import Link from "next/link";
import { ArrowLeft, Heart } from "lucide-react";
import { prisma } from "@/lib/prisma";

export const metadata = {
  title: "Explore LoveQuests",
};

export default async function ExplorePage() {
  const experiences = await prisma.experience.findMany({
    where: {
      published: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-[#09090b] overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-3 text-white text-sm font-medium transition hover:bg-white/5"
        >
          <ArrowLeft size={18} />
          <span>Back Home</span>
        </Link>

        <div className="mt-10 sm:mt-12">
          <h1 className="text-3xl sm:text-5xl font-bold text-white">
            Explore LoveQuests
          </h1>

          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Beautiful stories created with LoveQuest.
          </p>
        </div>

        {experiences.length === 0 ? (
          <div className="mt-14 sm:mt-20 rounded-3xl border border-dashed border-white/10 p-8 sm:p-20 text-center flex flex-col items-center justify-center">
            <Heart
              fill="currentColor"
              className="mx-auto text-pink-500"
              size={60}
            />

            <h2 className="mt-6 text-2xl sm:text-3xl font-bold text-white">
              No LoveQuests Yet
            </h2>

            <p className="mt-3 text-sm sm:text-base text-zinc-500 max-w-sm">
              Be the first person to publish a beautiful memory.
            </p>

            <Link
              href="/dashboard/create"
              className="mt-8 inline-flex items-center justify-center text-center rounded-full bg-pink-500 px-6 py-3.5 sm:px-8 sm:py-4 font-semibold text-white transition hover:bg-pink-600"
            >
              Create Yours ❤️
            </Link>
          </div>
        ) : (
          <div className="mt-12 sm:mt-16 grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
            {experiences.map((exp) => (
              <Link
                key={exp.id}
                href={`/q/${exp.slug}`}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:-translate-y-2 hover:border-pink-500"
              >
                <div className="h-56 bg-gradient-to-br from-pink-500 via-rose-500 to-purple-600" />

                <div className="space-y-4 p-6 sm:p-7">
                  <span className="inline-block rounded-full bg-pink-500/20 px-3 py-1 text-sm text-pink-300">
                    {exp.occasion}
                  </span>

                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    {exp.title}
                  </h2>

                  <p className="text-zinc-400">For {exp.recipientName}</p>

                  <div className="flex items-center justify-between text-sm text-zinc-500">
                    <span>{exp.views} Views</span>
                    <span>{exp.story.length} Memories</span>
                  </div>

                  <div className="pt-2 flex items-center gap-1 font-semibold text-pink-400">
                    <span>Open LoveQuest</span>
                    <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
