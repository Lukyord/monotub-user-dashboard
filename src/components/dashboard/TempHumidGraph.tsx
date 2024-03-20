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
  ReferenceArea,
} from "recharts"

import { TemperatureHumidity } from "@prisma_/generated/client"

type TempHumidGraphProps = {
  TempHumids: TemperatureHumidity[]
}

export default function TempHumidGraph({ TempHumids }: TempHumidGraphProps) {
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

  return (
    <>
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
          <ReferenceArea
            yAxisId="left"
            y1={22}
            y2={28}
            stroke="#8884d8"
            fill="#8884d8"
            strokeOpacity={0.1}
            label="Ideal Temperature"
          />
          <ReferenceArea
            yAxisId="right"
            y1={80}
            y2={100}
            stroke="#82ca9d"
            fill="#82ca9d"
            strokeOpacity={0.1}
            label="Ideal Humidity"
          />

          <Line
            yAxisId="left"
            type="monotone"
            name="Temperature (°C)"
            dataKey="temperature"
            stroke="#8884d8"
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
    </>
  )
}
