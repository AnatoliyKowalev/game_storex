"use client";

import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .max(40, { message: "Maximum 40 chards alowed" })
    .email({ message: "Invalid email format" }),

  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .max(40, { message: "Maximum 40 chards alowed" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    }),
});
