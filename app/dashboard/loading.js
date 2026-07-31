import SkeletonCard from "@/components/dashboard/SkeletonCard";

export default function Loading() {
  return (
    <main>
      <div className="mb-10 h-10 w-72 animate-pulse rounded bg-zinc-800" />

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </main>
  );
}
