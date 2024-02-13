import { z } from "zod"

export const addUserIdsToMonotubFormSchema = z.object({
  monotubId: z.string().length(36, {
    message: "Monotub ID must be 36 characters long",
  }),
})
