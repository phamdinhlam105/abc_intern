import { ImageEntity } from "./image.entity";
import Image from './image.interface'

export default function entityToImage(imageEntity: ImageEntity): Image {
   return ({
      id: imageEntity.id,
      idArticle: imageEntity.idArticle,
      describe: imageEntity.describe,
      createDate: imageEntity.createDate.toString(),
      url: imageEntity.url
   })
}