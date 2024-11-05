import DateWithCalendar from "@/components/date-with-calendar"
import { GALLERY } from "@/components/gallery/constants/gallery.constants"


export default function PictureList() {

    return (
        <div className="md:w-7/12">
            <ul className="md:grid grid-cols-2 gap-4 justify-between ">
                {GALLERY.map((p, idx) => {
                    return <li key={idx} className="bg-primary">
                        <div>
                            <img
                                className="object-cover w-full h-64"
                                src={p.img}
                                alt={p.title} />
                            <div className="py-5 px-3">
                                <DateWithCalendar date={p.createDate} />
                                <h2 className="text-2xl font-bold my-3">{p.title}</h2>
                                <p>{p.describe}</p>
                            </div>
                        </div>
                    </li>
                })}
            </ul>
        </div>
    )
}