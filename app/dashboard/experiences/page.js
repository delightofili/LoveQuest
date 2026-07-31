import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth/auth";

import ExperienceGrid from "@/components/dashboard/ExperienceGrid";

export default async function ExperiencesPage() {
  const user = await getCurrentUser();

  const experiences = await prisma.experience.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });

  return (
    <>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">My LoveQuests</h1>

          <p className="mt-2 text-zinc-500">
            Manage everything you&apos;ve created.
          </p>
        </div>
      </div>

      <ExperienceGrid experiences={experiences} />
    </>
  );
}
