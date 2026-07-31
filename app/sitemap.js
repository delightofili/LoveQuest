import { prisma } from "@/lib/prisma";

export default async function sitemap() {
  const base = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

  const experiences = await prisma.experience.findMany({
    where: {
      published: true,
    },

    select: {
      slug: true,
    },
  });

  return [
    {
      url: base,

      priority: 1,
    },

    {
      url: `${base}/explore`,

      priority: 0.9,
    },

    ...experiences.map((exp) => ({
      url: `${base}/q/${exp.slug}`,

      priority: 0.8,
    })),
  ];
}
