import { Article } from "@/components/models/article-model";

export default function ArticleContent({ content, describe }: Article) {

    return (
        <div className="py-10 md:px-20 w-3/4">
            <p className="mt-20 text-xl font-bold">{describe}</p>
            <pre className="whitespace-pre-wrap">
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </pre>
        </div >
    )
}