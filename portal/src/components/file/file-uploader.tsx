
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

export function FileUploader({ setFileChanged }: {
    setFileChanged: React.Dispatch<React.SetStateAction<boolean>>
}) {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleAddFileClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const file = event.target.files?.[0];
        if (file) {
            const formData = new FormData();
            formData.append('file', file);

            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData
            });
            const result = await response.json();

            if (result.status == 'success') {
                toast({
                    title: "UPLOAD FILE",
                    description: "File upload successfully"
                });
                setFileChanged(true);
            }

            else
                toast({
                    title: "UPLOAD FILE",
                    description: "File upload failed"
                });
        }
    };

    return (
        <div className="flex space-x-2">
            <Button
                className="h-10 text-md text-white"
                onClick={handleAddFileClick}
            >
                Thêm tệp tin
            </Button>
            <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
            />
        </div>
    );
};
