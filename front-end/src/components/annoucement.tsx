import MoreDetailButton from "./more-detail-button"

interface IAnouncement{
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
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                        </svg>
                        <p className="ml-2 font-light text-gray-400">{createDate}</p>
                    </div>

                    <MoreDetailButton src={src} />
                </div>
            </div>
        </div>
    )
}