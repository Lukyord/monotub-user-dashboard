import { z } from "zod"

export const createTempHumidSchema = z.object({
  temperature: z.number(),
  humidity: z.number(),
  hourOfDay: z.number().int().min(0).max(23),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  monotubId: z.string(),
})
