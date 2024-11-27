import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React, { useState } from "react";
import { FileUploader } from "./file-uploader";
import { IFileProps } from "./model/file-model";

export default function FileButton({ handleSearch, removeSelected, selectedFiles, setFileChanged }: {
    handleSearch: (search: string) => void,
    removeSelected: () => void,
    selectedFiles: IFileProps[],
    setFileChanged: React.Dispatch<React.SetStateAction<boolean>>
}) {

    const [search, setSearch] = useState('');

    const handleSearchClick = () => {
        handleSearch(search);
    }

    const removeSearchFilter = () => {
        handleSearch('')
        setSearch('')
    }


    return <div className="flex justify-between ">
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
                onClick={removeSearchFilter}
                disabled={selectedFiles.length === 0}>
                Xóa bộ lọc
            </Button>
        </div>
        <div className="flex space-x-2 ">
            <Button
                variant="outline"
                className=" border h-10 px-3 rounded-md"
                onClick={removeSelected}>
                Xóa tài nguyên
            </Button>
            <FileUploader setFileChanged = {setFileChanged}/>
        </div>
    </div>
}