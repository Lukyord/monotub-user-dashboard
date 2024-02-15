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
} from "recharts"

type DashboardGraphProps = {
  TempHumids: TemperatureHumidity[]
}

export default function DashboardGraph({ TempHumids }: DashboardGraphProps) {
  //disable defaultProps warning for now
  const error = console.error
  console.error = (...args: any) => {
    if (/defaultProps/.test(args[0])) return
    error(...args)
  }

  // Function to format hourOfDay and minute to quarter-hourly time format
  const formatQuarterlyTime = (hour: number, minute: number) => {
    const paddedHour = hour.toString().padStart(2, "0")
    const paddedMinute = Math.floor(minute / 15) * 15
    return `${paddedHour}:${paddedMinute.toString().padStart(2, "0")}`
  }

  // Prepare data with missing quarter-hourly time intervals
  const preparedData = []
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
      const matchingData = TempHumids.find(
        (data) => data.hourOfDay === hour && data.minute === minute
      )
      if (matchingData) {
        preparedData.push(matchingData)
      } else {
        preparedData.push({
          hourOfDay: hour,
          minute: minute,
          temperature: null,
          humidity: null,
        })
      }
    }
  }
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={preparedData}
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
  )
}
