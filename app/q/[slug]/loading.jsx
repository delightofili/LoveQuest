export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="text-center">
        <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-pink-500 border-t-transparent" />

        <p className="mt-8 text-zinc-400">Preparing your LoveQuest...</p>
      </div>
    </div>
  );
}
