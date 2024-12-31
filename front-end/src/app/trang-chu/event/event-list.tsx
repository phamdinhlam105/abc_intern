"use client"
import EventPost from "@/components/event-post"
import { Article } from "@/components/models/article-model"
import { useEffect, useState } from "react"
import { getEvents } from "../get-posts"

export default function EventList() {
    const [events,setEvents] = useState<Article[]>([]);
    useEffect(()=>{
        const fetchData = async()=>{
            const data = await getEvents();
            if(data)
                setEvents(data);
        }
        fetchData();
    },[])
    return (
        <div>
            <ul className="md:grid grid-cols-3 gap-4 justify-between ">
                {events.slice(0,3).map(e => {
                    return <li key={e.id} className="my-3 bg-white text-black">
                        <EventPost{...e} />
                    </li>
                })}
            </ul>
        </div>
    )
}