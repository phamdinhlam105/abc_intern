import Link from "next/link"

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
        <div>
            <h2 className="text-4xl font-bold dark:text-white mb-10">
                Tin tức mới nhất
            </h2>
            <ul className=" space-y-1 list list-disc list-inside px-10">
                {lastestNews.map((news, idx) => {
                    return <li key={idx} className="text-lg">
                        <a href={`news/${news.src}`} className="hover:underline">
                            {news.title}
                        </a>
                    </li>
                })}
            </ul>
        </div>
    )
}