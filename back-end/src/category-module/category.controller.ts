import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from './category.dto';
import { CategoryService } from './category.service';
import ICategory from './category.interface';

@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService) { }

    @Post()
    @UsePipes(new ValidationPipe({ whitelist: true }))
    async createCategory(@Body() req: CreateCategoryDto): Promise<ICategory> {
        return await this.categoryService.createCategory(req);
    }

    @Get()
    async getAllCategories(): Promise<ICategory[]> {
        return await this.categoryService.getAllCategories();
    }

    @Get('/:id')
    async getCategoryById(@Param('id') id: string): Promise<ICategory> {
        return await this.categoryService.getCategoryById(id);
    }

    @Get('/:slug')
    async getCategoryBySlug(@Param('slug') slug: string): Promise<ICategory> {
        return await this.categoryService.getCategoryById(slug);
    }

    @Put('/slug/:id')
    @UsePipes(new ValidationPipe({ whitelist: true }))
    async updateCategory(@Param('id') id: string, @Body() req: UpdateCategoryDto): Promise<any> {
        return await this.categoryService.updateCategory(id, req);
    }
    @Delete('/:id')
    async deleteCategory(@Param('id') id: string): Promise<any> {
        return await this.categoryService.deleteCategory(id);
    }
}
