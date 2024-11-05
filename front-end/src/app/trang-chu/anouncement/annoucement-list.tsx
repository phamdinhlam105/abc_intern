import Announcement from "@/components/annoucement"
import { ANNOUCEMENTS_LIST } from "@/components/tin-tuc/constants/tin-tuc.constants"

export default function Announcements() {

    const announcementsList = ANNOUCEMENTS_LIST

    return (
        <div>
            <ul className=" space-y-2 list-none px-2">
                {announcementsList.map((a, idx) => {
                    return <li key={idx}>
                        <Announcement {...a} />
                    </li>
                })}
            </ul>
        </div>
    )
}