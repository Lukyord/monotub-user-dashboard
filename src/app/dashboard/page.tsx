import React from "react"
import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"

import DashboardHeader from "@/components/dashboard/DashboardHeader"
import Dashboard from "@/components/dashboard/Dashboard"

export default function DashboardPage() {
  const { userId } = auth()

  if (!userId) {
    redirect("/sign-in")
  }

  return (
    <section className="p-6">
      <DashboardHeader userId={userId} />
      <Dashboard userId={userId}/>
    </section>
  )
}
