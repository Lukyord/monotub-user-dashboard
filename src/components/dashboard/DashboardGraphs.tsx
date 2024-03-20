"use client"

import React from "react"

import { TemperatureHumidity } from "@prisma_/generated/client"
import TempHumidGraph from "./TempHumidGraph"
import MushroomStageGraph from "./MushroomStageGraph"

type DashboardGraphProps = {
  TempHumids: TemperatureHumidity[]
}

export default function DashboardGraphs({ TempHumids }: DashboardGraphProps) {
  //disable defaultProps warning for nowx
  const error = console.error
  console.error = (...args: any) => {
    if (/defaultProps/.test(args[0])) return
    error(...args)
  }

  return (
    <div className="h-full w-[100%]">
      <TempHumidGraph TempHumids={TempHumids} />
      <MushroomStageGraph TempHumids={TempHumids} />
    </div>
  )
}
