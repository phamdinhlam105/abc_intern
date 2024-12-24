"use client"
import { useState } from "react";
import { Article } from "../article/model/article-model";
import TextEditor from "../slate-editor/text-editor";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { FileUploader } from "../file/file-uploader";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";

export default function NewPostContent({ setNewPost }: {
    setNewPost: React.Dispatch<React.SetStateAction<Article>>
}) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    return <div className="w-2/3 space-y-4">
        <Label htmlFor='title' className="block text-xl font-semibold text-gray-700 mb-1">
            Tiêu đề
        </Label>
        <Input
            id='title'
            className="text-xl block w-full px-3 py-2 rounded-md shadow-sm"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        <Label htmlFor='content' className="block text-xl font-semibold text-gray-700 mb-1">
            Nội dung
        </Label>

        <TextEditor setNewPost={setNewPost} />

        <Label htmlFor='description' className="block text-xl font-semibold text-gray-700 mb-1">
            Mô tả
        </Label>
        <Textarea
            id='description'
            className="text-xl block w-full px-3 py-2 rounded-md shadow-sm"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
        />
        <div className="flex justify-between">
            <Label htmlFor='thumbnail' className="block text-xl font-semibold text-gray-700 mb-1">
                Ảnh
            </Label>
            <Dialog>
                <DialogTrigger asChild>
                    <Button >Thư viện ảnh</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader className="flex justify-between">
                        <DialogTitle>Chọn ảnh từ gallery</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      
                    </div>
                    <DialogFooter>
                        <FileUploader />
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    </div>
}