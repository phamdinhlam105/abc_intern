import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ArticleEntity } from "../article-module/article.entity";

@Entity('category')
export class CategoryEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 225, nullable: false })
    name: string;

    @Column({ type: 'varchar', length: 225, nullable: false })
    slug: string;

    @ManyToOne(() => CategoryEntity, (category) => category.subCategories)
    parentCategory: CategoryEntity;

    @OneToMany(() => CategoryEntity, (category) => category.parentCategory)
    subCategories: CategoryEntity[];

    @OneToMany(() => ArticleEntity, (article) => article.category)
    posts: ArticleEntity[];

    @Column({ default: true })
    isActive: boolean;
}