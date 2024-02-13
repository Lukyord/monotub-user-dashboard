import React from "react"

import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"
import AddMonotubForm from "./AddMonotubForm"

export default function DashboardHeader() {
  const { userId } = auth()

  if (!userId) {
    redirect("/sign-in")
  }

  return (
    <div className="flex justify-between">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <AddMonotubForm userId={userId} />
    </div>
  )
}
