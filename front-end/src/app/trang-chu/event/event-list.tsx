import EventPost from "@/components/event-post"
import { EVENT_LIST } from "@/components/tin-tuc/constants/tin-tuc.constants"

export default function EventList() {
    const eventList = EVENT_LIST;

    return (
        <div>
            <ul className="md:grid grid-cols-3 gap-4 justify-between ">
                {eventList.map(e => {
                    return <li key={e.id} className="my-3 bg-white text-black">
                        <EventPost{...e} />
                    </li>
                })}
            </ul>
        </div>
    )
}