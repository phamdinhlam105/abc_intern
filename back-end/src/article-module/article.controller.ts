import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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
    async getAllArticle(): Promise<Article[]> {
        return await this.articleService.getAllArticle();
    }

    @Get(':id')
    async getArticleById(@Param('id') id: string): Promise<Article> {
        return await this.articleService.getArticleById(id);

    }
    @Put(':id')
    async updateArticle(@Param('id') id: string, @Body() req: CreateArticleDto): Promise<any> {
        return await this.articleService.updateArticle(id, req);

    }
    @Delete(':id')
    async deleteArticle(@Param('id') id: string) {
        await this.articleService.deleteArticle(id);
    }
    @Get('getByCategory/:id')
    async getById(@Param('id') id: string): Promise<Article[]> {
        return this.articleService.getByCategory(id);
    }
}
