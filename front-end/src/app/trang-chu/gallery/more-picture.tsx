import MorePictureArrow from "@/components/more-picture-arrow";
import Link from "next/link";

export default function MorePicture() {
    return (
        <div className="flex items-end w-10 relative">
            <div>
                <Link
                    href="#"
                    className="md:absolute h-10 md:w-96 w-80 flex text-lg tracking-widest origin-top-left md:-rotate-90 items-center white-space-nowrap hover:scale-105 duration-150">
                    <MorePictureArrow />
                    XEM THÊM HÌNH ẢNH</Link>
            </div>
        </div>
    )
}