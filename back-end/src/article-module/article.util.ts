import convertEntityCategory from "src/category-module/category.util";
import { ArticleEntity } from "./article.entity";
import IArticle from "./article.interface";

export default function convertEntityToArticle(entity: ArticleEntity): IArticle {
    if (entity)
        return ({
            id: entity.id,
            title: entity.title,
            content: entity.content,
            thumbnail: entity.thumbnail,
            describe: entity.describe,
            createDate: entity.createDate.toLocaleDateString("en-GB"),
            category: convertEntityCategory(entity.category)
        });
    return null
}