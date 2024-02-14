import React from "react"

import AddMonotubForm from "./AddMonotubForm"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"
import { Button } from "../ui/button"

type DashboardHeaderProps = {
  userId: string
}

export default function DashboardHeader({ userId }: DashboardHeaderProps) {
  return (
    <div className="flex justify-between">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Add Monotub</Button>
        </DialogTrigger>
        <DialogContent className="w-[90%] sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Monotub</DialogTitle>
            <DialogDescription>
              Enter your monotub UUID to add it to your dashboard.
            </DialogDescription>
          </DialogHeader>
          <AddMonotubForm userId={userId} />
        </DialogContent>
      </Dialog>
    </div>
  )
}
