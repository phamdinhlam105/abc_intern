import Announcement from "@/components/annoucement"
import { ANNOUCEMENTS_LIST } from "@/components/tin-tuc/constants/tin-tuc.constants"

export default function Announcements() {

    return (
        <div>
            <ul className=" space-y-2 list-none px-2">
                {ANNOUCEMENTS_LIST.map((a, idx) => {
                    return <li key={idx}>
                        <Announcement {...a} />
                    </li>
                })}
            </ul>
        </div>
    )
}