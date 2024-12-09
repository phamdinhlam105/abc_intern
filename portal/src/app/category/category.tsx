"use client"

import { getCategoryColumns } from "@/components/category/column-def/columns";
import { CATEGORIES } from "@/components/category/constants/category-constans";
import { DataTable } from "@/components/table/data-table";
import { useState } from "react";

export default function Category() {
    const [data, setData] = useState(CATEGORIES);
    const onDelete = (id: string) => {
        console.log(id)
        setData((prev) => prev.map((item) => item.id === id ? { ...item, status: 'deleted' } : item));
    }
    const columns = getCategoryColumns({ onDelete });
    return (
        <div className="p-3 w-full dark:bg-black h-full">
            <DataTable
                columns={columns}
                data={data}
                onDelete={onDelete}
                allStatus={['visibled','deleted']} />
        </div>
    )
}