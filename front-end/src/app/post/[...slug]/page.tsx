'use client'
import ArticleContent from "./content";
import RelateNews from "./relate-article";
import ArticleTitle from "./title";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Article } from "@/components/models/article-model";
import { getPostById } from "@/app/trang-chu/get-posts";

export default function NewsDetail() {
    const pathname = usePathname();
    const [post, setPost] = useState<Article | undefined>(undefined)

    useEffect(() => {
        const fecthData = async () => {
            const pathSegments = pathname.split('/');
            const articleId = pathSegments[pathSegments.length - 1];
            if (articleId) {
                const data = await getPostById(articleId);
                if (data) {
                    setPost(data);
                }
            }
        }
        fecthData();
    }, [pathname]);
    if (post)
        return < div className="flex flex-col items-center justify-center" >
            < ArticleTitle {...post} />
            < ArticleContent {...post} />
            < RelateNews idCategory={post.category?.id.toString()} />
        </div >
    else
        return <div>No content</div>
}