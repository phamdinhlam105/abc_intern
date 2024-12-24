"use client"

import FileButton from "@/components/file/file-button"
import FileList from "@/components/file/file-list"
import { IFileProps } from "@/components/file/model/file-model";
import { useEffect, useState } from "react";
import { toast } from "@/hooks/use-toast";
import { deleteImage, getImages } from "./api";

export default function FileBody() {

    const [files, setFiles] = useState<IFileProps[]>([]);
    const [selectedFiles, setSelectedFiles] = useState<IFileProps[]>([]);
    const [fileChanged, setFileChanged] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getImages();
                setFiles(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        if (fileChanged === true) {
            fetchData();
            setFileChanged(false);
        }
    }, [fileChanged]);
    const handleSearch = (search: string) => {
        if (search)
            setFiles(files.filter(file => file.name.toLowerCase().includes(search.toLowerCase())));
        else
            setFileChanged(true);
    }

    const removeSelected = async () => {
        if (selectedFiles.length > 0) {
            setFiles((prevData) =>
                prevData.filter((item) => !selectedFiles.includes(item))
            );
            selectedFiles.map(f => deleteImage(f.id));
            toast({
                title: "DELETE CATEGORY",
                description: "All selected images are deleted"
            })
        }
    }

    return (
        <div className="p-3 w-full dark:bg-black h-full">
            <div className="p-3 bg-background rounded-md shadow-sm border">
                <FileButton
                    handleSearch={handleSearch}
                    removeSelected={removeSelected}
                    selectedFiles={selectedFiles}
                    setFileChanged={setFileChanged} />
                <FileList files={files}
                    selectedFiles={selectedFiles}
                    setSelectedFiles={setSelectedFiles} />
            </div>
        </div>
    )
}