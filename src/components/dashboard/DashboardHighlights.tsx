import { Monotub } from "@prisma_/generated/client"

type DashboardHighlightsProps = {
  searchParams: { [key: string]: string | string[] | undefined }
  monotubs: Monotub[]
}

export default function DashboardHighlights({
  searchParams,
}: DashboardHighlightsProps) {
  return <div>{searchParams?.monotub}</div>
}
