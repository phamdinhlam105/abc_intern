"use client"

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
                                className="max-w-sm text-black"
                            />
                            <button className="h-8 w-8 absolute text-black right-1 top-1 hover:bg-gray-100 items-center flex justify-center rounded-l-sm rounded-r-md"
                                onClick={handleSearchClick}>
                                <Search />
                            </button>
                        </div>
                        <button
                            className="text-black border h-10 px-3 rounded-md hover:bg-gray-100"
                            onClick={removeSearchFilter}>
                            Xóa bộ lọc
                        </button>
                    </div>

                    <div className="flex space-x-2 ">
                        <button
                            className="text-black ml-auto border h-10 px-3 rounded-md hover:bg-gray-100"
                            onClick={removeSearchFilter}>
                            Xóa tài nguyên
                        </button>
                        <button
                            className="text-black border ml-auto h-10 px-3 rounded-md hover:opacity-90 text-white bg-primary"
                            onClick={removeSearchFilter}>
                            Thêm tệp tin
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}