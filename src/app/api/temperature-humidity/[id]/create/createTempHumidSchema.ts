import { z } from "zod"

export enum MushroomStage {
  INOCULATION,
  COLONIZATION,
  FRUITING,
  HARVESTING,
}

export const createTempHumidSchema = z.object({
  temperature: z.number(),
  humidity: z.number(),
  hourOfDay: z.number().int().min(0).max(23),
  minute: z
    .number()
    .int()
    .min(0)
    .max(59)
    .refine((value) => [0, 15, 30, 45].includes(value), {
      message: "minute must be one of 0, 15, 30, or 45",
    }),
  mushroomStage: z.enum([
    "INOCULATION",
    "COLONIZATION",
    "FRUITING",
    "HARVESTING",
  ]),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
})
