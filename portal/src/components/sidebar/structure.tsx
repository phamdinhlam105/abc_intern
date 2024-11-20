import { BookOpenText, ListTree, Folders, Settings } from "lucide-react";

export const SidebarStructure = [
    {
        title: "Bài viết",
        url: "/",
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
        url: "/category",
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
]
