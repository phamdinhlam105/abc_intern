"use client"
import { ARTICLE_LIST } from "@/components/article/constant/article.constants";
import DropDownIcon from "@/components/icons/drop-down-icon";
import FilterIcon from "@/components/icons/filter-icon";
import SearchIcon from "@/components/icons/search-icon";
import ShowPropIcon from "@/components/icons/show-props-icon";
import { useState } from "react";

export default function ArticleButton({ setArticle }: {
    setArticle: React.Dispatch<React.SetStateAction<any[]>>
}) {

    const [Search, setSearch] = useState('');

    const searchHandle = (e: React.FormEvent) => {
        e.preventDefault();
        if (Search)
            setArticle(ARTICLE_LIST.filter(a => a.title.toLowerCase().includes(Search.toLocaleLowerCase())));
        
        else
            setArticle(ARTICLE_LIST);
    }

    return (
        <div className="inline-flex items-center mb-2 w-full justify-start text-neutral-50">
            <button className=" bg-primary mx-1 w-10 h-10 items-center flex justify-center rounded-md hover:opacity-90">
                <FilterIcon />
            </button>
            <form className="flex items-center max-w-sm" onSubmit={searchHandle}>
                <div className="relative w-full p-1">
                    <input
                        type="text"
                        value={Search}
                        onChange={e => setSearch(e.target.value)}
                        id="simple-search"
                        className="h-10 text-black borderLine focus:outline-none text-sm rounded-lg focus:ring-2 focus:ring-primary focus:ring-offset-2 block w-full ps-2 p-2 pe-10 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-white dark:focus:border-white"
                        placeholder="Từ khóa..." />
                    <button
                        type="submit"
                        className="items-center w9 h-9 outline-white absolute right-1.5 top-1.5 p-2 text-sm font-medium hover:bg-gray-100 rounded-md rounded-l-sm focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-white">
                        <SearchIcon />
                    </button>
                </div>
            </form>
            <button className="text-black h-10 mx-2 rounded-md hover:bg-gray-100 px-5 py-items-center justify-center borderLine font-semibold text-sm"
                onClick={() => setSearch('')}>
                Xóa bộ lọc
            </button>
            <button className="hover:bg-gray-100 borderLine text-black mx-1 w-10 h-10 items-center flex justify-center rounded-md hover:opacity-90">
                <ShowPropIcon />
            </button>
            <button className="h-10 mx-2 ml-auto rounded-md bg-primary text-white hover:opacity-90 duration-100 px-5 py-items-center justify-center borderLine font-semibold text-sm">
                Thêm mới
            </button>
            <button className="flex items-center justify-between h-10 mx-2 rounded-md bg-primary text-white hover:opacity-90 duration-100 px-2 py-items-center justify-center borderLine font-semibold text-sm">
                Thao tác hàng loạt
                <DropDownIcon />
            </button>
        </div>
    )
}