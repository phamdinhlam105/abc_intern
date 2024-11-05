import { Request, Response } from 'express';
import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './article.dto';
import Article from './article.interface';

@Controller('article')
export class ArticleController {
    constructor(private articleService: ArticleService) { }

    @Post()
    async createArticle(@Body() req: CreateArticleDto): Promise<Article> {
        return await this.articleService.createArticle(req);
    }

    @Get()
    async getAllArticle(req: Request): Promise<Article[]> {
        return await this.articleService.getAllArticle();
    }

    @Get(':id')
    async getArticleById(req: Request): Promise<Article> {
        return await this.articleService.getArticleById(req.params.id);

    }
    @Post(':id')
    async updateArticle(req: Request): Promise<any> {
        return await this.articleService.updateArticle(req.params.id, req.body);

    }
    @Delete(':id')
    async deleteArticle(req: Request) {
        await this.articleService.deleteArticle(req.params.id);
    }
    @Get('getByCategory/:id')
    async getById(req: Request): Promise<Article[]>{
        return this.articleService.getByCategory(req.params.id);
    }
}
