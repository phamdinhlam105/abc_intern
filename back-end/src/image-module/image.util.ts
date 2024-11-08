import entityToArticle from "src/article-module/article.util";
import { ImageEntity } from "./image.entity";
import Image from './image.interface';

export default function entityToImage(imageEntity: ImageEntity): Image {
   if (imageEntity)
      return ({
         id: imageEntity.id,
         article: entityToArticle(imageEntity.article),
         describe: imageEntity.describe,
         createDate: imageEntity.createDate.toLocaleDateString("en-GB"),
         url: imageEntity.url
      });
   return null;
}