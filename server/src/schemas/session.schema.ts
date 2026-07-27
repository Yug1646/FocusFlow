import { z } from "zod";

export const createSessionSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title is required"),
  }),
});

export const updateSessionSchema = z.object({
  body: z.object({
    title: z.string().min(1).optional(),
  }),
});
