import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UUID } from "crypto";
import { validate } from 'uuid';
import { ArticleEntity } from "./article.entity";
import { CreateArticleDto } from "./article.dto";
import Article from "./article.interface";
import { CategoryEntity } from "src/category-module/category.entity";
import entityToArticle from "./article.ulti";

@Injectable()
export class ArticleService {
    constructor(
        @InjectRepository(ArticleEntity)
        private articleRepository: Repository<ArticleEntity>,
        @InjectRepository(CategoryEntity)
        private categoryRepository: Repository<CategoryEntity>
    ) { }

    async createArticle(article: CreateArticleDto): Promise<Article> {
        const newArticle = new ArticleEntity();
        const category = await this.categoryRepository.findOneBy({ id: article.idCategory });
        if (category) {
            newArticle.category.id = article.idCategory;
            newArticle.category = category;
        }
        newArticle.title = article.title;
        newArticle.content = article.content;
        newArticle.describe = article.describe;
        newArticle.thumbnail = article.thumbnail;
        newArticle.createDate = article.createDate ? new Date(article.createDate) : new Date();
        await this.articleRepository.save(newArticle);
        return entityToArticle(newArticle);
    }

    async getAllArticle(): Promise<Article[]> {
        const categories = await this.articleRepository.find();
        return categories.map(entityToArticle);
    }

    async getArticleById(id: string): Promise<Article | null> {
        if (!validate(id))
            throw new HttpException('invalid id', HttpStatus.BAD_REQUEST);
        const idUUID = id as UUID;
        const article = await this.articleRepository.findOne({ where: { id: idUUID }, relations: { category: true, gallery: true } });
        if (article)
            return entityToArticle(article);
        throw new HttpException('id not found ', HttpStatus.NOT_FOUND);
    }

    async updateArticle(id: string, updateArticle: Partial<Article>): Promise<Article> {
        if (!validate(id))
            throw new HttpException('invalid id', HttpStatus.BAD_REQUEST);
        const idUUID = id as UUID;
        await this.categoryRepository.update(id, updateArticle);
        const updateArticleEntity = await this.articleRepository.findOneBy({ id: idUUID });
        if (updateArticle)
            return entityToArticle(updateArticleEntity);
        throw new HttpException('id not found ', HttpStatus.NOT_FOUND);
    }

    async deleteArticle(id: string) {
        if (!validate(id))
            throw new HttpException('invalid id', HttpStatus.BAD_REQUEST);
        const idUUID = id as UUID;
        const deleteArticle = await this.articleRepository.findOneBy({ id: idUUID });
        if (deleteArticle) {
            await this.articleRepository.delete(idUUID);
            return { message: 'Category deleted successfully', status: HttpStatus.OK };
        }
        throw new HttpException('Category not found', HttpStatus.NOT_FOUND);
    }

    async getByCategory(idCategory: string): Promise<Article[]> {
        if (!validate(idCategory))
            throw new HttpException('invalid id', HttpStatus.BAD_REQUEST);
        const idUUID = idCategory as UUID;
        const category = await this.categoryRepository.findBy({ id: idUUID });
        const listArticle = await this.articleRepository.findBy({ category: category });
        return listArticle.map(entityToArticle);
    }
}