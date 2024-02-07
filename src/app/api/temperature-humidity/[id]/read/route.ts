import { NextRequest, NextResponse } from "next/server"
import { getTempHumidSchema } from "./getTempHumidSchema"
import prisma from "@prisma_/client"

export async function POST(request: NextRequest, context: any) {
  const { params } = context
  const body = await request.json()

  const validation = getTempHumidSchema.safeParse(body)

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 })
  }

  const fromDate = new Date(body.from)
  const toDate = new Date(body.to)

  const tempHumids = await prisma.temperatureHumidity.findMany({
    where: {
      monotubId: body.monotubId,
      createdAt: {
        gte: fromDate,
        lte: toDate,
      },
    },
  })

  return NextResponse.json(tempHumids)
}
