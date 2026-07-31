import { notFound, redirect } from "next/navigation";

import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth/auth";

import EditExperienceForm from "@/components/dashboard/EditExperienceForm";

export default async function ExperienceDetails({ params }) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  const experience = await prisma.experience.findFirst({
    where: {
      id: params.id,
      userId: user.id,
    },
  });

  if (!experience) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="text-4xl font-bold">Edit LoveQuest</h1>

      <p className="mt-3 text-zinc-500">Update your experience anytime.</p>

      <EditExperienceForm experience={experience} />
    </div>
  );
}
