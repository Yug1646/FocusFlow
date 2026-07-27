import { z } from "zod";

export const changePasswordSchema = z
  .object({
    body: z.object({
      oldPassword: z.string().min(1, "Current password is required"),
      newPassword: z
        .string()
        .min(6, "New password must be at least 6 characters"),
    }),
  })
  .refine((data) => data.body.oldPassword !== data.body.newPassword, {
    message: "New password must be different from current password",
    path: ["body", "newPassword"],
  });

export const updateUserSchema = z.object({
  body: z.object({
    username: z.string().min(1, "Username should be valid").optional(),
    email: z.email("Invalid email format").optional(),
  }),
});
