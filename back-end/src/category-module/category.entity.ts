import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ArticleEntity } from "../article-module/article.entity";

@Entity('category')
export class CategoryEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 225, nullable: false })
    name: string;

    @Column({ type: 'varchar', length: 225, nullable: false })
    slug: string;

    @CreateDateColumn({ type: 'timestamp without time zone', default: () => 'CURRENT_TIMESTAMP' })
    createDate: Date;

    @Column({ type: 'varchar', length: 225, nullable: false })
    status: "visible" | "deleted";

    @Column({ type: 'varchar', length: 225, nullable: false })
    position: "LEFT" | "MAIN" | "RIGHT";

    @ManyToOne(() => CategoryEntity, (category) => category.subCategories)
    parentCategory: CategoryEntity;

    @OneToMany(() => CategoryEntity, (category) => category.parentCategory)
    subCategories: CategoryEntity[];

    @OneToMany(() => ArticleEntity, (article) => article.category)
    posts: ArticleEntity[];

    @Column({ default: true })
    isActive: boolean;
}