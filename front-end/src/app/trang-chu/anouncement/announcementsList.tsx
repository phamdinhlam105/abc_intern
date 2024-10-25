import Announcement from "@/components/annoucement"
import { title } from "process"

export default function Announcements() {
    const announcementsList = [
        {
            title: "Thông báo điều chỉnh thời gian tổ chức hoạt động dạy học trực tuyến cho học sinh tạo CSGD trên địa bàn tỉnh Bạc Liêu",
            createDate: "03/03/2022",
            img: "/images/annoucement.jpg",
            src: "trang-chu"
        },
        {
            title: "Thông báo điều chỉnh thời gian tổ chức hoạt động dạy học trực tuyến cho học sinh tạo CSGD trên địa bàn tỉnh Bạc Liêu",
            createDate: "03/03/2022",
            img: "/images/annoucement.jpg",
            src: "trang-chu"
        }, {
            title: "Thông báo điều chỉnh thời gian tổ chức hoạt động dạy học trực tuyến cho học sinh tạo CSGD trên địa bàn tỉnh Bạc Liêu",
            createDate: "03/03/2022",
            img: "/images/annoucement.jpg",
            src: "trang-chu"
        },
    ]
    return (
        <div>
            <ul className=" space-y-2 list-none px-2">
                {announcementsList.map((a, idx) => {
                    return <li key={idx}>
                        <Announcement {...a}/>
                    </li>
                })}
            </ul>
        </div>
    )
}