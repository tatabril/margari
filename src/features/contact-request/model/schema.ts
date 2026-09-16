import { z } from "zod";

export const contactRequestSchema = z.object({
  name: z.string().min(2, "Укажите имя"),
  phone: z
    .string()
    .min(10, "Укажите телефон")
    .regex(/^[+\d\s()-]+$/, "Некорректный телефон"),
  message: z.string().max(500).optional(),
});

export type ContactRequestValues = z.infer<typeof contactRequestSchema>;
