"use client"

import FileButton from "@/components/file/file-button"
import FileList from "@/components/file/file-list"
import { IFileProps } from "@/components/file/model/file-model";
import { useEffect, useState } from "react";
import { getFiles } from "./fetch-data/get-files";
import { toast } from "@/hooks/use-toast";
import { deleteFile } from "./fetch-data/delete-files";

export default function FileBody() {
    
    const [files, setFiles] = useState<IFileProps[]>([]);
    const [selectedFiles, setSelectedFiles] = useState<IFileProps[]>([]);
    const [fileChanged, setFileChanged] = useState(true);
    const fetchFiles = async () => {
        const data = await getFiles();
        setFiles(data.files);
    }
    useEffect(() => {
        if (fileChanged === true) {
            fetchFiles();
            setFileChanged(false);
        }
    }, [fileChanged]);
    const handleSearch = (search: string) => {
        if (search)
            setFiles(files.filter(file => file.fileName.toLowerCase().includes(search.toLowerCase())));
        else
            fetchFiles();
    }

    const removeSelected = async () => {
        if (selectedFiles.length > 0) {

            const result = await deleteFile(selectedFiles);
            if (result.status == 'success') {
                toast({
                    title: "FILE DELETED",
                    description: "File upload successfully"
                });
                setFileChanged(true);
                setSelectedFiles([])
            }

            else
                toast({
                    title: "FILE DELETD FAILED",
                    description: "File upload failed. " + result.message
                });
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