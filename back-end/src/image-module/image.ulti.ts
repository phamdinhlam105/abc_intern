import entityToArticle from "src/article-module/article.ulti";
import { ImageEntity } from "./image.entity";
import Image from './image.interface';

export default function entityToImage(imageEntity: ImageEntity): Image {
   return ({
      id: imageEntity.id,
      article: entityToArticle(imageEntity.article),
      describe: imageEntity.describe,
      createDate: imageEntity.createDate.toLocaleDateString("en-GB"),
      url: imageEntity.url
   })
}