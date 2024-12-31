import { useEffect, useState } from "react";
import DateWithCalendar from "./date-with-calendar";
import { Article } from "./models/article-model";
import MoreDetailButton from "./more-detail-button"
import { getLinkByPostId } from "@/app/trang-chu/get-posts";


export default function Announcement({ id, title, createDate, thumbnail }: Article) {
    const [src, setSrc] = useState('');

    useEffect(() => {
        const fecthData = async () => {
            const data = await getLinkByPostId(id);
            if (data)
                setSrc(data.link);
        }
        fecthData();
    }, []);

    return (
        <div className="flex grid-col gap-4 my-5">
            <div className="w-1/3 ">
                <img
                    className="object-fill"
                    src={`${thumbnail}`}
                    alt={title}
                />
            </div>
            <div className="w-2/3 flex-col justify-spacebetween">
                <div>
                    <p className="text-md font-bold tracking-wide pb-10">{title}</p>
                </div>
                <div className="flex justify-between">
                    <DateWithCalendar date={createDate} />
                    <MoreDetailButton src={'post' + src} />
                </div>
            </div>
        </div>
    )
}