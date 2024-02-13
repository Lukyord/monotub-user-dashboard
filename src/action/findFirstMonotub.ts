"use server"

import prisma from "@prisma_/client"

export async function findFirstMonotub(monotubId: string) {
  const monotubExists = await prisma.monotub.findFirst({
    where: { id: monotubId },
  })

  return monotubExists
}
