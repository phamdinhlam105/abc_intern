'use client'
import LatestNewsListSymbol from "@/components/lastest-news-list-symbol";
import MoreDetailButton from "@/components/more-detail-button"
import { LATEST_NEWS } from "@/components/tin-tuc/constants/tin-tuc.constants";
import { useRouter } from "next/navigation";
import slugify from "slugify";

export default function LastestNews() {

    const router = useRouter();

    const clickHandle = (id: number) => {
        const slug = slugify(id.toString(), { lower: true, strict: true });
        router.push(`/tin-tuc-su-kien/tin-tuc/${slug}`);

    }
    return (

        <div className="md:px-20 px-3 py-10 bg-lightcolor w-full">
            <h2 className="text-4xl font-bold dark:text-white mb-5">
                Tin tức mới nhất
            </h2>
            <ul className=" space-y-1 list-none px-2 md:w-1/2 sm:w-full md:pr-10">
                {LATEST_NEWS.map(news => {
                    return <li key={news.id} className="text-lg flex items-center justify-start">
                        <LatestNewsListSymbol />
                        <a onClick={() => clickHandle(news.id)} className="hover:underline cursor-pointer">
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