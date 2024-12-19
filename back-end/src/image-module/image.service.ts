import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import IImage from './image.interface'
import { ImageEntity } from "src/image-module/image.entity";
import { Repository } from "typeorm";
import convertEntityToImage from "./image.util";
import { validate } from 'uuid'
import { CreateImageDto, UpdateImageDto } from "./image.dto";
import { ArticleEntity } from "src/article-module/article.entity";

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

    async createImage(createImageDto: CreateImageDto): Promise<IImage> {
        const newImageEntity = new ImageEntity();
        const { idArticle, ...rest } = createImageDto;
        Object.assign(newImageEntity, rest);
        if (idArticle) {
            const article = await this.articleRepository.findOneBy({ id: idArticle, isActive: true });
            if (!article)
                throw new HttpException('article id not found', HttpStatus.NOT_FOUND);
            newImageEntity.article = article;
        }
        await this.imageRepository.save(newImageEntity);
        return convertEntityToImage(newImageEntity);
    }

    async getAllImages(): Promise<IImage[]> {
        const images = await this.imageRepository.find({
            where: { isActive: true },
            relations: { article: true }
        });
        return images.map(convertEntityToImage);
    }

    async getImageById(id: string): Promise<IImage | null> {
        this.checkIdIsValid(id);
        const image = await this.imageRepository.findOne({
            where: { id: id, isActive: true },
            relations: { article: true }
        });
        if (!image)
            throw new HttpException('id not found ', HttpStatus.NOT_FOUND);
        return convertEntityToImage(image);
    }

    async updateImage(id: string, updatedImageDto: UpdateImageDto): Promise<IImage> {
        this.checkIdIsValid(id);
        const updatedImageEntity = await this.imageRepository.findOne({
            where: { id: id, isActive: true },
            relations: { article: true }
        });
        if (!updatedImageEntity)
            throw new HttpException('id not found ', HttpStatus.NOT_FOUND);
        const { idArticle, ...rest } = updatedImageDto;
        Object.assign(updatedImageEntity, rest);
        if (idArticle && idArticle !== updatedImageEntity.article.id) {
            const newArticle = await this.articleRepository.findOneBy({ id: idArticle, isActive: true });
            if (!newArticle)
                throw new HttpException('id article not found', HttpStatus.NOT_FOUND);
            updatedImageEntity.article = newArticle;
        }
        this.imageRepository.save(updatedImageEntity);
        return convertEntityToImage(updatedImageEntity);
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
        return { message: 'Image deleted successfully', deletedImage: convertEntityToImage(deleteImage) };
    }

    async getByArticle(id: string): Promise<IImage[]> {
        this.checkIdIsValid(id);
        const article = await this.articleRepository.findOneBy({ id: id, isActive: true });
        if (!article)
            throw new HttpException('id article not found', HttpStatus.NOT_FOUND);
        const imagesByArticle = await this.imageRepository.find({
            where: { article: { id: article.id }, isActive: true }
        });
        return imagesByArticle.map(convertEntityToImage);
    }
}