"use client"
import DateWithCalendar from "@/components/date-with-calendar"
import { GALLERY } from "@/components/gallery/constants/gallery.constants"
import { Picture } from "@/components/models/picture-model"
import { useEffect, useState } from "react"
import { getPictures } from "../get-posts"

export default function PictureList() {
    const [gallery, setGallery] = useState<Picture[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPictures();
            if (data)
                setGallery(data);
        }
        fetchData();
    }, [])

    return (
        <div className="md:w-7/12">
            <ul className="md:grid grid-cols-2 gap-4 justify-between ">
                {gallery.slice(0, 2).map((p, idx) => {
                    return <li key={idx} className="bg-primary">
                        <div>
                            <img
                                className="object-cover w-full h-64"
                                src={p.url}
                                alt={p.describe} />
                            <div className="py-5 px-3">
                                <DateWithCalendar date={p.createDate} />
                                <h2 className="text-2xl font-bold my-3">{p.name}</h2>
                                <p>{p.describe}</p>
                            </div>
                        </div>
                    </li>
                })}
            </ul>
        </div>
    )
}