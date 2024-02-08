import React from "react"
import Link from "next/link"
import { SignedIn, UserButton } from "@clerk/nextjs"

import { GiMushroomGills } from "react-icons/gi"
import NavBarLink from "./NavBarLink"

export default function NavBar() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/dashboard", label: "Dashboard" },
  ]

  return (
    <nav className="mb-5 flex h-14 items-center justify-between border-b px-5">
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
    </nav>
  )
}