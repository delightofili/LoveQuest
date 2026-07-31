import crypto from "crypto";
import { prisma } from "@/lib/prisma";

const SESSION_DAYS = 30;

export async function createSession(userId) {
  const token = crypto.randomBytes(32).toString("hex");

  const expiresAt = new Date();

  expiresAt.setDate(expiresAt.getDate() + SESSION_DAYS);

  const session = await prisma.session.create({
    data: {
      token,
      userId,
      expiresAt,
    },
  });

  return session;
}

export async function getSession(token) {
  if (!token) return null;

  const session = await prisma.session.findUnique({
    where: {
      token,
    },
    include: {
      user: true,
    },
  });

  if (!session) return null;

  if (session.expiresAt < new Date()) {
    await prisma.session.delete({
      where: {
        id: session.id,
      },
    });

    return null;
  }

  return session;
}

export async function deleteSession(token) {
  if (!token) return;

  await prisma.session.deleteMany({
    where: {
      token,
    },
  });
}
