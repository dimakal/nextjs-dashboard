import SideNav from "@/app/ui/dashboard/SideNav"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={"flex h-screen flex-row gap-2 p-4"}>
      <div className={"w-64"}>
        <SideNav />
      </div>
      <div className={"grow"}>{children}</div>
    </div>
  )
}
