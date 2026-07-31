import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl">💔</h1>

      <h2 className="mt-6 text-3xl font-bold">
        This LoveQuest doesn&apos;t exist.
      </h2>

      <p className="mt-4 text-zinc-500">
        It may have been deleted or the link is incorrect.
      </p>

      <Link href="/" className="mt-8 rounded-xl bg-pink-500 px-6 py-3">
        Go Home
      </Link>
    </div>
  );
}
