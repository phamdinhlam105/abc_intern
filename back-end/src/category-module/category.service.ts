import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UUID } from "crypto";
import { validate } from 'uuid'
import { CategoryEntity } from "./category.entity";
import { CreateCategoryDto } from "./category.dto";
import entityToCategory from "./category.ulti";
import Category from "./category.interface";

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(CategoryEntity)
        private categoryRepository: Repository<CategoryEntity>
    ) { }

    async createCategory(category: CreateCategoryDto): Promise<Category> {
        const newCategory = new CategoryEntity();
        const parentCategory = await this.categoryRepository.findOneBy({ id: category.parentId as UUID });
        if (parentCategory) {
            newCategory.parentId = parentCategory.id;
            newCategory.parentCategory = parentCategory;
        }
        newCategory.name = category.name;
        newCategory.slug = category.slug;
        await this.categoryRepository.save(newCategory);
        return entityToCategory(newCategory);
    }

    async getAllCategories(): Promise<Category[]> {
        const categories = await this.categoryRepository.find();
        return categories.map(entityToCategory);
    }

    async getCategoryById(id: string): Promise<Category | null> {
        if (!validate(id))
            throw new HttpException('invalid id', HttpStatus.BAD_REQUEST);
        const idUUID = id as UUID;
        const image = await this.categoryRepository.findOneBy({ id: idUUID });
        if (image)
            return entityToCategory(image);
        throw new HttpException('id not found ', HttpStatus.NOT_FOUND);
    }

    async updateCategory(id: string, updatedImage: Partial<Category>): Promise<Category> {
        if (!validate(id))
            throw new HttpException('invalid id', HttpStatus.BAD_REQUEST);
        const idUUID = id as UUID;
        await this.categoryRepository.update(id, updatedImage);
        const updatedImageEntity = await this.categoryRepository.findOneBy({ id: idUUID });
        if (updatedImage)
            return entityToCategory(updatedImageEntity);
        throw new HttpException('id not found ', HttpStatus.NOT_FOUND);
    }

    async deleteCategory(id: string) {
        if (!validate(id))
            throw new HttpException('invalid id', HttpStatus.BAD_REQUEST);
        const idUUID = id as UUID;
        const deleteImage = await this.categoryRepository.findOneBy({ id: idUUID });
        if (deleteImage) {
            await this.categoryRepository.delete(idUUID);
            return { message: 'Category deleted successfully', status: HttpStatus.OK };
        }
        throw new HttpException('Category not found', HttpStatus.NOT_FOUND);
    }
}