import React from "react"
import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"

import DashboardHeader from "@/components/dashboard/DashboardHeader"
import Dashboard from "@/components/dashboard/Dashboard"

export default function DashboardPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const { userId } = auth()

  if (!userId) {
    redirect("/sign-in")
  }

  return (
    <section className="p-6">
      <DashboardHeader userId={userId} />
      <Dashboard userId={userId} searchParams={searchParams} />
    </section>
  )
}
