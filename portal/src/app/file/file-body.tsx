"use client"

import FileButton from "@/components/file/file-button"
import FileList from "@/components/file/file-list"
import { IFileProps } from "@/components/file/model/file-model";
import { useEffect, useState } from "react";

export default function FileBody() {
    const [files, setFiles] = useState<IFileProps[]>([]);
    const [selectedFiles, setSelectedFiles] = useState<IFileProps[]>([])
    const fetchFiles = async () => {
        const response = await fetch('/api/getfile');
        const data = await response.json();
        setFiles(data.files);
    }
    useEffect(() => { fetchFiles() }, []);
    const handleSearch = (search: string) => {
        if (search)
            setFiles(files.filter(file => file.fileName.toLowerCase().includes(search.toLowerCase())));
        else
            fetchFiles();
    }

    return (
        <div className="p-4 pt-8">
            <div className="p-3 rounded-md shadow-sm h-fit border">
                <FileButton handleSearch={handleSearch} />
                <div>
                    <FileList files={files} selectedFiles={selectedFiles}/>
                </div>
            </div>
        </div>
    )
}