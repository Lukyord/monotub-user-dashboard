import { NextRequest, NextResponse } from "next/server"
import prisma from "@prisma_/client"
import { createTempHumidSchema } from "./createTempHumidSchema"

export async function POST(request: NextRequest, context: any) {
  const { params } = context
  const body = await request.json()
  const validation = createTempHumidSchema.safeParse(body)

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 })
  }

  const newTempHumid = await prisma.temperatureHumidity.create({
    data: {
      date: body.date,
      hourOfDay: body.hourOfDay,
      temperature: body.temperature,
      humidity: body.humidity,
      monotubId: body.monotubId,
    },
  })

  return NextResponse.json(newTempHumid, { status: 201 })
}
