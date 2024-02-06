import Link from "next/link";

import { GiMushroomGills } from "react-icons/gi";

export default function NavBar() {
  const links = [
    { href: "/", label: "Dashboard" },
    { href: "/issues", label: "Issues" },
  ];

  return (
    <nav className="flex gap-8 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <GiMushroomGills size={30} />
      </Link>
      <ul className="flex gap-8">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="text-zinc-500 hover:text-zinc-800 transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
