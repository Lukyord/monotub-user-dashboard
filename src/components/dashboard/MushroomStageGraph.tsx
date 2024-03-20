import { useSearchParams } from "next/navigation"
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Bar,
  BarChart,
  Cell,
} from "recharts"
import { addDays, format, parseISO } from "date-fns"

import { TemperatureHumidity } from "@prisma_/generated/client"

import { CustomTooltip } from "./CustomStageTooltip"

type MushroomStageGraphProps = {
  TempHumids: TemperatureHumidity[]
}

export default function MushroomStageGraph({
  TempHumids,
}: MushroomStageGraphProps) {
  const searchParams = useSearchParams()
  const fromDate = parseISO(searchParams.get("from") || "")
  const to = searchParams.get("to")
  const toDate =
    to === "null" || to === null
      ? fromDate
      : parseISO(searchParams.get("to") || "")

  const calculateFillColor = (stage: string) => {
    switch (stage) {
      case "INOCULATION":
        return "#8884d8"
      case "COLONIZATION":
        return "#82ca9d"
      case "FRUITING":
        return "#ffc658"
      case "HARVESTING":
        return "#d82626"
      default:
        return "transparent"
    }
  }

  const preparedMushroomStageData = []
  let currentDate = fromDate
  while (currentDate <= toDate) {
    const matchingDataOfCurrentDate = TempHumids.filter(
      (data) => data.date === format(currentDate, "yyyy-MM-dd")
    )

    const stageCounts: { [key: string]: number } = {}
    matchingDataOfCurrentDate.forEach((data) => {
      stageCounts[data.mushroomStage] =
        (stageCounts[data.mushroomStage] || 0) + 1
    })

    let mostFrequentStage = null
    let maxCount = 0
    for (const stage in stageCounts) {
      if (stageCounts[stage] > maxCount) {
        mostFrequentStage = stage
        maxCount = stageCounts[stage]
      }
    }

    preparedMushroomStageData.push({
      date: format(currentDate, "dd/MM"),
      mushroomStage: mostFrequentStage,
      constantValue: 1,
    })
    currentDate = addDays(currentDate, 1)
  }

  return (
    <>
      <h2 className="my-6 text-3xl font-bold">Mushroom Stage Graph</h2>
      <ResponsiveContainer width="100%" height="100%">
        {!preparedMushroomStageData.every(
          (data) => data.mushroomStage === null
        ) ? (
          <BarChart
            width={500}
            height={150}
            data={preparedMushroomStageData}
            margin={{
              top: 5,
              right: 70,
              left: 70,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis hide />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar
              dataKey="constantValue"
              stackId="mushroomStage"
              name="Inoculation"
              fill="#8884d8"
              barSize={400}
            >
              {preparedMushroomStageData.map((entry, index) => (
                <Cell
                  cursor="pointer"
                  fill={calculateFillColor(entry.mushroomStage || "")}
                  key={`cell-${index}`}
                />
              ))}
            </Bar>
            <Bar
              dataKey=""
              stackId="mushroomStage"
              name="Colonization"
              fill="#82ca9d"
            />
            <Bar
              dataKey=""
              stackId="mushroomStage"
              name="Fruiting"
              fill="#ffc658"
            />
            <Bar
              dataKey=""
              stackId="mushroomStage"
              name="Harvesting"
              fill="#d82626"
            />
          </BarChart>
        ) : (
          <p className="my-10 h-full w-full text-center text-2xl">
            No data available for the selected date range
          </p>
        )}
      </ResponsiveContainer>
      <div className="pb-12"></div>
    </>
  )
}
