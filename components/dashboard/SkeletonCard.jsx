export default function SkeletonCard() {
  return (
    <div className="animate-pulse overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
      <div className="h-52 bg-zinc-800" />

      <div className="space-y-4 p-6">
        <div className="h-7 w-3/4 rounded bg-zinc-800" />

        <div className="h-5 w-1/2 rounded bg-zinc-800" />

        <div className="h-5 w-24 rounded-full bg-zinc-800" />
      </div>
    </div>
  );
}
