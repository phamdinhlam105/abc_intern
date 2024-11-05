import { CategoryEntity } from "./category.entity";
import Category from './category.interface'

export default function entityToCategory(entity: CategoryEntity): Category {
    if (entity)
        return ({
            id: entity.id,
            name: entity.name,
            slug: entity.slug,
            parentCategory: entity.parentCategory? entityToCategory(entity.parentCategory): null,
        });
    return null;
}