import entityToCategory from "src/category-module/category.ulti";
import { ArticleEntity } from "./article.entity";
import Article from "./article.interface";
import entityToImage from "src/image-module/image.ulti";

export default function entityToArticle(entity: ArticleEntity): Article {
    return ({
        id: entity.id,
        idCategory: entity.idCategory,
        title: entity.title,
        content: entity.content,
        thumbnail: entity.thumbnail,
        createDate:entity.createDate,
        category: entityToCategory(entity.category),
        gallery: entity.gallery ? entity.gallery.map(image => entityToImage(image)) : []
    })
}