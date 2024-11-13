"use client"
import Pagination from "@/components/pagination";
import { useState } from "react";

export default function ArticleList({ article }: {
    article: {
        id: number,
        title: string,
        author: string,
        status: string,
        createDate: string
    }[]
}) {

    const [currentPage, setCurrentPage] = useState(0);
    const [numberPerPage, setNumberPerPage] = useState(10);


    return (
        <div>
            <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {article.slice(currentPage * numberPerPage, (currentPage + 1) * numberPerPage).map(article => {
                    return (
                        <li key={article.id} className="divide-y borderLine rounded-lg bg-white shadow hover:shadow-lg duration-100 flex flex-col justify-between">
                            <div className="flex flex-col justify-between h-full w-full divide-y">
                                <a href="#" className="text-sm font-bold text-gray-900 uppercase mb-2 p-4">{article.title}</a>
                                <div className="p-4">
                                    <p className="mt-auto truncate text-sm font-semibold text-gray-500 mb-2 flex w-full">
                                        <span className="font-normal mr-2">Author:</span>{article.author}
                                        <span
                                            className={`ml-auto inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset 
                                            ${() => {
                                                    switch (article.status) {
                                                        case "deleted":
                                                            return "text-red-600 ring-red-600/20";
                                                        case "published":
                                                            return "text-primary ring-green-600/20";
                                                        default:
                                                            return "text-orage ring-orange-600/20";
                                                    }
                                                }}`}>
                                            {article.status}
                                        </span>
                                    </p>
                                    <span className="inline-flex flex-shrink-0 items-center rounded-md bg-gray-50 py-1 px-1 text-sm font-medium ">{article.createDate}</span>

                                </div>
                            </div>
                            <div>
                                <div className="-mt-px flex divide-x">
                                    <div className="flex w-0 flex-1">
                                        <a href="#"
                                            className="duration-100 relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg py-4 text-sm font-semibold text-gray-900 hover:bg-green-200">
                                            DETAIL
                                        </a>
                                    </div>
                                    <div className="-ml-px flex w-0 flex-1">
                                        <a href="#" className="duration-100 relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg py-4 text-sm font-semibold text-gray-900 hover:bg-red-500 hover:text-neutral-50">
                                            DELETE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
            <Pagination
                paginationList={article}
                numberPerPage={numberPerPage}
                setNumberPerPage={setNumberPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    )
}