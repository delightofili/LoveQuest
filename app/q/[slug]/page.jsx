import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

import LoveQuestPlayer from "@/components/player/LoveQuestPlayer";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const experience = await prisma.experience.findUnique({
    where: {
      slug,
    },
  });

  if (!experience) {
    return {
      title: "LoveQuest",
      description: "Create unforgettable interactive love experiences.",
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
      title: `For ${experience.recipientName} ❤️`,
      description: experience.title,
      images: ["/og-image.png"],
    },
  };
}

export default async function LoveQuestPage({ params }) {
  const { slug } = await params;

  const experience = await prisma.experience.findUnique({
    where: {
      slug,
    },
  });

  if (!experience || !experience.published) {
    notFound();
  }

  return <LoveQuestPlayer experience={experience} />;
}
