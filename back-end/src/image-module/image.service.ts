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

    async createImage(image: CreateImageDto): Promise<Image> {
        const newImageEntity = new ImageEntity();
        newImageEntity.describe = image.describe;
        newImageEntity.createDate = image.createDate ? new Date(image.createDate) : new Date();
        newImageEntity.url = image.url;
        if (image.idArticle) {
            const oldArticle = await this.articleRepository.findOneBy({ id: image.idArticle as UUID });
            if (oldArticle) {
                newImageEntity.idArticle = image.idArticle as UUID;
                newImageEntity.article = oldArticle;
                await this.imageRepository.save(newImageEntity);
                oldArticle.gallery.push(newImageEntity);
                await this.articleRepository.save(oldArticle);
            }
        }
        else
            await this.imageRepository.save(newImageEntity);

        return entityToImage(newImageEntity);
    }

    async getAllImages(): Promise<Image[]> {
        const images = await this.imageRepository.find();
        return images.map(entityToImage);
    }

    async getImageById(id: string): Promise<Image | null> {
        if (!validate(id))
            throw new HttpException('invalid id', HttpStatus.BAD_REQUEST);
        const idUUID = id as UUID;
        const image = await this.imageRepository.findOneBy({ id: idUUID });
        if (image)
            return entityToImage(image);
        throw new HttpException('id not found ', HttpStatus.NOT_FOUND);
    }

    async updateImage(id: string, updatedImage: Partial<Image>): Promise<Image> {
        if (!validate(id))
            throw new HttpException('invalid id', HttpStatus.BAD_REQUEST);
        const idUUID = id as UUID;
        const updatedImageEntity = await this.imageRepository.findOneBy({ id: idUUID });
        if (updatedImageEntity) {
            updatedImageEntity.describe = updatedImage.describe;
            updatedImageEntity.url = updatedImage.url;
            updatedImageEntity.createDate = new Date(updatedImage.createDate);
            if (updatedImage.idArticle && updatedImage.idArticle !== updatedImageEntity.idArticle) {
                const oldArticle = await this.articleRepository.findOne({ where: { id: updatedImage.idArticle as UUID }, relations: { gallery: true } });
                oldArticle.gallery = oldArticle.gallery.filter(img => img.id !== updatedImage.id);
                const newArticle = await this.articleRepository.findOne({ where: { id: updatedImage.id }, relations: { gallery: true } });
                newArticle.gallery.push(updatedImageEntity);
                this.articleRepository.save(oldArticle);
                this.articleRepository.save(newArticle);
                updatedImageEntity.idArticle = updatedImage.idArticle;
            }
            this.imageRepository.save(updatedImageEntity);
            return entityToImage(updatedImageEntity);
        }
        throw new HttpException('id not found ', HttpStatus.NOT_FOUND);
    }

    async deleteImage(id: string) {
        if (!validate(id))
            throw new HttpException('invalid id', HttpStatus.BAD_REQUEST);
        const idUUID = id as UUID;
        const deleteImage = await this.imageRepository.findOneBy({ id: idUUID });
        if (deleteImage) {
            await this.imageRepository.delete(idUUID);
            return { message: 'Image deleted successfully', status: HttpStatus.OK };
        }
        throw new HttpException('Image not found', HttpStatus.NOT_FOUND);
    }
}