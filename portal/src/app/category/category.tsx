"use client"

import { getCategoryColumns } from "@/components/category/column-def/columns";
import { DataTable } from "@/components/table/data-table";
import { useEffect, useState } from "react";
import { deleteCategory, getCategories } from "./api";
import { toast } from "@/hooks/use-toast";

export default function Category() {
    const [data, setData] = useState<Category[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getCategories();
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const onDelete = (id: string) => {
        const category = data.findLast(p => p.id === id);
        if (category) {
            setData((prevData) =>
                prevData.map((item) => item.id === id ? category : item)
            );
            deleteCategory(category);
            toast({
                title: "DELETE CATEGORY",
                description: "category is deleted"
            })
        }
    }
    const columns = getCategoryColumns({ onDelete });
    return (
        <div className="p-3 w-full dark:bg-black h-full">
            <DataTable
                columns={columns}
                data={data}
                onDelete={onDelete}
                allStatus={['visibled', 'deleted']} />
        </div>
    )
}