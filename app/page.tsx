import Image from "next/image"
import Link from "next/link"
import { HiArrowRight } from "react-icons/hi2"
import { MdOutlineLogin } from "react-icons/md"

export default function Home() {
  return (
    <main
      className={
        "flex flex-col gap-20 h-screen p-4 justify-center items-center"
      }
    >
      <div>
        <Image src="/next.svg" alt="Logo" width={400} height={400} />
      </div>
      <div>
        <Link
          href="/login"
          className={`gap-2 bg-slate-700 hover:bg-slate-900 duration-500 rounded text-white px-3
            py-1.5 shadow-3d hover:shadow-3d-hovered active:shadow-none`}
        >
          <span className={"text-xl"}>Log in</span>
          <MdOutlineLogin className={"h-5 w-5"} />
        </Link>
      </div>
    </main>
  )
}
