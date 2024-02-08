"use client"

import { SignUp } from "@clerk/nextjs"

export default function Page() {
  return (
    <div className="flex items-center justify-center p-10">
      <SignUp signInUrl="/sign-in" />
    </div>
  )
}
