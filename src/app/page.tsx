import { Button } from "@/components/ui/button"
import prisma from "@prisma_/client"

async function getTempAndHumidity() {
  const records = await prisma.temperatureHumidity.findMany({})

  return records
}

export default async function Home() {
  const records = await getTempAndHumidity()

  return (
    <div>
      <Button className="m-4">Check Temp & Humidity</Button>
      <ul className="px-8 py-4">
        {records.map((record) => (
          <li key={record.id}>
            <p>Date: {record.date}</p>
            <p>Time: {record.hourOfDay}:00</p>
            <p>Temperature: {record.temperature}</p>
            <p>Humidity: {record.humidity}</p>
            <br />
          </li>
        ))}
      </ul>
    </div>
  )
}
