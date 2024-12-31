"use client"
import { useEffect, useRef, useState } from "react";
import { Article } from "../article/model/article-model";
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
import NewPostGallery from "./gallery";
import FormFieldCKEditorFull from "../rich-editor/form-field-ckeditor-full";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { FormProvider, useForm } from "react-hook-form";
import { fromJSON } from "postcss";

export default function NewPostContent({ setNewPost, setImages }: {
    setNewPost: React.Dispatch<React.SetStateAction<Article>>,
    setImages: React.Dispatch<React.SetStateAction<string[]>>
}) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const editorRef = useRef<ClassicEditor | null>(null);
    const form = useForm();

    useEffect(() => {
        setNewPost((prevPost) => ({
            ...prevPost,
            content: form.getValues('body'),
        }));
    }, [form.getValues('body')])

    const handleTitleBlur = () => {
        setNewPost((prevPost) => ({
            ...prevPost,
            title: title,
        }));
    };

    const handleDescriptionBlur = () => {
        setNewPost((prevPost) => ({
            ...prevPost,
            describe: description,
        }));
    };

    return <div className="w-2/3 space-y-4">
        <Label htmlFor='title' className="block text-xl font-semibold mb-1">
            Tiêu đề
        </Label>
        <Input
            id='title'
            className="text-xl block w-full px-3 py-2 rounded-md shadow-sm"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={handleTitleBlur}
        />
        <Label htmlFor='content' className="block text-xl font-semibold mb-1">
            Nội dung
        </Label>
        <FormProvider {...form}>
            <FormFieldCKEditorFull
                form={form}
                formLabel="Nội dung"
                editorRef={editorRef}

            />
        </FormProvider>
        <div dangerouslySetInnerHTML={{ __html: form.getValues('body') }}>{ }</div>

        <Label htmlFor='description' className="block text-xl font-semibold mb-1">
            Mô tả
        </Label>
        <Textarea
            id='description'
            className="text-xl block w-full px-3 py-2 rounded-md shadow-sm"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onBlur={handleDescriptionBlur}
        />
        <div className="flex justify-between">
            <Label htmlFor='thumbnail' className="block text-xl font-semibold mb-1">
                Ảnh
            </Label>
            <Dialog>
                <DialogTrigger asChild>
                    <Button >Thư viện ảnh</Button>
                </DialogTrigger>
                <DialogContent className="w-full">
                    <DialogHeader className="flex justify-between">
                        <DialogTitle>Chọn ảnh từ gallery</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <NewPostGallery setSelectedImages={setImages} />
                    </div>
                    <DialogFooter>
                        <FileUploader />
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    </div>
}