"use client"
import { ARTICLE_LIST } from "@/components/article/constants/article.constants";
import { DataTable } from "@/components/table/data-table";
import { getArticleColumns } from "@/components/article/column-def/columns";
import { useState } from "react";


export default function Article() {
    const [data, setData] = useState(ARTICLE_LIST);
    const onDelete = (id: string) => {
        console.log(id)
        setData((prev) => prev.map((item) => item.id === id ? { ...item, status: 'deleted' } : item));
    }
    const columns = getArticleColumns({ onDelete });
    return (
        <div className="p-3 w-full dark:bg-black">
            <DataTable columns={columns} data={data} onDelete={onDelete} />
        </div>
    )
}