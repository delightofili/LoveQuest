import CreateQuestCard from "./CreateQuestCard";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceGrid({ experiences, showCreate = true }) {
  if (experiences.length === 0) {
    return (
      <div className="flex min-h-[65vh] items-center justify-center">
        <div className="w-full max-w-md rounded-3xl border border-dashed border-white/10 bg-white/[0.02] p-8 text-center">
          <div className="mb-6 text-6xl">❤️</div>

          <h2 className="text-3xl font-bold">No LoveQuests Yet</h2>

          <p className="mt-4 text-zinc-400">
            Start creating a beautiful experience for someone special.
          </p>

          <div className="mt-8">
            <CreateQuestCard />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {showCreate && <CreateQuestCard />}

      {experiences.map((exp) => (
        <ExperienceCard key={exp.id} experience={exp} />
      ))}
    </div>
  );
}
