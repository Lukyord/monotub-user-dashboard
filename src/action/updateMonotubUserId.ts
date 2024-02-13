"use server"

import prisma from "@prisma_/client"
import { revalidatePath } from "next/cache"

export async function updateMonotubUserId(monotubId: string, userId: string) {
  const existingMonotub = await prisma.monotub.findUnique({
    where: { id: monotubId },
    select: { userIDs: true },
  })

  if (!existingMonotub) {
    throw new Error("Monotub not found")
  }

  if (existingMonotub.userIDs.includes(userId)) {
    throw new Error("User ID already exists in the array")
  }

  const updatedMonotub = await prisma.monotub.update({
    where: { id: monotubId },
    data: {
      userIDs: {
        push: userId,
      },
    },
  })

  revalidatePath("/dashboard")

  return updatedMonotub
}
