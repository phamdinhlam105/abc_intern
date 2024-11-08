import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import Image from './image.interface'
import { ImageEntity } from "src/image-module/image.entity";
import { Repository } from "typeorm";
import { UUID } from "crypto";
import entityToImage from "./image.util";
import { validate } from 'uuid'
import { CreateImageDto } from "./image.dto";
import { ArticleEntity } from "src/article-module/article.entity";
import { plainToClass } from "class-transformer";

@Injectable()
export class ImageService {
    constructor(
        @InjectRepository(ImageEntity)
        private imageRepository: Repository<ImageEntity>,

        @InjectRepository(ArticleEntity)
        private articleRepository: Repository<ArticleEntity>
    ) { }

    private checkIdIsValid(id: string) {
        if (!validate(id))
            throw new HttpException('invalid id', HttpStatus.BAD_REQUEST);
    }

    async createImage(image: CreateImageDto): Promise<Image> {
        const newImageEntity = new ImageEntity();
        const { idArticle, ...rest } = image;
        Object.assign(newImageEntity, rest);
        if (idArticle) {
            const article = await this.articleRepository.findOneBy({ id: idArticle, isActive: true });
            if (!article)
                throw new HttpException('article id not found', HttpStatus.NOT_FOUND);
            newImageEntity.article = article;
        }
        await this.imageRepository.save(newImageEntity);
        return entityToImage(newImageEntity);
    }

    async getAllImages(): Promise<Image[]> {
        const images = await this.imageRepository.find({
            where: { isActive: true },
            relations: { article: true }
        });
        return images.map(entityToImage);
    }

    async getImageById(id: string): Promise<Image | null> {
        this.checkIdIsValid(id);
        const image = await this.imageRepository.findOne({
            where: { id: id as UUID },
            relations: { article: true }
        });
        if (!image)
            throw new HttpException('id not found ', HttpStatus.NOT_FOUND);
        return entityToImage(image);
    }

    async updateImage(id: string, updatedImageDto: Partial<CreateImageDto>): Promise<Image> {
        this.checkIdIsValid(id);
        const updatedImageEntity = await this.imageRepository.findOne({
            where: { id: id, isActive: true },
            relations: { article: true }
        });
        if (!updatedImageEntity)
            throw new HttpException('id not found ', HttpStatus.NOT_FOUND);
        const updateImage = plainToClass(CreateImageDto, updatedImageDto, { excludeExtraneousValues: true });
        console.log(updateImage);
        const { idArticle, ...rest } = updateImage;
        Object.assign(updatedImageEntity, rest);
        if (idArticle && idArticle !== updatedImageEntity.article.id) {
            const newArticle = await this.articleRepository.findOneBy({ id: idArticle, isActive: true });
            if (!newArticle)
                throw new HttpException('id article not found', HttpStatus.NOT_FOUND);
            updatedImageEntity.article = newArticle;
        }
        this.imageRepository.save(updatedImageEntity);
        return entityToImage(updatedImageEntity);
    }

    async deleteImage(id: string) {
        this.checkIdIsValid(id);
        const deleteImage = await this.imageRepository.findOne({
            where: { id: id, isActive: true },
            relations: { article: true }
        });
        if (!deleteImage)
            throw new HttpException('Image not found', HttpStatus.NOT_FOUND);
        deleteImage.isActive = false;
        this.imageRepository.save(deleteImage);
        const { isActive, ...returnImage } = deleteImage;
        return { message: 'Image deleted successfully', deletedImage: returnImage };
    }

    async getByArticle(id: string): Promise<Image[]> {
        this.checkIdIsValid(id);
        const article = await this.articleRepository.findOneBy({ id: id, isActive: true });
        if (!article)
            throw new HttpException('id article not found', HttpStatus.NOT_FOUND);
        const imagesByArticle = await this.imageRepository.find({
            where: { article: { id: article.id }, isActive: true }
        });
        return imagesByArticle.map(entityToImage);
    }
}