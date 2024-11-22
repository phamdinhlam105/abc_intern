"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

export default function FileBody() {

    const [search, setSearch] = useState('');

    const handleSearchClick = () => {
    }

    const removeSearchFilter = () => {
        setSearch('')
    }
    return (
        <div className="p-4 pt-8">
            <div className="p-3 rounded-md shadow-sm h-fit border">
                <div className="flex justify-between ">
                    <div className="flex space-x-2">
                        <div className="relative max-w-sm ">
                            <Input
                                placeholder="Từ khóa..."
                                value={search}
                                onChange={(event) => setSearch(event.target.value)
                                }
                                className="max-w-s"
                            />
                            <button className="h-8 w-8 absolute right-1 top-1 items-center flex justify-center rounded-l-sm rounded-r-md"
                                onClick={handleSearchClick}>
                                <Search />
                            </button>
                        </div>
                        <Button
                            variant="outline"
                            className=" border h-10 px-3 rounded-md "
                            onClick={removeSearchFilter}>
                            Xóa bộ lọc
                        </Button>
                    </div>
                    <div className="flex space-x-2 ">
                        <Button
                            variant="outline"
                            className="text-black dark:text-white border h-10 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-slate-900"
                            onClick={removeSearchFilter}>
                            Xóa tài nguyên
                        </Button>
                        <Button variant="outline" className="h-10 text-md">
                            Thêm tệp tin
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}