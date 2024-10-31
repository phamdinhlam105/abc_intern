import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ArticleEntity } from "./article.entity";
import { ArticleController } from "./article.controller";
import { ArticleService } from "./article.service";
import { CategoryEntity } from "src/category-module/category.entity";


@Module({
    imports: [TypeOrmModule.forFeature([ArticleEntity]),TypeOrmModule.forFeature([CategoryEntity])],
    controllers: [ArticleController],
    providers: [ArticleService],
})
export class ArticleModule { }