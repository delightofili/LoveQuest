import MemoryCard from "./MemoryCard";

export default function MemoryTimeline({ experience }) {
  return (
    <section id="timeline" className="mx-auto max-w-5xl space-y-20 px-6 py-24">
      {experience.story.map((memory, index) => (
        <MemoryCard key={memory.id} memory={memory} index={index} />
      ))}
    </section>
  );
}
