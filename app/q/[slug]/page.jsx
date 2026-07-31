import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

import LoveQuestPlayer from "@/components/player/LoveQuestPlayer";

export async function generateMetadata({ params }) {
  const experience = await prisma.experience.findUnique({
    where: {
      slug: params.slug,
    },
  });

  if (!experience) {
    return {
      title: "LoveQuest",
    };
  }

  const firstMemory = experience.story?.[0];

  return {
    title: experience.title,

    description: `A special LoveQuest created by ${experience.senderName} for ${experience.recipientName}.`,

    openGraph: {
      title: experience.title,

      description: `A special LoveQuest created by ${experience.senderName}.`,

      images: firstMemory?.image
        ? [
            {
              url: firstMemory.image,
            },
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",

      title: experience.title,

      description: `A special LoveQuest.`,

      images: firstMemory?.image ? [firstMemory.image] : [],
    },
  };
}

export default async function LoveQuestPage({ params }) {
  const experience = await prisma.experience.findUnique({
    where: {
      slug: params.slug,
    },
  });

  if (!experience || !experience.published) {
    notFound();
  }

  await prisma.experience.update({
    where: {
      id: experience.id,
    },
    data: {
      views: {
        increment: 1,
      },
    },
  });

  return <LoveQuestPlayer experience={experience} />;
}
