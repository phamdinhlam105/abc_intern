"use client"

import AccountSetting from "@/components/settings/account/account-setting";
import AppearanceSetting from "@/components/settings/appearance/appearance-setting";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";

export default function Settings({ defaultTab }: { defaultTab: string }) {
    const route = useRouter();

    const handleValueChange = (value: string) => {
        console.log(value)
        route.replace('/settings/' + value);
    }
    return (
        <div className="p-4">
            <div className="rounded-md border p-4 shadow-sm h-fit">
                <div>
                    <h3 className="font-semibold text-lg">Cài đặt</h3>
                    <p className="text-gray-400">Quản lý cài đặt tài khoản của bạn</p>
                </div>
                <Separator className="my-4" />
                <Tabs className="flex bg-white pt-4"
                    defaultValue={defaultTab}
                    onValueChange={(value) => handleValueChange(value)}>
                    <TabsList className="flex-col space-y-1 bg-white w-1/4 pr-6 h-10">
                        <TabsTrigger
                            value="account"
                            className="h-10 font-semibold justify-start w-full data-[state=active]:bg-gray-100 data-[state=active]:border-none rounded-md" >
                            Tài khoản
                        </TabsTrigger>
                        <TabsTrigger
                            value="appearance"
                            className="h-10 font-semibold justify-start w-full data-[state=active]:bg-gray-100 data-[state=active]:border-none rounded-md">
                            Giao diện
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="account" className="w-2/3">
                        <AccountSetting />
                    </TabsContent>
                    <TabsContent value="appearance" className="w-2/3">
                        <AppearanceSetting />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}