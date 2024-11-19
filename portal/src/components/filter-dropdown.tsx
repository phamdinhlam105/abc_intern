"use client"
import { SetStateAction, useState } from "react";
import NextIcon from "./icons/next-icon";

export default function FilterDropDown({ active, listStatus, statusFilter, setStatusFilter }: {
    active: boolean,
    listStatus: string[],
    statusFilter: string[],
    setStatusFilter: React.Dispatch<SetStateAction<string[]>>
}) {

    const [activeSubDropdown, setActiveSubDropdown] = useState(false);

    const handleStatusCheck = (status: string, checked: boolean) => {
        if (checked)
            statusFilter.push(status);
        else
            setStatusFilter(statusFilter.filter(s => s !== status));
    }

    return (
        <div
            className={`z-40 ${active ? "" : "hidden"} absolute top-0 left-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 shadow-md`}>
            <ul
                className="py-1 px-1 text-sm text-gray-700 dark:text-gray-200">
                <li>
                    <p className="px-1 py-1 font-bold block dark:hover:text-white h-8">
                        Bộ lọc
                    </p>
                </li>
                <li className="relative"
                    onPointerEnter={() => setActiveSubDropdown(true)}>
                    <div
                        className={`h-8 relative flex items-center justify-between w-full px-1 py-1 rounded-sm ${activeSubDropdown ? "bg-gray-100" : ""} dark:hover:bg-gray-600 dark:hover:text-white`}>
                        Trạng thái <NextIcon />
                    </div>

                    <div
                        className={`z-10 ${activeSubDropdown ? "" : "hidden"} absolute top-0 -right-full bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
                        <ul className="py-1 space-y-2 px-1 text-sm text-gray-700 dark:text-gray-200 list-none"
                            onPointerLeave={() => setActiveSubDropdown(false)}>
                            {listStatus.map((s, idx) => {
                                return (
                                    <li key={idx} className="flex space-x-2 hover:bg-gray-200 px-2 py-1 rounded-md">
                                        <input type="checkbox" name={s} onChange={(e) => handleStatusCheck(s, e.target.checked)} />
                                        <label>{s}</label>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    )
}