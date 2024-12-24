"use client"
import { ARTICLE_LIST } from "@/components/article/constants/article.constants";
import { DataTable } from "@/components/table/data-table";
import { getArticleColumns } from "@/components/article/column-def/columns";
import { useEffect, useState } from "react";
import { Article as ArticleType } from "@/components/article/model/article-model";
import { deletedPost, getPosts } from "./api";
import { toast } from "@/hooks/use-toast";

export default function Article() {
    const [data, setData] = useState<ArticleType[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getPosts();
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);
    const onDelete = (id: string) => {
        const post = {...data.findLast(p => p.id === id),status:"deleted"} as ArticleType;
        if (post) {
            setData((prevData) =>
                prevData.map((item) => item.id === id ? post : item)
            );
            deletedPost(post);
            toast({
                title: "DELET POST",
                description: "Post is deleted"
            })
        }
    }
    const columns = getArticleColumns({ onDelete });
    return (
        <div className="p-3 w-full dark:bg-black h-full">
            <DataTable columns={columns}
                data={data}
                onDelete={onDelete}
                allStatus={['published', 'deleted', 'draft']} />
        </div>
    )
}