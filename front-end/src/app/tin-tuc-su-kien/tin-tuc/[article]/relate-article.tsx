import EventPost from "@/components/event-post";
import { RELATED_POST } from "@/components/tin-tuc/constants/tin-tuc.constants";

export default function RelateNews({ idCategory }: { idCategory: string }) {
    const relatePosts = RELATED_POST;
    return (
        <div className="px-10 w-3/4">
            <h2 className="text-2xl uppercase my-10 font-bold">Tin tức liên quan</h2>
            <ul className="md:flex justify-between">
                {relatePosts.map(p => {
                    return <li className="md:w-threecol">
                        <EventPost {...p} />
                    </li>
                })}
            </ul>
        </div>
    )
}