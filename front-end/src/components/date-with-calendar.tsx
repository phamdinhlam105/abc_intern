import Calendar from "./calendar";

export default function DateWithCalendar({ date }: { date: string }) {
    return (
        <div className="flex items-center">
            <Calendar/>
            <p className="text-gray-600 text-sm ml-2">{date}</p>
        </div>
    )
}