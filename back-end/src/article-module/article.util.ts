import entityToCategory from "src/category-module/category.util";
import { ArticleEntity } from "./article.entity";
import Article from "./article.interface";

export default function entityToArticle(entity: ArticleEntity): Article {
    if (entity)
        return ({
            id: entity.id,
            title: entity.title,
            content: entity.content,
            thumbnail: entity.thumbnail,
            describe: entity.describe,
            createDate: entity.createDate.toLocaleDateString("en-GB"),
            category: entityToCategory(entity.category)
        });
    return null
}