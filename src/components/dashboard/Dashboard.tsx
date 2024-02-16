import prisma from "@prisma_/client"

import DashboardMonotubSelector from "./DashboardMonotubSelector"
import DashboardHighlights from "./DashboardHighlights"
import DashboardGraph from "./DashboardGraph"

type DashboardProps = {
  userId: string
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Dashboard({
  userId,
  searchParams,
}: DashboardProps) {
  let fromDate, toDate
  fromDate = new Date(searchParams.from as string)
  toDate = new Date(searchParams.to as string)

  fromDate.setHours(fromDate.getHours() + 7)
  toDate.setHours(toDate.getHours() + 7)

  const userMonotubs = await prisma.monotub.findMany({
    where: {
      userIDs: {
        has: userId,
      },
    },
  })
  const TempHumids = await prisma.temperatureHumidity.findMany({
    where: {
      monotubId: {
        equals: searchParams.monotub as string,
      },
    },
  })

  const TempHumidsFiltered = TempHumids.filter((entry) => {
    const entryDate = new Date(entry.date)
    const fromDate = new Date(searchParams.from as string)
    const toDate =
      searchParams.to !== "null"
        ? new Date(searchParams.to as string)
        : fromDate

    return entryDate >= fromDate && entryDate <= toDate
  })

  return (
    <div>
      <DashboardMonotubSelector
        monotubs={userMonotubs}
        searchParams={searchParams}
      />
      <DashboardHighlights
        searchParams={searchParams}
        monotubs={userMonotubs}
        TempHumids={TempHumidsFiltered}
      />
      <div className="my-6 flex h-[50vh] w-[95vw] justify-center sm:h-[70vh]">
        <DashboardGraph TempHumids={TempHumidsFiltered} />
      </div>
    </div>
  )
}
