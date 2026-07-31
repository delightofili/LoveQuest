import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth/auth";

import ExperienceGrid from "@/components/dashboard/ExperienceGrid";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  const experiences = await prisma.experience.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });

  const recent = experiences.slice(0, 3);

  return (
    <>
      <div className="mt-10">
        <h2 className="mb-6 text-2xl font-bold">Recent LoveQuests</h2>

        <ExperienceGrid experiences={recent} showCreate />
      </div>
    </>
  );
}
