import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"
import { Toaster } from "sonner"

import "./globals.css"

import NavBar from "@/components/common/Navbar/NavBar"

const inter = Inter({ subsets: ["latin"] })
export const metadata: Metadata = {
  title: "Automated Monotub Dashboard",
  description:
    "A web application for monitoring temperature and humidity data collected from IoT devices.",
  authors: [{ name: "Tanabordee Tansiri", url: "https://github.com/Lukyord" }],
  keywords: [
    "Mushroom Monotub",
    "Dashboard",
    "Temperature and Humidity Monitoring",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: { colorPrimary: "#000000" },
        elements: {
          formButtonPrimary:
            "bg-black border border-black border-solid hover:bg-white hover:text-black",
          socialButtonsBlockButton:
            "bg-white border-gray-200 hover:bg-transparent hover:border-black text-gray-600 hover:text-black",
          socialButtonsBlockButtonText: "font-semibold",
          formButtonReset:
            "bg-white border border-solid border-gray-200 hover:bg-transparent hover:border-black text-gray-500 hover:text-black",
          membersPageInviteButton:
            "bg-black border border-black border-solid hover:bg-white hover:text-black",
          card: "bg-[#fafafa]",
        },
      }}
    >
      <html lang="en">
        <body className={`${inter.className} flex min-h-screen flex-col`}>
          <NavBar />
          <Toaster />
          <main className="grow">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  )
}
