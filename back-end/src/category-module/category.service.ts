import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, TreeRepositoryUtils } from "typeorm";
import { validate } from 'uuid'
import { CategoryEntity } from "./category.entity";
import { CategoryDto } from "./category.dto";
import entityToCategory from "./category.util";
import Category from "./category.interface";

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(CategoryEntity)
        private categoryRepository: Repository<CategoryEntity>
    ) { }

    private checkIdIsValid(id: string) {
        if (!validate(id))
            throw new HttpException('invalid id', HttpStatus.BAD_REQUEST);
    }

    private async checkParentInSubCategories(idParent: string, idChild: string): Promise<boolean> {
        const currentCategory = await this.categoryRepository.findOne({
            where: { id: idParent, isActive: true },
            relations: { parentCategory: true }
        });
        if (currentCategory.parentCategory) {
            if (currentCategory.parentCategory.id == idChild)
                return true;
            this.checkParentInSubCategories(currentCategory.parentCategory.id, idChild);
        }
        return false;
    }

    async createCategory(createCategoryDto: CategoryDto): Promise<Category> {
        const newCategory = new CategoryEntity();
        if (createCategoryDto.parentId) {
            const parentCategory = await this.categoryRepository.findOneBy({ id: createCategoryDto.parentId, isActive: true });
            if (!parentCategory)
                throw new HttpException('id parent category not found', HttpStatus.NOT_FOUND);
            newCategory.parentCategory = parentCategory;
        }
        Object.assign(newCategory, createCategoryDto);
        await this.categoryRepository.save(newCategory);
        return entityToCategory(newCategory);
    }

    async getAllCategories(): Promise<Category[]> {
        const categories = await this.categoryRepository.find({
            where: { isActive: true },
            relations: { parentCategory: true }
        });
        return categories.map(entityToCategory);
    }

    async getCategoryById(id: string): Promise<Category | null> {
        this.checkIdIsValid(id);
        const category = await this.categoryRepository.findOne({
            where: { id: id, isActive: true },
            relations: { parentCategory: true }
        });
        if (!category)
            throw new HttpException('id not found ', HttpStatus.NOT_FOUND);
        return entityToCategory(category);
    }

    async updateCategory(id: string, updatedCategoryDto: Partial<CategoryDto>): Promise<Category> {
        this.checkIdIsValid(id);
        const updatedCategoryEntity = await this.categoryRepository.findOne({
            where: { id: id, isActive: true },
            relations: { parentCategory: true }
        });
        if (!updatedCategoryEntity)
            throw new HttpException('id not found ', HttpStatus.NOT_FOUND);
        const { parentId, ...rest } = updatedCategoryDto;
        Object.assign(updatedCategoryEntity, rest)
        if (updatedCategoryDto.hasOwnProperty('parentId')) {
            if (parentId) {
                const parentCategory = await this.categoryRepository.findOneBy({ id: parentId, isActive: true });
                if (!parentCategory)
                    throw new HttpException('parent category id not found', HttpStatus.NOT_FOUND);
                if (await this.checkParentInSubCategories(parentCategory.id, updatedCategoryEntity.id)) {
                    throw new HttpException('Cannot create circular reference in category relationships', HttpStatus.BAD_REQUEST);
                }
                updatedCategoryEntity.parentCategory = parentCategory;
            }
            else
                updatedCategoryEntity.parentCategory = null;
        }
        await this.categoryRepository.save(updatedCategoryEntity);
        return entityToCategory(updatedCategoryEntity);
    }

    async deleteCategory(id: string) {
        this.checkIdIsValid(id);
        const deleteCategory = await this.categoryRepository.findOne({
            where: { id: id, isActive: true },
            relations: { subCategories: true }
        });
        if (!deleteCategory)
            throw new HttpException('Category not found', HttpStatus.NOT_FOUND);
        deleteCategory.subCategories.forEach(sub => {
            if (sub.isActive == true)
                throw new HttpException('Category can not be deleted', HttpStatus.CONFLICT);
        });
        deleteCategory.isActive = false;
        this.categoryRepository.save(deleteCategory);
        return { message: 'Category deleted', deletedArticle: entityToCategory(deleteCategory) };
    }
}