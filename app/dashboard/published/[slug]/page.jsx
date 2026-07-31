import CopyButton from "@/components/ui/CopyButton";
import Link from "next/link";

export default async function Published({ params }) {
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/q/${params.slug}`;

  return (
    <div className="mx-auto flex min-h-[80vh] max-w-2xl flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-bold">❤️ Published Successfully</h1>

      <p className="mt-4 text-zinc-500">Your LoveQuest is now live.</p>

      <div className="mt-10 w-full rounded-2xl border border-white/10 bg-white/5 p-4 break-all">
        {url}
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <CopyButton url={url} />

        <Link
          href={url}
          target="_blank"
          className="rounded-xl bg-pink-500 px-6 py-3"
        >
          Open
        </Link>

        <Link
          href={`https://wa.me/?text=${encodeURIComponent(url)}`}
          target="_blank"
          className="rounded-xl bg-green-600 px-6 py-3"
        >
          WhatsApp
        </Link>
      </div>
    </div>
  );
}
