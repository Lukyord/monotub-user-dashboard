"use client"

import { useState } from "react"
import Link from "next/link"

import { Monotub } from "@prisma_/generated/client"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { CalendarDateRangePicker } from "../common/CalendarDateRangePicker"

type DashboardMonotubSelectorProps = {
  monotubs: Monotub[]
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function DashboardMonotubSelector({
  monotubs,
  searchParams,
}: DashboardMonotubSelectorProps) {
  const [value, setValue] = useState("")
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:items-center">
      <CalendarDateRangePicker />

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {value
              ? monotubs.find((monotub) => monotub.id === value)?.name
              : "Select monotub..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search framework..." />
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {monotubs.map((monotub) => (
                <Link
                  key={monotub.id}
                  href={`?${new URLSearchParams({
                    monotub: monotub.id,
                  })}`}
                  scroll={false}
                >
                  <CommandItem
                    value={monotub.id}
                    onSelect={(currentId) => {
                      setValue(currentId)
                      setOpen(false)
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === monotub.id ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {monotub.name}
                  </CommandItem>
                </Link>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}
