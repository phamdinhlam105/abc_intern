"use client"
import { useState } from "react";
import { Article } from "../article/model/article-model";
import TextEditor from "../slate-editor/text-editor";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function NewPostContent({ setNewPost }: {
    setNewPost: React.Dispatch<React.SetStateAction<Article>>
}) {

    const [title,setTitle] = useState('');
    return <div className="w-2/3 space-y-3">
        <Label htmlFor='title' className="block text-xl font-semibold text-gray-700 mb-1">
            Tiêu đề
        </Label>
        <Input
            id='title'
            className="text-xl block w-full px-3 py-2 rounded-md shadow-sm"
        />
        <Label htmlFor='content' className="block text-xl font-semibold text-gray-700 mb-1">
            Nội dung
        </Label>

        <TextEditor setNewPost={setNewPost}/>
    </div>
}