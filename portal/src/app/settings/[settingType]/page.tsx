"use client"
import Header from "@/components/header/header";
import Settings from "../settings-body";
import { usePathname } from "next/navigation";

export default function SettingsPage() {
    const path = usePathname();
    const defaultTab = path.split('/')[2];
    return (
        <>
            <Header title="Cài đặt" />
            <Settings defaultTab={defaultTab} />
        </>
    )
}