import React from "react"
import Link from "next/link"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

import { GiMushroomGills } from "react-icons/gi"
import NavBarLink from "./NavBarLink"
import { Button } from "@/components/ui/button"

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

        <ul className="flex gap-8">
          {links.map((link, index) => (
            <React.Fragment key={index}>
              <NavBarLink link={link} />
            </React.Fragment>
          ))}
        </ul>
      </div>

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
    </nav>
  )
}
