"use client"

import {
  ColumnDef,
  PaginationState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  ColumnFiltersState,
  getFilteredRowModel,
  VisibilityState

} from "@tanstack/react-table"
import * as React from "react"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Pagination from "@/components/pagination"
import { ChevronDown, ChevronRight, Columns2, ListFilter, MoreHorizontal, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenuItem, DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu"
import { DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger } from "@radix-ui/react-dropdown-menu"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  onDelete: (idRow: string) => void
}

export function DataTable<TData extends { id: string }, TValue>({
  columns,
  data,
  onDelete
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange: setRowSelection,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      pagination,
      rowSelection,
      columnFilters,
      columnVisibility
    },
    onPaginationChange: setPagination,
  });

  const [search, setSearch] = React.useState('');
  const allStatus = ['published', 'deleted', 'draft'];
  const [statusSearch, setStatusSearch] = React.useState('');
  const [selectedStatuses, setSelectedStatuses] = React.useState<string[]>([]);
  const handleSearchClick = () => {
    table.getColumn("title")?.setFilterValue(search);
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
    table.getColumn("status")?.setFilterValue(undefined);
  }

  return (
    <div className="rounded-md border w-full p-4 shadow-md">
      <div className="inline-flex items-center mb-2 w-full justify-start text-neutral-50 gap-x-2 mb-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="h-10 w-10">
              <ListFilter className="w-full h-full" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="right" align="start" className="shadow-md rounded-md"
          >
            <DropdownMenuLabel className="p-2">
              <p className="font-semibold text-sm">Bộ lọc</p>
            </DropdownMenuLabel>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="flex p-2">
                <span>Trạng thái</span>
                <ChevronRight />
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="bg-white shadow-md rounded-md p-1">
                <DropdownMenuLabel asChild>
                  <div className="flex items-center p-2 ">
                    <Search />
                    <Input
                      value={statusSearch}
                      onChange={(e) => setStatusSearch(e.target.value)}
                      className="max-w-sm border-none px-4 "
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
                <DropdownMenuSeparator />
                {(selectedStatuses.length > 0) ?
                  <DropdownMenuItem className="p-2 flex justify-center" onClick={removeFilter}>
                    Xóa bộ lọc
                  </DropdownMenuItem>
                  : ''}
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="w-30 relative ">
          <Input
            placeholder="Từ khóa..."
            value={search}
            onChange={(event) => setSearch(event.target.value)
            }
            className="max-w-sm"
          />
          <button className="h-8 w-8 absolute text-black right-1 top-1 hover:bg-gray-100 items-center flex justify-center rounded-l-sm rounded-r-md"
            onClick={handleSearchClick}>
            <Search />
          </button>
        </div>
        <button className="text-black border h-10 px-3 rounded-md hover:bg-gray-100">
          Xóa bộ lọc
        </button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="hover:bg-gray-100 borderLine text-black w-10 h-10 items-center flex justify-center rounded-md hover:opacity-90">
              <Columns2 />
            </button>
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
        <button className="h-10 ml-auto rounded-md bg-primary text-white hover:opacity-90 duration-100 px-5 py-items-center justify-center borderLine font-semibold text-sm">
          Thêm mới
        </button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-10 text-md bg-primary hover:opacity-90 hover:bg-primary hover:text-white">
              Thao tác hàng loạt
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white shadow w-60 h-10 p-1 rounded-md">
            <DropdownMenuItem
              onClick={() => {
                const selectedRows = table.getSelectedRowModel().rows;
                selectedRows.forEach(row => {
                  console.log(row.original)
                  onDelete(row.original.id)
                });
              }}
              disabled={!table.getIsSomePageRowsSelected()}
              className="px-2 w-full items-center hover:bg-gray-200 rounded-sm text-black"
            >
              <p>Xóa các dòng đã chọn</p>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Table className="text-md border rounded-md">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="divide-x ">
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} className="px-3 font-bold">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className="divide-x"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="max-w-96 px-3">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Pagination table={table} pagination={pagination} setPagination={setPagination} />
    </div >
  )
}
