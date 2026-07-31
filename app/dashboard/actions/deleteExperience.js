"use server";

import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth/auth";
import { revalidatePath } from "next/cache";

export async function deleteExperience(id) {
  const user = await getCurrentUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  await prisma.experience.delete({
    where: {
      id,
      userId: user.id,
    },
  });

  revalidatePath("/dashboard");
}
