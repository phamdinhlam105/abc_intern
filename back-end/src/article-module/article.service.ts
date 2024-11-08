import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { validate } from 'uuid';
import { ArticleEntity } from "./article.entity";
import { CreateArticleDto } from "./article.dto";
import Article from "./article.interface";
import { CategoryEntity } from "src/category-module/category.entity";
import entityToArticle from "./article.util";
import { ImageEntity } from "src/image-module/image.entity";
import { plainToClass } from "class-transformer";
import entityToImage from "src/image-module/image.util";

@Injectable()
export class ArticleService {
    constructor(
        @InjectRepository(ArticleEntity)
        private articleRepository: Repository<ArticleEntity>,
        @InjectRepository(CategoryEntity)
        private categoryRepository: Repository<CategoryEntity>,
        @InjectRepository(ImageEntity)
        private imageRepository: Repository<ImageEntity>
    ) { }

    private checkIdIsValid(id: string) {
        if (!validate(id))
            throw new HttpException('invalid id', HttpStatus.BAD_REQUEST);
    }

    async createArticle(createArticleDto: CreateArticleDto): Promise<Article> {
        const newArticle = new ArticleEntity();
        const { idCategory, ...rest } = createArticleDto;
        const category = await this.categoryRepository.findOneBy({ id: idCategory, isActive: true });
        if (!category)
            throw new HttpException('id category not found', HttpStatus.NOT_FOUND);
        newArticle.category = category;
        Object.assign(newArticle, rest);
        await this.articleRepository.save(newArticle);
        return entityToArticle(newArticle);
    }

    async getAllArticle(): Promise<Article[]> {
        const categories = await this.articleRepository.find({
            where: { isActive: true },
            relations: { category: true }
        });
        return categories.map(entityToArticle);
    }

    async getArticleById(id: string): Promise<Article | null> {
        this.checkIdIsValid(id);
        const article = await this.articleRepository.findOne({
            where: { id: id, isActive: true },
            relations: { category: true }
        });
        if (article)
            return entityToArticle(article);
        throw new HttpException('id not found ', HttpStatus.NOT_FOUND);
    }

    async updateArticle(id: string, updatedArticleDto: Partial<CreateArticleDto>): Promise<Article> {
        this.checkIdIsValid(id);
        const updatedArticleEntity = await this.articleRepository.findOne({
            where: { id: id, isActive: true },
            relations: { category: true }
        });
        if (!updatedArticleEntity)
            throw new HttpException('id not found', HttpStatus.NOT_FOUND);
        const updateArticle = plainToClass(CreateArticleDto, updatedArticleDto, { excludeExtraneousValues: true });
        const { idCategory, ...rest } = updateArticle;
        Object.assign(updatedArticleEntity, rest)
        if (idCategory) {
            const category = await this.categoryRepository.findOneBy({ id: idCategory, isActive: true });
            if (!category)
                throw new HttpException('id category not found', HttpStatus.NOT_FOUND);
            updatedArticleEntity.category = category;
        }
        await this.articleRepository.save(updatedArticleEntity);
        return entityToArticle(updatedArticleEntity);
    }

    async deleteArticle(id: string) {
        this.checkIdIsValid(id);
        const deleteArticle = await this.articleRepository.findOne({
            where: { id: id, isActive: true },
            relations: { gallery: true }
        });
        if (!deleteArticle)
            throw new HttpException('id article not found', HttpStatus.NOT_FOUND);
        for (const image of deleteArticle.gallery) {
            if (image.isActive) {
                image.isActive = false;
                await this.imageRepository.save(image);
            }
        }
        deleteArticle.isActive = false;
        await this.articleRepository.save(deleteArticle);
        return {
            message: 'Article deleted',
            deletedArticle: entityToArticle(deleteArticle),
            deletedImage: deleteArticle.gallery.map(entityToImage)
        };

    }

    async getByCategory(idCategory: string): Promise<Article[]> {
        this.checkIdIsValid(idCategory);
        const category = await this.categoryRepository.findOneBy({ id: idCategory, isActive: true });
        if (!category)
            throw new HttpException('id category not found', HttpStatus.NOT_FOUND);
        const articleByCategory = await this.articleRepository.findBy({
            category: { id: category.id }, isActive: true
        });
        return articleByCategory.map(entityToArticle);
    }
}