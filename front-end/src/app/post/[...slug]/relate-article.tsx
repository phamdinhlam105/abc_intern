"use client"
import { getPostByCategory } from "@/app/trang-chu/get-posts";
import EventPost from "@/components/event-post";
import { Article } from "@/components/models/article-model";
import { useEffect, useState } from "react";

export default function RelateNews({ idCategory }: { idCategory?: string }) {
    const [relatedPost, setRelatedPost] = useState<Article[]>([]);
    
    console.log(idCategory)
    useEffect(() => {
        const fetchData = async () => {
            const data = await getPostByCategory(idCategory);
            if (data)
                setRelatedPost(data);
        }
        fetchData();
    }, [idCategory])
    return (
        <div className="px-10 w-3/4">
            <h2 className="text-2xl uppercase my-10 font-bold">Tin tức liên quan</h2>
            <ul className="grid md:grid-cols-3 grid-cols-1">
                {relatedPost.slice(0,3).map(p => {
                    return <li className="">
                        <EventPost {...p} />
                    </li>
                })}
            </ul>
        </div>
    )
}