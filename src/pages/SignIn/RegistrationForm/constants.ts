"use client";

import { z } from "zod";

export const registrationSchema = z
  .object({
    emailMob: z
      .string()
      .min(1, { message: "Email or phone number is required" })
      .max(40, { message: "Maximum 40 chards alowed" })
      .regex(
        /^(?:\+?\d{1,3}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}|\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b)$/,
        { message: "Invalid email or phone format" }
      ),

    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .max(40, { message: "Maximum 40 chards alowed" })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      }),

    confirmPassword: z
      .string()
      .min(8, { message: "Confirm password must be at least 8 characters" }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Passwords don't match",
        path: ["confirmPassword"], // Specify the path to the confirmPassword field
      });
    }
  });
