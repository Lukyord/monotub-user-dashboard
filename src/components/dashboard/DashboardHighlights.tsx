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
  const highlights = [
    {
      title: "Current Status",
      content: "25",
      description: "average temperature",
      icon: <PiPulse size={24} />,
    },
    {
      title: "Stage Indicator",
      content: "25",
      description: "average temperature",
      icon: <GiMushroom size={24} />,
    },
    {
      title: "Average Temperature",
      content: "25",
      description: "average temperature",
      icon: <FaTemperatureHigh size={24} />,
    },
    {
      title: "Average Humidity",
      content: "25",
      description: "average temperature",
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
