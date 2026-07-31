import Link from "next/link";

export default function CreateQuestCard() {
  return (
    <Link
      href="/dashboard/create"
      className="group flex min-h-[220px] h-full items-center justify-center rounded-3xl border-2 border-dashed border-pink-500/40 transition-all duration-300 hover:border-pink-500 hover:bg-pink-500/10 hover:scale-[1.02]"
    >
      <div className="text-center">
        <div className="text-5xl md:text-6xl">+</div>

        <h2 className="mt-4 text-2xl md:text-3xl font-bold">New LoveQuest</h2>

        <p className="mt-2 text-zinc-500">
          Start creating something unforgettable.
        </p>
      </div>
    </Link>
  );
}
