import MoreDetailButton from "@/components/moreDetailButton"
import Link from "next/link"
import { redirect } from "next/navigation"

export default function LastestNews() {
    //seed data
    const lastestNews = [
        {
            title: "Quy định mới về chuẩn nghề nghiệp giáo viên cơ sở giáo dục phổ thông",
            src: "news1"
        },
        {
            title: "Ban hành bộ quy tắc ứng xử văn hóa trong trường học trước năm học mới",
            src: "news2"
        },
        {
            title: "Bộ GDĐT gửi công văn đề nghị chủ tịch UBND tỉnh tăng cường đảm bảo an ninh, an toàn trường học.",
            src: "news3"
        },
        {
            title: "Bộ GDĐT gửi công văn đề nghị chủ tịch UBND tỉnh tăng cường đảm bảo an ninh, an toàn trường học.",
            src: "news4"
        }
    ]

    return (
        <div className="px-20 py-10 bg-teal-50 w-full">
            <h2 className="text-4xl font-bold dark:text-white mb-5">
                Tin tức mới nhất
            </h2>
            <ul className=" space-y-1 list-none px-2 md:w-1/2 sm:w-full md:pr-10">
                {lastestNews.map((news, idx) => {
                    return <li key={idx} className="text-lg flex items-center justify-start">
                        <svg className="h-10 w-10 text-gray-400 mr-5" viewBox="0 0 24 24" style={{ flexShrink: 0 }} stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                        <a href={`news/${news.src}`} className="hover:underline">
                            {news.title}
                        </a>
                    </li>
                })}
                <li className="flex justify-end pt-5">
                    <MoreDetailButton src="news" />
                </li>
            </ul>

        </div>
    )
}