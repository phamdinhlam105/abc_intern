import ActionCell from "@/components/table/action-cell";
import ColumnHeader from "@/components/table/column-header";
import SelectCell from "@/components/table/select-cell";
import SelectHeader from "@/components/table/select-header";
import { ColumnDef } from "@tanstack/react-table";
import { AlignCenterVertical, AlignEndVertical, AlignStartVertical } from "lucide-react";

export const getCategoryColumns = ({ onDelete }: { onDelete: (idRow: string) => void }): ColumnDef<Category>[] => [
    {
        id: "select",
        header: ({ table }) => <SelectHeader table={table} />,
        cell: ({ row }) => <SelectCell row={row} />
    },
    {
        accessorKey: "name",
        header: ({ column }) => <ColumnHeader column={column} title="Tên" />,
        cell: ({ row }) => <div className="text-normal">{row.getValue("name")}</div>
    }, {
        accessorKey: "position",
        header: ({ column }) => <ColumnHeader column={column} title="Vị trí" />,
        cell: ({ row }) => <div className="text-sm flex space-x-2 justify-center items-center ">
            {row.getValue("position") === "LEFT" ?
                <AlignStartVertical /> :
                row.getValue("position") === "RIGHT" ?
                    <AlignEndVertical /> :
                    <AlignCenterVertical />}
            <p className="px-2 bg-gray-100 rounded-lg font-semibold dark:bg-gray-800">{row.getValue("position")}</p>
        </div>
    },
    {
        accessorKey: "createDate",
        header: ({ column }) => <ColumnHeader column={column} title="Ngày tạo" />,
        cell: ({ row }) => <div className="text-md text-gray-400">{row.getValue("createDate")}</div>
    },
    {
        accessorKey: "status",
        header: ({ column }) => <ColumnHeader column={column} title="Trạng thái" />,
        cell: ({ row }) => <div className="w-23 font-medium mx-auto flex justify-center">
            <p className={`px-2 bg-gray-100 rounded-md dark:bg-slate-900
        ${row.getValue("status") === "visibled" ?
                    'text-green-600' :
                    'text-red-600'
                }`}>{row.getValue("status")}</p>
        </div>
    },
    {
        id: "actions",
        header: () => <div className="text-sm">Hành động</div>,
        cell: ({ row }) => <ActionCell onDelete={onDelete} idRow={row.original.id} />
    }
]