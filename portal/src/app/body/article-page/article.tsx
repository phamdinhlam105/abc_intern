"use client"
import { ARTICLE_LIST } from "@/components/article/constant/article.constants";
import { DataTable } from "./article-table/data-table";
import { getArticleColumns } from "./article-table/columns";
import { useState } from "react";


export default function Article() {
    const [data, setData] = useState(ARTICLE_LIST);
    const onDelete = (id: string) => {
        console.log(id)
        setData((prev) => prev.map((item) => item.id === id ? { ...item, status: 'deleted' } : item));
    }
    const columns = getArticleColumns({ onDelete });
    return (
        <div className="p-3 w-full">
            <DataTable columns={columns} data={data} onDelete={onDelete} />
        </div>
    )
}