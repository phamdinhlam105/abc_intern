'use client'
import { ARTICLE } from "@/components/tin-tuc/constants/tin-tuc.constants";
import ArticleContent from "./content";
import RelateNews from "./relate-article";
import ArticleTitle from "./title";

export default function NewsDetail() {

    //fetch data
    const article = ARTICLE
    if (!article) {
        return <div>Loading...</div>;
    }
    return (
        <div className="flex flex-col items-center justify-center">
            <ArticleTitle {...article} />
            <ArticleContent content={article.content} describe={article.describe} />
            <RelateNews idCategory={article.category.id.toString()} />
        </div>
    );
}