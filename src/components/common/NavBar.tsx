"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { GiMushroomGills } from "react-icons/gi"

export default function NavBar() {
  const currentPath = usePathname()

  const links = [
    { href: "/", label: "Dashboard" },
    { href: "/issues", label: "Issues" },
  ]

  return (
    <nav className="mb-5 flex h-14 items-center gap-8 border-b px-5">
      <Link href="/">
        <GiMushroomGills size={30} />
      </Link>
      <ul className="flex gap-8">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className={`
                    ${cn({
                      "text-zinc-800": currentPath === link.href,
                      "text-zinc-500": currentPath !== link.href,
                      "transition-colors hover:text-zinc-800": true,
                    })}
                  `}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
