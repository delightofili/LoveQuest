"use server";

import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth/auth";
import { revalidatePath } from "next/cache";

export async function updateProfile(formData) {
  const user = await getCurrentUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  const name = formData.get("name");

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      name,
    },
  });

  revalidatePath("/dashboard", "layout");

  return {
    success: true,
  };
}
