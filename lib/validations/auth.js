import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().trim().min(2, "Name is too short"),
  email: z.string().trim().email("Invalid email").toLowerCase(),
  password: z.string().min(8, "password must be at least 8 characters"),
});

export const loginSchema = z.object({
  email: z.string().trim().email().toLowerCase(),

  password: z.string().min(1),
});
