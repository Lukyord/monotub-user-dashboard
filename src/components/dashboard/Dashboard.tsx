import prisma from "@prisma_/client"

import DashboardMonotubSelector from "./DashboardMonotubSelector"
import DashboardHighlights from "./DashboardHighlights"

type DashboardProps = {
  userId: string
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Dashboard({
  userId,
  searchParams,
}: DashboardProps) {
  const userMonotubs = await prisma.monotub.findMany({
    where: {
      userIDs: {
        has: userId,
      },
    },
  })

  return (
    <div>
      <DashboardMonotubSelector monotubs={userMonotubs} />
      <DashboardHighlights
        searchParams={searchParams}
        monotubs={userMonotubs}
      />
    </div>
  )
}
