import { cookies } from "next/headers";

const COOKIE_NAME = "loveQuest_cookies";

export async function setSessionCookie(token, expiresAt) {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    expires: expiresAt,
    path: "/",
  });
}

export async function getSessionCookie() {
  const cookieStore = await cookies();

  return cookieStore.get(COOKIE_NAME)?.value;
}

export async function clearSessionCookie() {
  const cookieStore = await cookies();

  cookieStore.delete(COOKIE_NAME);
}
