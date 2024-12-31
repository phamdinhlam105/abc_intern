"use client"
import { Article } from "@/components/article/model/article-model";
import NewPostContent from "@/components/new-post/content";
import NewPostInformation from "@/components/new-post/post-infor";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { addImageToPost, addNewPost } from "../api";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

export default function NewPostBody() {
    const route = useRouter();
    const [newPost, setNewPost] = useState<Article>({
        id: '',
        title: '',
        content: '',
        thumbnail: '',
        describe: '',
        author: '',
        createDate: '',
        status: 'draft',
        category: undefined
    })

    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        if (newPost.id) {
            const uploadImages = async () => {
                try {
                    await addImageToPost(newPost.id, images);
                    toast({
                        title: "NEW POST",
                        description: "New post is created successfully"
                    });
                } catch (error) {
                    console.error("Error adding images to post:", error);
                }
            };
            uploadImages();
        }
    }, [newPost.id]);

    const handleClick = async () => {
        const requiredFields = ['title', 'content', 'describe', 'thumbnail', 'author', 'status', 'category'];
        const missingFields = requiredFields.filter(field => !(newPost as Record<string, any>)[field]);
        if (missingFields.length > 0) {
            toast({
                title: "Error",
                description: `Please fill in the following fields: ${missingFields.join(', ')}`,
                variant: "destructive"
            });
            return;
        }
        try {
            const response = await addNewPost(newPost);
            if (response) {
                setNewPost(response);
            }
            else
                toast({
                    title: "NEW POST",
                    description: "Creation is failed",
                    variant:"destructive"
                });
            route.push('/article');
        } catch (error) {
            console.error("Lỗi khi tạo bài viết:", error);
        }
    }

    return <div className="p-4 w-full dark:bg-black h-full space-y-4">
        <div className="flex space-x-6">
            <NewPostContent setNewPost={setNewPost} setImages={setImages} />
            <NewPostInformation setPost={setNewPost} />
        </div>
        <Button onClick={handleClick}>
            Tạo bài viết
        </Button>
    </div>
}