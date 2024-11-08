import convertEntityToArticle from "src/article-module/article.util";
import { ImageEntity } from "./image.entity";
import IImage from './image.interface';

export default function convertEntityToImage(imageEntity: ImageEntity): IImage {
   if (imageEntity)
      return ({
         id: imageEntity.id,
         article: convertEntityToArticle(imageEntity.article),
         describe: imageEntity.describe,
         createDate: imageEntity.createDate.toLocaleDateString("en-GB"),
         url: imageEntity.url
      });
   return null;
}