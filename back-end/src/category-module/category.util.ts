import { CategoryEntity } from "./category.entity";
import ICategory from './category.interface'

export default function convertEntityToCategory(entity: CategoryEntity): ICategory {
    if (entity)
        return ({
            id: entity.id,
            name: entity.name,
            slug: entity.slug,
            parentCategory: entity.parentCategory? convertEntityToCategory(entity.parentCategory): null,
        });
    return null;
}