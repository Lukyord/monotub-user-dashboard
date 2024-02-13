import prisma from "@prisma_/client"

type DashboardProps = {
  userId: string
}

export default async function Dashboard({ userId }: DashboardProps) {
  const userMonotubs = await prisma.monotub.findMany({
    where: {
      userIDs: {
        has: userId,
      },
    },
  })

  return <div>{userMonotubs.map((monotub) => monotub.name)}</div>
}
