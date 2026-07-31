import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth/auth";

import DashboardStats from "@/components/dashboard/DashboardStats";
import ExperienceGrid from "@/components/dashboard/ExperienceGrid";

export default async function DashboardPage() {
  const user = await getCurrentUser();

  const experiences = await prisma.experience.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });

  const stats = {
    total: experiences.length,

    published: experiences.filter((e) => e.published).length,

    drafts: experiences.filter((e) => !e.published).length,

    views: experiences.reduce((acc, e) => acc + e.views, 0),
  };

  const recent = experiences.slice(0, 3);

  return (
    <>
      <DashboardStats stats={stats} />

      <div className="mt-10">
        <h2 className="mb-6 text-2xl font-bold">Recent LoveQuests</h2>

        <ExperienceGrid experiences={recent} showCreate />
      </div>
    </>
  );
}
