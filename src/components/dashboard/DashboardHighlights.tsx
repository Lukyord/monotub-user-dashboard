import { Monotub, TemperatureHumidity } from "@prisma_/generated/client"
import { WiHumidity } from "react-icons/wi"
import { FaTemperatureHigh } from "react-icons/fa"
import { GiMushroom } from "react-icons/gi"
import { PiPulse } from "react-icons/pi"

import Highlight from "./Highlight"

type DashboardHighlightsProps = {
  searchParams: { [key: string]: string | string[] | undefined }
  monotubs: Monotub[]
  TempHumids: TemperatureHumidity[]
}

export default function DashboardHighlights({
  searchParams,
  monotubs,
  TempHumids,
}: DashboardHighlightsProps) {
  const currentStatus =
    TempHumids.length > 0
      ? TempHumids.sort(
          (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
        )[0]
      : null
  const totalTemperature = TempHumids.reduce(
    (sum, entry) => sum + entry.temperature,
    0
  )
  const totalHumidity = TempHumids.reduce(
    (sum, entry) => sum + entry.humidity,
    0
  )
  const averageTemperature =
    TempHumids.length > 0 ? totalTemperature / TempHumids.length : 0
  const averageHumidity =
    TempHumids.length > 0 ? totalHumidity / TempHumids.length : 0

  const highlights = [
    {
      title: "Current Status",
      content: `${currentStatus?.temperature || 0}°, ${currentStatus?.humidity || 0}%`,
      description: "Current Status of the monotub",
      icon: <PiPulse size={24} />,
    },
    {
      title: "Stage Indicator",
      content: currentStatus?.mushroomStage || "N/A",
      description: "Current mushroom stage",
      icon: <GiMushroom size={24} />,
    },
    {
      title: "Average Temperature",
      content: `${averageTemperature.toFixed(2)}°`,
      description: "Average temperature",
      icon: <FaTemperatureHigh size={24} />,
    },
    {
      title: "Average Humidity",
      content: `${averageHumidity.toFixed(2)}%`,
      description: "Average Humidity",
      icon: <WiHumidity size={30} />,
    },
  ]

  return (
    <div className="grid gap-4 py-4 md:grid-cols-2 lg:grid-cols-4">
      {highlights.map((highlight, index) => (
        <Highlight
          key={index}
          title={highlight.title}
          content={highlight.content}
          description={highlight.description}
          icon={highlight.icon}
        />
      ))}
    </div>
  )
}
