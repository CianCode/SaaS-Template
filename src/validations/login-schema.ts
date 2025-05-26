import { z } from "zod";

/**
 * Zod schema for user login form validation.
 */

export const loginSchema = z.object({
  email: z.string().email("Invalid email address.").toLowerCase().trim(),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .max(100, "Password must be at most 100 characters."),

  rememberMe: z.boolean().optional(),
});

/**
 * Inferred TypeScript type from `loginSchema`.
 */

export type LoginFormValues = z.infer<typeof loginSchema>;
