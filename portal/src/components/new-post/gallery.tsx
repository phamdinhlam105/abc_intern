"use client"

import { getImageWithoutArticle } from "@/app/file/api";
import { useEffect, useState } from "react"
import { IFileProps } from "../file/model/file-model";
import FileList from "../file/file-list";
import { Button } from "../ui/button";

export default function NewPostGallery({ setSelectedImages }: { setSelectedImages: React.Dispatch<React.SetStateAction<string[]>> }) {
    const [images, setImages] = useState<IFileProps[]>([]);
    const [selectedFiles, setSelectedFiles] = useState<IFileProps[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getImageWithoutArticle();
                if (result)
                    setImages(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);
    useEffect(() => {
        const ids = selectedFiles.map(file => file.id);
        setSelectedImages(ids);
    }, [selectedFiles]);

    return <div className="space-y-2">
        <FileList files={images} selectedFiles={selectedFiles} setSelectedFiles={setSelectedFiles} />
        <Button>Chọn ảnh</Button>
    </div>
}