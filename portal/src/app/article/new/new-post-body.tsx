"use client"
import { ARTICLE_LIST } from "@/components/article/constants/article.constants";
import { Article } from "@/components/article/model/article-model";
import NewPostContent from "@/components/new-post/content";
import NewPostInformation from "@/components/new-post/post-infor";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function NewPostBody() {

    const [newPost, setNewPost] = useState<Article>({
        id: (ARTICLE_LIST.length + 1).toString(),
        title: '',
        category: '',
        author: '',
        createDate: new Date().toLocaleString('en-GB'),
        status: 'draft'
    })
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [author, setAuthor] = useState('');
    const [status, setStatus] = useState('draft');
    const handleClick = () => {

    }

    return <div className="p-4 w-full dark:bg-black h-full space-y-4">
        <div className="flex space-x-6">
            <NewPostContent />
            <NewPostInformation />
        </div>
        <Button>
            Tạo bài viết
        </Button>
    </div>
}