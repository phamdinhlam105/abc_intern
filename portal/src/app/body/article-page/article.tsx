"use client"
import { ARTICLE_LIST } from "@/components/article/constant/article.constants";
import ArticleButton from "./article-button";
import ArticleList from "./article-list";
import { useEffect, useState } from "react";


export default function Article() {
    const [article, setArticle] = useState(ARTICLE_LIST);
    
    return (
        <div className="p-3 borderLine rounded-md shadow">
           <ArticleButton setArticle={setArticle}/>
           <ArticleList article={article}/>
        </div>
    )
}