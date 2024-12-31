"use client"
import Announcement from "@/components/annoucement"
import { useEffect, useState } from "react"
import { getAnnoucements } from "../get-posts";
import { Article } from "@/components/models/article-model";

export default function Announcements() {
    const [annoucements, setAnnoucements] = useState<Article[]>([]);

    useEffect(() => {
        const fecthData = async () => {
            const result = await getAnnoucements();
            if (result)
                setAnnoucements(result);
        }
        fecthData();
    },[])

    return (
        <div>
            <ul className=" space-y-2 list-none px-2">
                {annoucements.slice(0, 3).map((a) => {
                    return <li key={a.id}>
                        <Announcement {...a} />
                    </li>
                })}
            </ul>
        </div>
    )
}