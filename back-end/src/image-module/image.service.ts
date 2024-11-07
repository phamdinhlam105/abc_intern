import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import Image from './image.interface'
import { ImageEntity } from "src/image-module/image.entity";
import { Repository } from "typeorm";
import { UUID } from "crypto";
import entityToImage from "./image.ulti";
import { validate } from 'uuid'
import { CreateImageDto } from "./image.dto";
import { ArticleEntity } from "src/article-module/article.entity";

@Injectable()
export class ImageService {
    constructor(
        @InjectRepository(ImageEntity)
        private imageRepository: Repository<ImageEntity>,

        @InjectRepository(ArticleEntity)
        private articleRepository: Repository<ArticleEntity>
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

    async createImage(image: CreateImageDto): Promise<Image> {
        const newImageEntity = new ImageEntity();
        const { createDate, idArticle, ...rest } = image;
        if (createDate)
            this.dateFormatValid(createDate);
        newImageEntity.createDate = createDate ? new Date(createDate) : new Date();
        Object.assign(newImageEntity, rest);
        if (idArticle) {
            const article = await this.articleRepository.findOneBy({ id: idArticle as UUID });
            if (!article)
                throw new HttpException('article id not found', HttpStatus.NOT_FOUND);
            newImageEntity.article = article;
        }
        await this.imageRepository.save(newImageEntity);
        return entityToImage(newImageEntity);
    }

    async getAllImages(): Promise<Image[]> {
        const images = await this.imageRepository.find({ relations: { article: true } });
        return images.map(entityToImage);
    }

    async getImageById(id: string): Promise<Image | null> {
        this.idValid(id);
        const image = await this.imageRepository.findOne({ where: { id: id as UUID }, relations: { article: true } });
        if (!image)
            throw new HttpException('id not found ', HttpStatus.NOT_FOUND);
        return entityToImage(image);

    }

    async updateImage(id: string, updatedImage: Partial<CreateImageDto>): Promise<Image> {
        this.idValid(id);
        const updatedImageEntity = await this.imageRepository.findOne({ where: { id: id as UUID }, relations: { article: true } });
        if (!updatedImageEntity)
            throw new HttpException('id not found ', HttpStatus.NOT_FOUND);
        const { idArticle, createDate, ...rest } = updatedImage;
        if (createDate) {
            this.dateFormatValid(createDate);
            updatedImageEntity.createDate = new Date(createDate);
        }
        Object.assign(updatedImageEntity, rest);
        if (idArticle && idArticle !== updatedImageEntity.id) {
            const newArticle = await this.articleRepository.findOneBy({ id: idArticle as UUID });
            if (!newArticle)
                throw new HttpException('id article not found', HttpStatus.NOT_FOUND);
            updatedImageEntity.article = newArticle;
        }
        this.imageRepository.save(updatedImageEntity);
        return entityToImage(updatedImageEntity);
    }

    async deleteImage(id: string) {
        this.idValid(id);
        const deleteImage = await this.imageRepository.findOneBy({ id: id as UUID });
        if (!deleteImage)
            throw new HttpException('Image not found', HttpStatus.NOT_FOUND);
        await this.imageRepository.delete(id as UUID);
        return { message: 'Image deleted successfully', status: HttpStatus.OK };
    }

    async getByArticle(id: string) {
        this.idValid(id);
        const article = await this.articleRepository.findBy({ id: id as UUID })
        if (!article)
            throw new HttpException('id article not found', HttpStatus.NOT_FOUND);
        const imagesByArticle = await this.imageRepository.find({ where: { article: article }, relations: { article: true } });
        return imagesByArticle.map(entityToImage);
    }
}