'use client'
import { ARTICLE } from "@/components/tin-tuc/constants/tin-tuc.constants";
import ArticleContent from "./content";
import RelateNews from "./relate-article";
import ArticleTitle from "./title";

export default function NewsDetail() {

    if (!ARTICLE) {
        return <div>Loading...</div>;
    }
    return (
        <div className="flex flex-col items-center justify-center">
            <ArticleTitle {...ARTICLE} />
            <ArticleContent content={ARTICLE.content} describe={ARTICLE.describe} />
            <RelateNews idCategory={ARTICLE.category.id.toString()} />
        </div>
    );
}