import DateWithCalendar from "./date-with-calendar";
import MoreDetailButton from "./more-detail-button"

interface IAnouncement {
    title: string;
    createDate: string;
    img: string;
    src: string;
}

export default function Announcement({ title, createDate, img, src }: IAnouncement) {


    return (
        <div className="flex grid-col gap-4 my-5">
            <div className="w-1/3 ">
                <img
                    className="object-fill"
                    src={`${img}`}
                    alt={title}
                />
            </div>
            <div className="w-2/3 flex-col justify-spacebetween">
                <div>
                    <p className="text-md font-bold tracking-wide pb-10">{title}</p>
                </div>
                <div className="flex justify-between">
                    <DateWithCalendar date={createDate} />
                    <MoreDetailButton src={src} />
                </div>
            </div>
        </div>
    )
}