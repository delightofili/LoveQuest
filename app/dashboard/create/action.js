"use server";

import slugify from "slugify";

import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth/auth";

export async function publishExperience(form) {
  const user = await getCurrentUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  // Validate memories
  if (!Array.isArray(form.story) || form.story.length === 0) {
    throw new Error("You must add at least one memory.");
  }

  const missingImage = form.story.some(
    (moment) => !moment.image || moment.image.trim() === "",
  );

  if (missingImage) {
    throw new Error("Every memory must have a photo.");
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
