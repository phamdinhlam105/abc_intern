import { Module } from "@nestjs/common";
import { ImageService } from "./image.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ImageEntity } from "./image.entity";
import { ImageController } from "./image.controller";
import { ArticleEntity } from "src/article-module/article.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ImageEntity]), TypeOrmModule.forFeature([ArticleEntity])],
  controllers: [ImageController],
  providers: [ImageService],
})
export class ImageModule { }