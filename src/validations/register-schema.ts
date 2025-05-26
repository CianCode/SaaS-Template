import { z } from "zod";

/**
 * Zod schema for user registration form validation.
 */
export const registerSchema = z
  .object({
    name: z
      .string()
      .min(2, "Name must be at least 2 characters.")
      .max(50, "Name must be at most 50 characters.")
      .trim(),

    email: z.string().email("Invalid email address.").toLowerCase().trim(),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters.")
      .max(100, "Password must be at most 100 characters.")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
      .regex(/[0-9]/, "Password must contain at least one number.")
      .regex(
        /[^a-zA-Z0-9]/,
        "Password must contain at least one special character.",
      ),

    confirmPassword: z.string(),

    terms: z.literal(true, {
      errorMap: () => ({
        message: "You must accept the terms and conditions.",
      }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match.",
  });

/**
 * Inferred TypeScript type from `registerSchema`.
 */
export type RegisterFormValues = z.infer<typeof registerSchema>;
