"use client"

import { addUserIdsToMonotubFormSchema } from "@/types/dashboard/addUserIdtoMonotub"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { updateMonotubUserId } from "@/action/updateMonotubUserId"
import { errorMessage } from "@/lib/errorMessage"

import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { toast } from "sonner"

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

  const handleSubmit = async (
    values: z.infer<typeof addUserIdsToMonotubFormSchema>
  ) => {
    const { monotubId } = values

    try {
      const updatedMonotub = await updateMonotubUserId(monotubId, userId)

      toast.success("Success!", {
        description: `Monotub ${updatedMonotub.name} added successfully.`,
      })
    } catch (error) {
      return toast.error("Error!", {
        description: errorMessage(error),
      })
    }
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
