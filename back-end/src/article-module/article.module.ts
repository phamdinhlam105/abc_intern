import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ArticleEntity } from "./article.entity";
import { ArticleController } from "./article.controller";
import { ArticleService } from "./article.service";
import { CategoryEntity } from "src/category-module/category.entity";
import { ImageEntity } from "src/image-module/image.entity";


@Module({
    imports: [TypeOrmModule.forFeature([ArticleEntity,CategoryEntity,ImageEntity])],
    controllers: [ArticleController],
    providers: [ArticleService],
})
export class ArticleModule { }