import { UUID } from "crypto";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ArticleEntity } from "../article-module/article.entity";

// Category:
// -id uuid
// -name string
// -slug string
// -parentId uuid(nullable)
// -subcategories [Category]
// -posts [Article]

@Entity('category')
export class CategoryEntity {
    @PrimaryGeneratedColumn('uuid')
    id: UUID;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: false })
    slug: string;

    @ManyToOne(() => CategoryEntity, (category) => category.subCategories)
    parentCategory: CategoryEntity;

    @OneToMany(() => CategoryEntity, (category) => category.parentCategory, { onDelete: 'RESTRICT' })
    subCategories: CategoryEntity[];

    @OneToMany(() => ArticleEntity, (article) => article.category, { onDelete: 'RESTRICT' })
    posts: ArticleEntity[];
}