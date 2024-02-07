import { z } from "zod"

export const getTempHumidSchema = z.object({
  monotubId: z.string(),
  from: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  to: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
})
