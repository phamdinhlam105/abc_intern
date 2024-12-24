
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { addImage } from "@/app/file/api";

export function FileUploader({ setFileChanged }: {
    setFileChanged?: React.Dispatch<React.SetStateAction<boolean>>
}) {
    const [name, setName] = useState("");
    const [describe, setDescribe] = useState("");
    const [url, setUrl] = useState("");
    const handleAddNewImage = async (event: React.FormEvent) => {
        event.preventDefault();
        const newImage = { name, describe, url };
        try {
            await addImage(newImage);
            toast({
                title: "UPLOAD FILE",
                description: "File upload successfully"
            });
            if (setFileChanged)
                setFileChanged(true);
        }
        catch (e) {
            toast({
                title: "UPLOAD FILE",
                description: "File upload failed"
            });
        }

    }

    return (
        <div className="flex space-x-2">
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">Thêm ảnh mới</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader className="flex justify-between">
                        <DialogTitle>Thêm ảnh mới</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Tên ảnh
                            </Label>
                            <Input
                                id="name"
                                placeholder="Ảnh..."
                                className="col-span-3"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="description" className="text-right">
                                Mô tả
                            </Label>
                            <Input
                                id="description"
                                placeholder="Đây là ảnh..."
                                className="col-span-3"
                                value={describe}
                                onChange={(e) => setDescribe(e.target.value)}
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="url" className="text-right">
                                URL ảnh
                            </Label>
                            <Input
                                id="url"
                                placeholder="hhtps://...."
                                className="col-span-3"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" onClick={handleAddNewImage}>Thêm ảnh</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};
