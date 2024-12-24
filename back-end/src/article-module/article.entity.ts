import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CategoryEntity } from '../category-module/category.entity';
import { ImageEntity } from '../image-module/image.entity';

@Entity('article')
export class ArticleEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 225, nullable: false })
    title: string;

    @Column({ type: 'varchar', length: 225, nullable: false })
    author: string;

    @Column({ type: 'text', nullable: false })
    content: string;

    @Column({ type: 'text', nullable: false })
    thumbnail: string;

    @Column({ type: 'varchar', length: 225, nullable: false })
    describe: string;

    @Column({ type: 'varchar', length: 225, nullable: false })
    status: 'published' | 'draft' | 'deleted'

    @CreateDateColumn({ type: 'timestamp without time zone', default: () => 'CURRENT_TIMESTAMP' })
    createDate: Date;

    @ManyToOne(() => CategoryEntity, (category) => category.posts)
    category: CategoryEntity;

    @OneToMany(() => ImageEntity, (image) => image.article)
    gallery: ImageEntity[];

    @Column({ default: true })
    isActive: boolean;
}
