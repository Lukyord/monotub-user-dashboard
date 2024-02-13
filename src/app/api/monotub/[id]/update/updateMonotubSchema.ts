import { z } from "zod"

export const updateMonotubSchema = z.object({
  monotubId: z.string().length(36, {
    message: "Monotub ID must be 36 characters long",
  }),
  userId: z.string(),
})
