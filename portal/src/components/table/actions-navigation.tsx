import { Table } from "@tanstack/react-table";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { ChevronDown, ChevronRight, Columns2, ListFilter, Search } from "lucide-react";
import { Input } from "../ui/input";
import React from "react";


export default function ActionsNavigation({ table, onDelete }: { table: Table<any>, onDelete: (idRow: string) => void }) {

    const [search, setSearch] = React.useState('');
    const allStatus = ['published', 'deleted', 'draft'];
    const [statusSearch, setStatusSearch] = React.useState('');
    const [selectedStatuses, setSelectedStatuses] = React.useState<string[]>([]);
    const handleSearchClick = () => {
        table.getColumn("title")?.setFilterValue(search);
    }

    const removeSearchFilter = () => {
        table.getColumn("title")?.setFilterValue(undefined);
        setSearch('');
    }

    const handleCheckboxChange = (item: string, checked: boolean) => {
        if (checked) {
            table.getColumn("status")?.setFilterValue(item);
            setSelectedStatuses([item]);
        }
        else {
            setSelectedStatuses((prev) => prev.filter((status) => status !== item));
        }

    };
    const removeFilter = () => {
        setSelectedStatuses([]);
        setStatusSearch('');
        table.getColumn("status")?.setFilterValue(undefined);
    }
    return (
        <div className="inline-flex items-center w-full justify-start text-neutral-50 gap-x-2 mb-3">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button className="h-10 w-10">
                        <ListFilter className="w-full h-full dark:text-black" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    side="right"
                    align="start"
                    className="shadow-md rounded-md"
                >
                    <DropdownMenuLabel className="p-2">
                        <p className="font-semibold text-sm">Bộ lọc</p>
                    </DropdownMenuLabel>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger className="flex p-2">
                            <span>Trạng thái</span>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuSubContent
                            className="bg-background shadow-md rounded-md p-1">
                            <DropdownMenuLabel asChild>
                                <div className="flex items-center p-2">
                                    <Search />
                                    <Input
                                        value={statusSearch}
                                        onChange={(e) => setStatusSearch(e.target.value)}
                                        className="max-w-sm ml-2 border-none px-4"
                                    />
                                </div>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {allStatus.map((item) => {
                                if (item.includes(statusSearch))
                                    return <DropdownMenuCheckboxItem
                                        key={item}
                                        checked={selectedStatuses.includes(item)}
                                        onCheckedChange={(checked) => handleCheckboxChange(item, checked)}
                                    >
                                        {item}
                                    </DropdownMenuCheckboxItem>
                            }
                            )}

                            {(selectedStatuses.length > 0) ?
                                <>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className="p-2 flex justify-center" onClick={removeFilter}>
                                        Xóa bộ lọc
                                    </DropdownMenuItem>
                                </>

                                : ''}
                        </DropdownMenuSubContent>
                    </DropdownMenuSub>
                </DropdownMenuContent>
            </DropdownMenu>

            <div className="w-30 relative">
                <Input
                    placeholder="Từ khóa..."
                    value={search}
                    onChange={(event) => setSearch(event.target.value)
                    }
                    className="max-w-sm"
                />
                <Button 
                variant="outline"
                className="border-none h-8 w-8 absolute right-1 top-1 items-center flex justify-center rounded-l-sm rounded-r-md"
                    onClick={handleSearchClick}>
                    <Search />
                </Button>
            </div>
            <Button
                className="text-foreground border h-10 px-3 rounded-md "
                variant="outline"
                onClick={removeSearchFilter}>
                Xóa bộ lọc
            </Button>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="borderLine w-10 h-10 items-center flex justify-center rounded-md">
                        <Columns2 />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuLabel className="px-2 items-center py-2">
                        <p className="font-semibold text-sm">Hiện/Ẩn cột</p>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {table
                        .getAllColumns()
                        .filter(
                            (column) => column.getCanHide()
                        )
                        .map((column) => {
                            if (column.id !== 'select' && column.id !== 'actions')
                                return (
                                    <DropdownMenuCheckboxItem
                                        key={column.id}
                                        className="capitalize"
                                        checked={column.getIsVisible()}
                                        onCheckedChange={(value) =>
                                            column.toggleVisibility(!!value)
                                        }
                                    >
                                        {column.id}
                                    </DropdownMenuCheckboxItem>
                                )
                        })}
                </DropdownMenuContent>
            </DropdownMenu>
            <button className="h-10 ml-auto rounded-md bg-primary dark:text-black hover:opacity-90 duration-100 px-5 items-center justify-center borderLine font-semibold text-sm">
                Thêm mới
            </button>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-10 dark:text-black text-md bg-primary hover:opacity-90 hover:bg-primary hover:text-white">
                        Thao tác hàng loạt
                        <ChevronDown />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-white dark:bg-neutral-900 shadow w-60 h-10 p-1 rounded-md">
                    <DropdownMenuItem
                        onClick={() => {
                            const selectedRows = table.getSelectedRowModel().rows;
                            selectedRows.forEach(row => {
                                onDelete(row.original.id);
                            });
                        }}
                        disabled={!table.getIsSomePageRowsSelected() && !table.getIsAllPageRowsSelected()}
                        className="px-2 w-full items-center hover:bg-gray-200 rounded-sm text-black dark:text-white "
                    >
                        <p>Xóa các dòng đã chọn</p>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}