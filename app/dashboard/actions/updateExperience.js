"use server";

import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth/auth";
import { revalidatePath } from "next/cache";

export async function updateExperience(id, form) {
  const user = await getCurrentUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  // Ensure the experience belongs to the current user
  const experience = await prisma.experience.findFirst({
    where: {
      id,
      userId: user.id,
    },
  });

  if (!experience) {
    throw new Error("LoveQuest not found.");
  }

  await prisma.experience.update({
    where: {
      id,
    },
    data: {
      title: form.title,
      recipientName: form.recipientName,
      senderName: form.senderName,
      occasion: form.occasion,
      theme: form.theme,
      story: form.story,
    },
  });

  revalidatePath("/dashboard");
  revalidatePath("/dashboard/experiences");
  revalidatePath(`/dashboard/experiences/${id}`);
  revalidatePath(`/q/${experience.slug}`);

  return {
    success: true,
  };
}
