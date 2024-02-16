import React from "react"
import Link from "next/link"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

import { GiMushroomGills } from "react-icons/gi"
import { TiThMenu } from "react-icons/ti"

import NavBarLink from "./NavBarLink"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"

export default function NavBar() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/dashboard", label: "Dashboard" },
  ]

  return (
    <nav className="flex items-center justify-between border-b p-5">
      <div className="flex gap-8">
        <Link href="/">
          <GiMushroomGills size={30} />
        </Link>

        <ul className="hidden gap-8 sm:flex">
          {links.map((link, index) => (
            <React.Fragment key={index}>
              <NavBarLink link={link} />
            </React.Fragment>
          ))}
        </ul>
      </div>

      <div className="hidden sm:block">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>
        <SignedOut>
          <div className="flex gap-3">
            <Link href="/sign-in">
              <Button>Sign In</Button>
            </Link>
            <Link href="/sign-up">
              <Button variant="secondary">Sign Up</Button>
            </Link>
          </div>
        </SignedOut>
      </div>

      <div className="block sm:hidden">
        <SignedIn>
          <div className="flex items-center gap-6">
            <UserButton afterSignOutUrl="/" />
            <Drawer>
              <DrawerTrigger asChild>
                <TiThMenu size={30} />
              </DrawerTrigger>
              <DrawerContent>
                <div className="h-[50vh] w-full p-10">
                  <ul className="mt-6 flex flex-col gap-3 text-xl">
                    {links.map((link, index) => (
                      <React.Fragment key={index}>
                        <NavBarLink link={link} />
                      </React.Fragment>
                    ))}
                  </ul>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </SignedIn>
        <SignedOut>
          <div className="flex gap-3">
            <Link href="/sign-in">
              <Button>Sign In</Button>
            </Link>
            <Link href="/sign-up">
              <Button variant="secondary">Sign Up</Button>
            </Link>
          </div>
        </SignedOut>
      </div>
    </nav>
  )
}
