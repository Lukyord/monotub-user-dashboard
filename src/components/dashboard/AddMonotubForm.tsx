"use client"

import { addUserIdsToMonotubFormSchema } from "@/types/dashboard/addUserIdtoMonotub"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import prisma from "@prisma_/client"

import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { toast } from "sonner"
import { findFirstMonotub } from "@/action/findFirstMonotub"
import { updateMonotubUserId } from "@/action/updateMonotubUserId"

type AddMonotubFormProps = {
  userId: string
}

export default function AddMonotubForm({ userId }: AddMonotubFormProps) {
  const form = useForm<z.infer<typeof addUserIdsToMonotubFormSchema>>({
    resolver: zodResolver(addUserIdsToMonotubFormSchema),
    defaultValues: {
      monotubId: "",
    },
  })

  //e2e4c012-7021-4779-bb1a-541d00c25554
  const handleSubmit = async (
    values: z.infer<typeof addUserIdsToMonotubFormSchema>
  ) => {
    const { monotubId } = values

    const monotubExists = await findFirstMonotub(monotubId)

    if (!monotubExists) {
      return toast.error("Something went wrong", {
        description: "Monotub ID does not exist. Please try again.",
      })
    }

    const updatedMonotub = await updateMonotubUserId(monotubId, userId)

    if (!updatedMonotub) {
      return toast.error("Something went wrong", {
        description: "Monotub could not be added. Please try again.",
      })
    }

    return toast.success("Success!", {
      description: "Monotub added successfully.",
    })
  }

  return (
    <Form {...form}>
      <form className="flex gap-3" onSubmit={form.handleSubmit(handleSubmit)}>
        <FormField
          control={form.control}
          name="monotubId"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  id="monotub-id"
                  placeholder="Your Monotub ID"
                  {...field}
                  autoComplete="off"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Add</Button>
      </form>
    </Form>
  )
}
