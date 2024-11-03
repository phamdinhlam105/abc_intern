import { Request, Response } from 'express';
import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './article.dto';

@Controller('article')
export class ArticleController {
    constructor(private articleService: ArticleService) { }

    @Post()
    async createImage(@Body() req: CreateArticleDto): Promise<void> {
        const newImage = await this.articleService.createArticle(req);
    }

    @Get()
    async getAllImages(req: Request): Promise<void> {
        const images = await this.articleService.getAllArticle();
    }

    @Get(':id')
    async getImageById(req: Request): Promise<void> {
        const image = await this.articleService.getArticleById(req.params.id);

    }
    @Post(':id')
    async updateImage(req: Request): Promise<void> {
        const updatedImage = await this.articleService.updateArticle(req.params.id, req.body);

    }
    @Delete(':id')
    async deleteImage(req: Request) {
        await this.articleService.deleteArticle(req.params.id);
    }
}
