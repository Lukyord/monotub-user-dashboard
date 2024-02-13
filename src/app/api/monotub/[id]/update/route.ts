import { NextRequest, NextResponse } from "next/server"
import prisma from "@prisma_/client"

import { updateMonotubSchema } from "./updateMonotubSchema"

export async function PUT(request: NextRequest, context: any) {
  const { params } = context
  const body = await request.json()

  const validation = updateMonotubSchema.safeParse(body)

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 })
  }

  const monotub = await prisma.monotub.update({
    where: { id: params.id },
    data: {
      userIDs: {
        push: validation.data.userId,
      },
    },
  })

  return NextResponse.json(monotub)
}
