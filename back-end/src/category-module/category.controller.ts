import { Request, Response } from 'express';
import { Body, Delete, Get, Post } from '@nestjs/common';
import { CreateCategoryDto } from './category.dto';
import { CategoryService } from './category.service';
export class CategoryController {
    constructor(private categoryService: CategoryService) { }

    @Post()
    async createImage(@Body() req: CreateCategoryDto): Promise<void> {
        const newImage = await this.categoryService.createCategory(req);
    }

    @Get()
    async getAllImages(req: Request): Promise<void> {
        const images = await this.categoryService.getAllCategories();
    }

    @Get(':id')
    async getImageById(req: Request): Promise<void> {
        const image = await this.categoryService.getCategoryById(req.params.id);

    }
    @Post(':id')
    async updateImage(req: Request): Promise<void> {
        const updatedImage = await this.categoryService.updateCategory(req.params.id, req.body);

    }
    @Delete(':id')
    async deleteImage(req: Request) {
        await this.categoryService.deleteCategory(req.params.id);
    }
}
