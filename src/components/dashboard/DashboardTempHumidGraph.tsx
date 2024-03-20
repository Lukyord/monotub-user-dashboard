"use client"

import React from "react"

import { TemperatureHumidity } from "@prisma_/generated/client"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
  Bar,
  BarChart,
  Cell,
} from "recharts"
import { useSearchParams } from "next/navigation"
import { addDays, format, parseISO } from "date-fns"

type DashboardGraphProps = {
  TempHumids: TemperatureHumidity[]
}

export default function DashboardTempHumidGraph({
  TempHumids,
}: DashboardGraphProps) {
  const searchParams = useSearchParams()
  const fromDate = parseISO(searchParams.get("from") || "")
  const to = searchParams.get("to")
  const toDate =
    to === "null" || to === null
      ? fromDate
      : parseISO(searchParams.get("to") || "")

  //disable defaultProps warning for nowx
  const error = console.error
  console.error = (...args: any) => {
    if (/defaultProps/.test(args[0])) return
    error(...args)
  }

  const formatQuarterlyTime = (hour: number, minute: number) => {
    const paddedHour = hour.toString().padStart(2, "0")
    const paddedMinute = Math.floor(minute / 15) * 15
    return `${paddedHour}:${paddedMinute.toString().padStart(2, "0")}`
  }

  // Prepare data with missing quarter-hourly time intervals
  const preparedTempHumidData = []
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
      const matchingData = TempHumids.find(
        (data) => data.hourOfDay === hour && data.minute === minute
      )
      if (matchingData) {
        preparedTempHumidData.push(matchingData)
      } else {
        preparedTempHumidData.push({
          hourOfDay: hour,
          minute: minute,
          date: null,
          temperature: null,
          humidity: null,
          mushroomStage: "N/A",
        })
      }
    }
  }

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
    <div className="w-[100%]">
      <h2 className="my-6 text-3xl font-bold">
        Temperature and Humidity Graph
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={preparedTempHumidData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey={({ hourOfDay = 0, minute = 0 }) =>
              formatQuarterlyTime(hourOfDay, minute)
            }
          />
          <YAxis
            yAxisId="left"
            domain={[15, 40]}
            label={{
              value: "Temperature (°C)",
              angle: -90,
              position: "left",
            }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            domain={[0, 100]}
            label={{
              value: "Humidity (%)",
              angle: -90,
              position: "insideRight",
            }}
          />
          <Tooltip />
          <Legend />
          <Tooltip />
          <Legend />
          <ReferenceLine
            yAxisId="right"
            y={80}
            label="Optimal Humidity"
            stroke="blue"
          />
          <Line
            yAxisId="left"
            type="monotone"
            name="Temperature (°C)"
            dataKey="temperature"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line
            yAxisId="right"
            type="monotone"
            name="Humidity (%)"
            dataKey="humidity"
            stroke="#82ca9d"
          />
        </LineChart>
      </ResponsiveContainer>

      <h2 className="my-6 text-3xl font-bold">Mushroom Stage Graph</h2>
      <ResponsiveContainer width="100%" height="100%">
        {preparedMushroomStageData.length > 0 ? (
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
            <Tooltip />
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
    </div>
  )
}
