import { Request, Response } from 'express';
import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { CreateCategoryDto } from './category.dto';
import { CategoryService } from './category.service';
import Category from './category.interface';

@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService) { }

    @Post()
    async createCategory(@Body() req: CreateCategoryDto): Promise<Category> {
        return await this.categoryService.createCategory(req);
    }

    @Get()
    async getAllCategories(req: Request): Promise<Category[]> {
        return await this.categoryService.getAllCategories();
    }

    @Get(':id')
    async getCategoryById(req: Request): Promise<Category> {
        return await this.categoryService.getCategoryById(req.params.id);
    }
    @Post(':id')
    async updateImage(req: Request): Promise<any> {
        return await this.categoryService.updateCategory(req.params.id, req.body);
    }
    @Delete(':id')
    async deleteImage(req: Request) {
        await this.categoryService.deleteCategory(req.params.id);
    }
}
