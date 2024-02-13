import { NextResponse } from "next/server"
import prisma from "@prisma_/client"

export async function GET(context: any) {
  const { params } = context

  const monotub = await prisma.monotub.findFirst({
    where: { id: params.id },
  })

  return NextResponse.json(monotub)
}
