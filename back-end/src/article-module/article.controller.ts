import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto, UpdateArticlDto } from './article.dto';
import IArticle from './article.interface';
import { UUID } from 'crypto';

@Controller('article')
export class ArticleController {
    constructor(private articleService: ArticleService) { }

    @Post()
    @UsePipes(new ValidationPipe({ whitelist: true }))
    async createArticle(@Body() req: CreateArticleDto): Promise<IArticle> {
        return await this.articleService.createArticle(req);
    }

    @Get()
    async getAllArticle(): Promise<IArticle[]> {
        return await this.articleService.getAllArticle();
    }

    @Get(':id')
    async getArticleById(@Param('id') id: string): Promise<IArticle> {
        return await this.articleService.getArticleById(id);

    }
    @Put(':id')
    @UsePipes(new ValidationPipe({ whitelist: true }))
    async updateArticle(@Param('id') id: string, @Body() req: UpdateArticlDto): Promise<any> {
        return await this.articleService.updateArticle(id, req);
    }

    @Delete(':id')
    async deleteArticle(@Param('id') id: string): Promise<any> {
        return await this.articleService.deleteArticle(id);
    }

    @Get('getByCategory/:id')
    async getById(@Param('id') id: string): Promise<IArticle[]> {
        return this.articleService.getByCategory(id);
    }

    @Get('slug/:id')
    async getLinkById(@Param('id') id: string): Promise<any> {
        return this.articleService.getLinkById(id);
    }

    @Put('addImage/:id')
    @UsePipes(new ValidationPipe({ whitelist: true }))
    async addImageToArticle(@Param('id') idArticle: string, @Body() req: string[]): Promise<any> {
        return this.articleService.AddImageToArticle(idArticle, req);
    }
}
