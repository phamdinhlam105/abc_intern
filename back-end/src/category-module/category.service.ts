import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UUID } from "crypto";
import { validate } from 'uuid'
import { CategoryEntity } from "./category.entity";
import { CategoryDto } from "./category.dto";
import entityToCategory from "./category.ulti";
import Category from "./category.interface";

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(CategoryEntity)
        private categoryRepository: Repository<CategoryEntity>
    ) { }

    private idValid(id: string) {
        if (!validate(id))
            throw new HttpException('invalid id', HttpStatus.BAD_REQUEST);
    }

    async createCategory(category: CategoryDto): Promise<Category> {
        const newCategory = new CategoryEntity();
        if (category.parentId) {
            const parentCategory = await this.categoryRepository.findOneBy({ id: category.parentId as UUID });
            if (!parentCategory)
                throw new HttpException('id parent category not found', HttpStatus.NOT_FOUND);
            newCategory.parentCategory = parentCategory;
        }
        Object.assign(newCategory, category);
        await this.categoryRepository.save(newCategory);
        return entityToCategory(newCategory);
    }

    async getAllCategories(): Promise<Category[]> {
        const categories = await this.categoryRepository.find({ relations: { parentCategory: true } });
        return categories.map(entityToCategory);
    }

    async getCategoryById(id: string): Promise<Category | null> {
        this.idValid(id);
        const category = await this.categoryRepository.findOne({ where: { id: id as UUID }, relations: { parentCategory: true } });
        if (!category)
            throw new HttpException('id not found ', HttpStatus.NOT_FOUND);
        return entityToCategory(category);
    }

    async updateCategory(id: string, updatedCategory: Partial<CategoryDto>): Promise<Category> {
        this.idValid(id);
        const updatedCategoryEntity = await this.categoryRepository.findOne({ where: { id: id as UUID }, relations: { parentCategory: true } });
        if (!updatedCategoryEntity)
            throw new HttpException('id not found ', HttpStatus.NOT_FOUND);
        const { parentId, ...rest } = updatedCategory;
        Object.assign(updatedCategoryEntity, rest)

        console.log(updatedCategoryEntity)
        if (updatedCategory.hasOwnProperty('parentId')) {
            if (parentId) {
                const parentCategory = await this.categoryRepository.findOneBy({ id: parentId as UUID });
                console.log(parentCategory)
                if (!parentCategory)
                    throw new HttpException('parent category id not found', HttpStatus.NOT_FOUND);
                updatedCategoryEntity.parentCategory = parentCategory;
            }
            else
                updatedCategoryEntity.parentCategory = null;
        }
        await this.categoryRepository.save(updatedCategoryEntity);
        return entityToCategory(updatedCategoryEntity);
    }

    async deleteCategory(id: string) {
        this.idValid(id);
        const deleteCategory = await this.categoryRepository.findOneBy({ id: id as UUID });
        if (!deleteCategory)
            throw new HttpException('Category not found', HttpStatus.NOT_FOUND);
        try {
            await this.categoryRepository.delete(deleteCategory);
            return { message: 'Category deleted successfully', status: HttpStatus.OK };
        } catch (error) {
            throw new HttpException('Category can not be deleted', HttpStatus.CONFLICT);
        }
    }
}