"use client"
import { ARTICLE_LIST } from "@/components/article/constants/article.constants";
import { Article } from "@/components/article/model/article-model";
import NewPostContent from "@/components/new-post/content";
import NewPostInformation from "@/components/new-post/post-infor";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function NewPostBody() {

    const [newPost, setNewPost] = useState<Article>({
        id: '',
        title: '',
        content:'',
        thumbnail:'',
        describe:'',
        author: '',
        createDate: '',
        status: 'draft',
        category: undefined
    })
    const handleClick = () => {
        console.log(newPost)
    }

    return <div className="p-4 w-full dark:bg-black h-full space-y-4">
        <div className="flex space-x-6">
            <NewPostContent setNewPost={setNewPost}/>
            <NewPostInformation setPost={setNewPost} />
        </div>
        <Button onClick={handleClick}>
            Tạo bài viết
        </Button>
    </div>
}