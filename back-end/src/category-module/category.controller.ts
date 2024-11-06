import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from './category.dto';
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
    async getAllCategories(): Promise<Category[]> {
        return await this.categoryService.getAllCategories();
    }

    @Get('/:id')
    async getCategoryById(@Param('id') id: string): Promise<Category> {
        return await this.categoryService.getCategoryById(id);
    }
    @Put('/:id')
    async updateImage(@Param('id') id: string, @Body() req: UpdateCategoryDto): Promise<any> {
        return await this.categoryService.updateCategory(id, req);
    }
    @Delete('/:id')
    async deleteImage(@Param('id') id: string) {
        await this.categoryService.deleteCategory(id);
    }
}
