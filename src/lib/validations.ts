import { z } from "zod";

export const paginationSchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
});

export const uuidParamSchema = z.object({ id: z.string().uuid("Некорректный идентификатор") });

export const phoneSchema = z
  .string()
  .transform((value) => value.replace(/[\s()-]/g, ""))
  .pipe(z.string().regex(/^\+\d{10,15}$/, "Введите номер в международном формате"));

export const otpSchema = z.string().regex(/^\d{6}$/, "Введите шестизначный код");

