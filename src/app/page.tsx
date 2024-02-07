import { Button } from "@/components/ui/button"
import prisma from "@prisma_/client"

async function getTempAndHumidity() {
  const records = await prisma.temperatureHumidity.findMany({})

  return records
}

export default async function Home() {
  const records = await getTempAndHumidity()
  console.log(records)

  return (
    <div className="bg-slate-500">
      <Button>Check Temp & Humidity</Button>
    </div>
  )
}
