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
  const formatHourlyTime = (hour: number) => {
    const paddedHour = hour.toString().padStart(2, "0")
    return `${paddedHour}:00`
  }

  const preparedTempHumidData = []
  for (let hour = 0; hour < 24; hour++) {
    const matchingData = TempHumids.filter((data) => data.hourOfDay === hour)
    if (matchingData.length > 0) {
      const totalTemperature = matchingData.reduce(
        (acc, cur) => acc + cur.temperature,
        0
      )
      const totalHumidity = matchingData.reduce(
        (acc, cur) => acc + cur.humidity,
        0
      )
      const averageTemperature = totalTemperature / matchingData.length
      const averageHumidity = totalHumidity / matchingData.length
      preparedTempHumidData.push({
        hourOfDay: hour,
        date: matchingData[0].date, // Assuming date is the same for all data points within the same hour
        temperature: averageTemperature.toFixed(2),
        humidity: averageHumidity.toFixed(2),
        mushroomStage: matchingData[0].mushroomStage, // Assuming mushroomStage is the same for all data points within the same hour
      })
    } else {
      preparedTempHumidData.push({
        hourOfDay: hour,
        date: null,
        temperature: null,
        humidity: null,
        mushroomStage: "N/A",
      })
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
          <XAxis dataKey={({ hourOfDay = 0 }) => formatHourlyTime(hourOfDay)} />
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
