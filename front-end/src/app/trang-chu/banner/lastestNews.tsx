'use client'
import MoreDetailButton from "@/components/more-detail-button"
import { useRouter } from "next/navigation";
import slugify from "slugify";

export default function LastestNews() {
    const router = useRouter();
    //fetch data
    const lastestNews = [
        {
            id: 1,
            title: "Quy định mới về chuẩn nghề nghiệp giáo viên cơ sở giáo dục phổ thông",
            src: "news1"
        },
        {
            id: 2,
            title: "Ban hành bộ quy tắc ứng xử văn hóa trong trường học trước năm học mới",
            src: "news2"
        },
        {
            id: 3,
            title: "Bộ GDĐT gửi công văn đề nghị chủ tịch UBND tỉnh tăng cường đảm bảo an ninh, an toàn trường học.",
            src: "news3"
        },
        {
            id: 4,
            title: "Bộ GDĐT gửi công văn đề nghị chủ tịch UBND tỉnh tăng cường đảm bảo an ninh, an toàn trường học.",
            src: "news4"
        }
    ]
    const clickHandle=(id:number)=>{
        const slug = slugify(id.toString(), { lower: true, strict: true });
        router.push(`/tin-tuc-su-kien/tin-tuc/${slug}`);

    }
    return (
        
        <div className="md:px-20 px-3 py-10 bg-lightcolor w-full">
            <h2 className="text-4xl font-bold dark:text-white mb-5">
                Tin tức mới nhất
            </h2>
            <ul className=" space-y-1 list-none px-2 md:w-1/2 sm:w-full md:pr-10">
                {lastestNews.map(news => {
                    return <li key={news.id} className="text-lg flex items-center justify-start">
                        <svg className="h-10 w-10 text-gray-400 md-5 mr-2" viewBox="0 0 24 24" style={{ flexShrink: 0 }} stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                        <a onClick={()=>clickHandle(news.id)} className="hover:underline cursor-pointer">
                            {news.title}
                        </a>
                    </li>
                })}
                <li className="flex justify-end pt-5">
                    <MoreDetailButton src="trang-chu" />
                </li>
            </ul>

        </div>
    )
}