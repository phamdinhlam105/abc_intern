"use client"
import { useEffect, useState } from "react"
import DateWithCalendar from "./date-with-calendar"
import { Article } from "./models/article-model"
import MoreDetailButton from "./more-detail-button"
import { getLinkByPostId } from "@/app/trang-chu/get-posts"

export default function EventPost({ id, thumbnail, title, createDate, describe }: Article) {
    const [src, setSrc] = useState('');

    useEffect(() => {
        const fecthData = async () => {
            const data = await getLinkByPostId(id);
            if (data)
                setSrc(data.link);
        }
        fecthData();
    },[]);

    return (
        <div>
            <img
                className="w-full h-64 object-cover"
                src={thumbnail} alt={title} />
            <div className="px-5 truncate ">
                <h2 className="text-2xl py-5 h-20 truncate">{title}</h2>
                <DateWithCalendar date={createDate} />
                <hr className=" my-5 text-gray-600" />
                <p className="text-gray-600 truncate">{describe}</p>
                <div className="flex justify-end py-5">
                    <MoreDetailButton src={'post/'+src} />
                </div>
            </div>
        </div>
    )
}