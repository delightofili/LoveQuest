import { prisma } from "@/lib/prisma.js";

import { hashPassword, verifyPassword } from "./hash";

import { createSession, deleteSession, getSession } from "./session";

import {
  setSessionCookie,
  getSessionCookie,
  clearSessionCookie,
} from "./cookies";

import { registerSchema, loginSchema } from "@/lib/validations/auth";

export async function registerUser(data) {
  const parsed = registerSchema.parse(data);

  const existingUser = await prisma.user.findUnique({
    where: {
      email: parsed.email,
    },
  });

  if (existingUser) {
    throw new Error("Email already exists");
  }

  const passwordHash = await hashPassword(parsed.password);

  const user = await prisma.user.create({
    data: {
      name: parsed.name,
      email: parsed.email,
      passwordHash,
    },
  });

  const session = await createSession(user.id);

  await setSessionCookie(session.token, session.expiresAt);

  return user;
}

export async function loginUser(data) {
  const parsed = loginSchema.parse(data);

  const user = await prisma.user.findUnique({
    where: {
      email: parsed.email,
    },
  });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const valid = await verifyPassword(parsed.password, user.passwordHash);

  if (!valid) {
    throw new Error("Invalid credentials");
  }

  const session = await createSession(user.id);

  await setSessionCookie(session.token, session.expiresAt);

  return user;
}

export async function logoutUser() {
  const token = await getSessionCookie();

  await deleteSession(token);

  await clearSessionCookie();
}

export async function getCurrentUser() {
  const token = await getSessionCookie();

  const session = await getSession(token);

  return session?.user ?? null;
}
