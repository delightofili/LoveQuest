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

  return {
    title: `For ${experience.recipientName} ❤️`,

    description: experience.title,

    openGraph: {
      title: `For ${experience.recipientName} ❤️`,

      description: experience.title,

      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title: `For ${experience.recipientName}`,

      description: experience.title,

      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
        },
      ],
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
