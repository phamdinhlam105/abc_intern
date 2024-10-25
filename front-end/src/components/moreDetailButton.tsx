
import Link from "next/link";

export default function MoreDetailButton({ src }: { src: string }) {

    return (
        <Link
            className="flex items-center border-neutral-950 hover:border-b-4"
            href={`/${src}`}>
            <p className="text-lg font-bold">Xem thêm</p>
            <svg className="h-8 w-8 text-black-400" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="17" y1="7" x2="7" y2="17" />
                <polyline points="8 7 17 7 17 16" />
            </svg>
        </Link>
    )
}