import Link from "next/link";

export default function MorePicture() {
    return (
        <div className="flex items-end w-10 relative">
            <div>
                <Link
                    href="#"
                    className="md:absolute h-10 md:w-96 w-80 flex text-lg tracking-widest origin-top-left md:-rotate-90 items-center white-space-nowrap hover:scale-105 duration-150">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24"
                        strokeWidth={1} stroke="currentColor"
                        className="size-12 rotate-45">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>XEM THÊM HÌNH ẢNH</Link>
            </div>
        </div>
    )
}