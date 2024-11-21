"use client"
import { PROFILE } from "@/components/profile/constants/profile.constants";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Settings({ defaultTab }: { defaultTab: string }) {
    const route = useRouter();
    const [profile, setProfile] = useState(PROFILE);
    //const [theme, setTheme] = useState('light');
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
                        <div>
                            <h3 className="font-semibold text-lg">Tài khoản</h3>
                            <p className="text-gray-400 text-sm">Cài đặt tài khoản của bạn.</p>
                            <Separator className="my-4" />
                            <p className="font-semibold">Ngôn ngữ</p>
                            <Select
                                onValueChange={(value) => setProfile((prev) => ({ ...prev, language: value }))}
                                defaultValue={profile.language}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder={`${profile.language}`} />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Vietnamese">
                                        Vietnamese
                                    </SelectItem>
                                    <SelectItem value="United State">
                                        United State
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </TabsContent>
                    <TabsContent value="appearance" className="w-2/3">
                        <div>
                            <h3 className="font-semibold text-lg">Giao diện</h3>
                            <p className="text-gray-400 text-sm">Thay đổi ngôn ngữ của ứng dụng và chủ đề giao diện sáng hoặc tối.</p>
                            <Separator className="my-4" />
                            <p className="font-semibold">Chủ đề</p>
                            <p className="text-gray-400 text-sm">Chọn chủ đề bạn muốn sử dụng.</p>
                            <div className="grid grid-cols-2 gap-6 w-full px-2 py-2 w-2/3 place-items-center">
                                <div>
                                    <Button className="border border-2 rounded-md p-1 bg-white hover:bg-white h-fit">
                                        <div className="w-full rounded-md bg-gray-200 p-2 space-y-2">
                                            <div className="rounded-md bg-white p-2 w-full space-y-2">
                                                <Skeleton className="bg-gray-200 h-2 w-[100px]" />
                                                <Skeleton className="bg-gray-200 h-2 w-[130px]" />
                                            </div>
                                            <div className="rounded-md bg-white p-2 w-full space-y-2">
                                                <Skeleton className="bg-gray-200 h-2 w-[100px]" />
                                                <Skeleton className="bg-gray-200 h-2 w-[130px]" />
                                            </div>
                                            <div className="rounded-md bg-white p-2 w-full space-y-2">
                                                <Skeleton className="bg-gray-200 h-2 w-[100px]" />
                                                <Skeleton className="bg-gray-200 h-2 w-[130px]" />
                                            </div>
                                        </div>
                                    </Button>
                                    <p className="text-center">Sáng</p>
                                </div>
                                <div>
                                    <Button className="border border-2 rounded-md p-1 bg-white hover:bg-white h-fit">
                                        <div className="w-full rounded-md bg-neutral-900 p-2 space-y-2">
                                            <div className="rounded-md bg-slate-900 p-2 w-full space-y-2">
                                                <Skeleton className="bg-slate-400 h-2 w-[100px]" />
                                                <Skeleton className="bg-slate-400 h-2 w-[130px]" />
                                            </div>
                                            <div className="rounded-md bg-slate-900 p-2 w-full space-y-2">
                                                <Skeleton className="bg-slate-400 h-2 w-[100px]" />
                                                <Skeleton className="bg-slate-400 h-2 w-[130px]" />
                                            </div>
                                            <div className="rounded-md bg-slate-900 p-2 w-full space-y-2">
                                                <Skeleton className="bg-slate-400 h-2 w-[100px]" />
                                                <Skeleton className="bg-slate-400 h-2 w-[130px]" />
                                            </div>
                                        </div>
                                    </Button>
                                    <p className="text-center">Tối</p>
                                </div>
                            </div>
                            <Button className="font-semibold">
                                Cập nhật
                            </Button>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}