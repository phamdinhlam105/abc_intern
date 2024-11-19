import {
    BookOpenText,
    ChevronDown,
    Folders,
    ListTree,
    Settings
} from "lucide-react";
import {
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
    Sidebar
} from "./ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import Logo from "./logo";

const data = {
    versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
    navMain: [
        {
            title: "Bài viết",
            url: "#",
            icon: BookOpenText,
            items: [
                {
                    title: "Tạo bài viết mới",
                    url: "#",
                }
            ],
        },
        {
            title: "Danh mục",
            url: "#",
            icon: ListTree,
            items: [
                {
                    title: "Tạo danh mục mới",
                    url: "#",
                }
            ],
        },
        {
            title: "Quản lý tệp",
            url: "#",
            icon: Folders
        },
        {
            title: "Cài đặt",
            url: "#",
            icon: Settings,
            items: [
                {
                    title: "Tài khoản",
                    url: "#",
                },
                {
                    title: "Giao diện",
                    url: "#",
                },
            ],
        },
    ],
}


export function AppSideBar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (

        <Sidebar {...props}>
            <SidebarHeader>
                <Logo />
            </SidebarHeader>
            <SidebarContent className="gap-0">
                {data.navMain.map((item) => (
                    <Collapsible
                        key={item.title}
                        title={item.title}
                        defaultOpen={false}
                        className="group/collapsible"
                    >
                        <SidebarGroup>
                            <SidebarGroupLabel
                                asChild
                                className="h-10 group/label text-md text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                            >
                                <a className="flex px-4">
                                    {<item.icon className="mr-2 w-24 h-24"/>}
                                    {item.title}{" "}
                                    {item.items ? <CollapsibleTrigger className="ml-auto">
                                        <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:-rotate-180" />
                                    </CollapsibleTrigger> : ""}

                                </a>
                            </SidebarGroupLabel>
                            <CollapsibleContent>
                                <SidebarGroupContent>
                                    <SidebarMenu>
                                        {item.items ? item.items.map((item) => (
                                            <SidebarMenuItem key={item.title} >
                                                <SidebarMenuButton asChild className="h-10 px-8">
                                                    <a href={item.url}>{item.title}</a>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                        )) : ""}
                                    </SidebarMenu>
                                </SidebarGroupContent>
                            </CollapsibleContent>
                        </SidebarGroup>
                    </Collapsible>
                ))}
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    )
}