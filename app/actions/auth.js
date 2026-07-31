"use server";

import { loginUser, logoutUser, registerUser } from "@/lib/auth/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function registerAction(data) {
  try {
    await registerUser(data);
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
  revalidatePath("/", "layout");
  redirect("/dashboard");
}

export async function loginAction(data) {
  try {
    await loginUser(data);
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
  revalidatePath("/", "layout");
  redirect("/dashboard");
}

export async function logoutAction() {
  await logoutUser();
  redirect("/");
}
