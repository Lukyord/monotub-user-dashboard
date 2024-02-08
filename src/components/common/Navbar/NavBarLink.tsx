"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

type NavBarLinkProps = {
  link: {
    href: string
    label: string
  }
}

export default function NavBarLink({ link }: NavBarLinkProps) {
  const currentPath = usePathname()

  return (
    <li>
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
  )
}
