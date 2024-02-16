"use client"
import Link from "next/link"
// import {AiFillHome} from "react-icons/ai";
import {
  HiOutlineHome,
  HiOutlineDocumentDuplicate,
  HiOutlineUserGroup,
} from "react-icons/hi2"
import { usePathname } from "next/navigation"

const links = [
  { name: "Home", href: "/dashboard", icon: HiOutlineHome },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: HiOutlineDocumentDuplicate,
  },
  { name: "Customers", href: "/dashboard/customers", icon: HiOutlineUserGroup },
]

export default function SidebarLinks() {
  const pathname = usePathname()

  return (
    <div>
      {links.map((link) => {
        const LinkIcon = link.icon

        return (
          <Link
            key={link.name}
            href={link.href}
            className={`${pathname === link.href ? "bg-blue-400" : undefined} flex items-center
            justify-start gap-2 h-14 flex p-3 text-black bg-gray-100 hover:bg-blue-100
            hover:shadow-inner duration-200`}
          >
            <LinkIcon className={"w-6 h-6"} />
            <span>{link.name}</span>
          </Link>
        )
      })}
    </div>
  )
}
