import Body from "./body/body";
import { AppSideBar } from "@/components/side-bar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import Header from "./body/header";

export default function Home() {
  return (
    <div>
      <SidebarProvider>
        <AppSideBar />
        <SidebarInset>
          <Header title="Bài viết" />
          <Body />
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
