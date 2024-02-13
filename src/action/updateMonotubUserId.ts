"use server"

import prisma from "@prisma_/client"

export async function updateMonotubUserId(monotubId: string, userId: string) {
  const updatedMonotub = await prisma.monotub.update({
    where: { id: monotubId },
    data: {
      userIDs: {
        push: userId,
      },
    },
  })

  return updatedMonotub
}
