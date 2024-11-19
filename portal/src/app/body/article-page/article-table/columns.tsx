"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import ColumnHeader from "./column-header"
import { useState } from "react"
import ActionCell from "./action-cell"

export type Article = {
    id: string,
    title: string,
    category: string,
    createDate: string,
    status: "published" | "deleted" | "draft",
    author: string
}

interface GetArticleColumnsProps {
    onDelete: (idRow:string) => void;
}

export const getArticleColumns = ({ onDelete }: GetArticleColumnsProps): ColumnDef < Article >  [] => [
     {
        id: "select",
        header: ({ table }) => (
            <div className="w-8 items-center flex justify-between">
                <Checkbox
                    checked={
                        table.getIsAllPageRowsSelected() ||
                        (table.getIsSomePageRowsSelected() && "indeterminate")
                    }
                    onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                    aria-label="Select all"
                />
            </div>

        ),
        cell: ({ row }) => (
            <div className="w-8 items-center flex justify-between">
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    aria-label="Select row"
                />
            </div>

        ),
    },
    {
        accessorKey: "title",
        header: ({ column }) => <ColumnHeader column={column} title="Tiêu đề" />
        ,
        cell: ({ row }) => <div className=" font-medium">{row.getValue("title")} </div>
    },
    {
        accessorKey: "category",
        header: ({ column }) => <ColumnHeader column={column} title="Danh mục" />,
        cell: ({ row }) => <div className="font-medium">{row.getValue("category")}</div>
    },
    {
        accessorKey: "createDate",
        header: ({ column }) => <ColumnHeader column={column} title="Ngày tạo" />,
        cell: ({ row }) => <div className="font-medium text-gray-400">{row.getValue("createDate")}</div>
    },
    {
        accessorKey: "status",
        header: ({ column }) => <ColumnHeader column={column} title="Trạng thái" />,
        cell: ({ row }) => <div className={`font-medium bg-gray-100 rounded-md mx-auto flex justify-center ${row.getValue("status") === "published" ? 'text-green-600' : row.getValue("status") === "deleted" ? 'text-red-600' : 'text-yellow-600'
            }`}>{row.getValue("status")}</div>
    },
    {
        accessorKey: "author",
        header: ({ column }) => <ColumnHeader column={column} title="Tác giả" />,
        cell: ({ row }) => <div className="w-32 font-medium">{row.getValue("author")}</div>
    },
    {
        id: "actions",
        header: () => <div className="flex justify-center w-28">Hành động</div>,
        cell: ({ row }) => {
            const article = row.original
            const [data, setData] = useState(article);
            return <ActionCell idRow={article.id} onDelete={onDelete} />
        },
    },
]