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
      date: validation.data.date,
      hourOfDay: validation.data.hourOfDay,
      temperature: validation.data.temperature,
      humidity: validation.data.humidity,
      minute: validation.data.minute,
      mushroomStage: validation.data.mushroomStage,
      monotub: { connect: { id: params.id } },
    },
  })

  return NextResponse.json(newTempHumid, { status: 201 })
}
