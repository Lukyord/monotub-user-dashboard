import React from "react"

import AddMonotubForm from "./AddMonotubForm"

type DashboardHeaderProps = {
  userId: string
}

export default function DashboardHeader({ userId }: DashboardHeaderProps) {
  return (
    <div className="flex justify-between">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <AddMonotubForm userId={userId} />
    </div>
  )
}
