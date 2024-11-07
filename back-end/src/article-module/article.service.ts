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

    private idValid(id: string) {
        if (!validate(id))
            throw new HttpException('invalid id', HttpStatus.BAD_REQUEST);
    }

    private dateFormatValid(date: string) {
        const parseDate = new Date(date);
        if (parseDate.toString() === 'Invalid Date')
            throw new HttpException('invalid date format', HttpStatus.BAD_REQUEST);
    }

    async createArticle(article: CreateArticleDto): Promise<Article> {
        const newArticle = new ArticleEntity();
        const { createDate, idCategory, ...rest } = article;
        const category = await this.categoryRepository.findOneBy({ id: idCategory });
        if (!category)
            throw new HttpException('id category not found', HttpStatus.NOT_FOUND);
        newArticle.category = category;
        if (createDate)
            this.dateFormatValid(createDate);
        newArticle.createDate = createDate ? new Date(createDate) : new Date();
        Object.assign(newArticle, rest);
        await this.articleRepository.save(newArticle);
        return entityToArticle(newArticle);
    }

    async getAllArticle(): Promise<Article[]> {
        const categories = await this.articleRepository.find({ relations: { category: true } });
        return categories.map(entityToArticle);
    }

    async getArticleById(id: string): Promise<Article | null> {
        this.idValid(id);
        const article = await this.articleRepository.findOne({ where: { id: id as UUID }, relations: { category: true } });
        if (article)
            return entityToArticle(article);
        throw new HttpException('id not found ', HttpStatus.NOT_FOUND);
    }

    async updateArticle(id: string, updatedArticle: Partial<CreateArticleDto>): Promise<Article> {
        this.idValid(id);
        const updatedArticleEntity = await this.articleRepository.findOneBy({ id: id as UUID })
        if (!updatedArticleEntity)
            throw new HttpException('id not found', HttpStatus.NOT_FOUND);
        const { idCategory, createDate, ...rest } = updatedArticle;
        Object.assign(updatedArticleEntity, rest)
        if (createDate) {
            this.dateFormatValid(createDate);
            updatedArticleEntity.createDate = new Date(createDate);
        }
        if (idCategory) {
            const category = await this.categoryRepository.findOneBy({ id: idCategory });
            if (!category)
                throw new HttpException('id category not found', HttpStatus.NOT_FOUND);
            updatedArticleEntity.category = category;
        }
        await this.articleRepository.save(updatedArticleEntity);
        return entityToArticle(updatedArticleEntity);
    }

    async deleteArticle(id: string) {
        this.idValid(id);
        const deleteArticle = await this.articleRepository.findOneBy({ id: id as UUID });
        if (!deleteArticle)
            throw new HttpException('Category not found', HttpStatus.NOT_FOUND);
        try {
            await this.articleRepository.delete(deleteArticle);
            return { message: 'Article deleted successfully', status: HttpStatus.OK };
        }
        catch (error) {
            throw new HttpException('Article can not be deleted', HttpStatus.CONFLICT);
        }
    }

    async getByCategory(idCategory: string): Promise<Article[]> {
        this.idValid(idCategory);
        const idUUID = idCategory as UUID;
        const category = await this.categoryRepository.findBy({ id: idUUID });
        const listArticle = await this.articleRepository.findBy({ category: category });
        return listArticle.map(entityToArticle);
    }
}