import Link from "next/link"
import Image from "next/image"
import SidebarLinks from "@/app/ui/dashboard/SidebarLinks"
import { HiPower } from "react-icons/hi2"

export default function SideNav() {
  return (
    <div className={"flex flex-col gap-2 h-full"}>
      <div
        className={
          "flex justify-center items-center bg-blue-400 h-40 rounded duration-200"
        }
      >
        <Link href="/dashboard" className={"p-4"}>
          <Image src="/next.svg" alt="Logo" width={100} height={100} />
        </Link>
      </div>
      <div
        className={
          "flex flex-col justify-between bg-gray-50 h-full rounded overflow-hidden"
        }
      >
        <SidebarLinks />
        <button
          className={`flex items-center gap-2 h-14 flex p-3 text-black bg-gray-100 hover:bg-sky-100
            hover:shadow-inner duration-200`}
        >
          <HiPower className={"w-6 h-6"} />
          <span>Sign out</span>
        </button>
      </div>
    </div>
  )
}
