import { Article } from "@/components/models/article-model";
import Breadcrumb from "@/components/tin-tuc/breadcrumb";

export default function ArticleTitle({ title, thumbnail, category }: Article) {
    console.log(category);
    
    return (
        <div className="w-full md:h-96 h-64 md:px-30 flex items-end justify-center" style={{
            backgroundImage: `url(${thumbnail})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <div className="md:w-2/3 w-3/4 translate-y-1/3 bg-secondary text-white md:py-14 md:px-20 px-3 py-3">
                <Breadcrumb category={category} title={title} />
                <p>Tải file đính kèm</p>
            </div>
        </div>
    )
}