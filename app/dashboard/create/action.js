"use server";

import slugify from "slugify";

import { prisma } from "@/lib/prisma";

import { getCurrentUser } from "@/lib/auth/auth";

export async function publishExperience(form) {
  const user = await getCurrentUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  let slug = slugify(form.title, {
    lower: true,

    strict: true,
  });

  const exists = await prisma.experience.findUnique({
    where: { slug },
  });

  if (exists) {
    slug = `${slug}-${Date.now()}`;
  }

  await prisma.experience.create({
    data: {
      title: form.title,

      occasion: form.occasion,

      theme: form.theme,

      story: form.story,

      recipientName: form.recipientName,

      senderName: form.senderName,

      slug,

      published: true,

      userId: user.id,
    },
  });

  return slug;
}
