import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Header({ title }: { title: string }) {

    return (
        <div className="flex boderLine border-b h-16 items-center sticky top-0 bg-white z-50 shrink-0 gap-1 px-2">
            <SidebarTrigger className=" h-10 w-10" />
            <h2 className="ml-2 text-xl font-bold">{title}</h2>
        </div>
    )
}