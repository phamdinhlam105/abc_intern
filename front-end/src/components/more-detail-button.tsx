
import Link from "next/link";
import MoreDetailArrow from "./more-detail-arrow";

export default function MoreDetailButton({ src }: { src: string }) {

    return (
        <Link
            className="flex items-center border-neutral-950 hover:border-b-2 z-10"
            href={src}>
            <p className="text-lg font-bold">Xem thêm</p>
            <MoreDetailArrow/>
        </Link>
    )
}