import { UUID } from "crypto";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CategoryEntity } from '../category-module/category.entity';
import { ImageEntity } from '../image-module/image.entity';

// Article:
// -id uuid
// -idCat uuid
// -title text
// -content text
// -thumbnail string
// -createDate string
// -category: [category]
// -gallery: [Image]

@Entity('article')
export class ArticleEntity {
    @PrimaryGeneratedColumn('uuid')
    id: UUID;

    @Column({ type: 'uuid', nullable: false })
    idCategory: UUID;

    @Column({ type: 'text', nullable: false })
    title: string;

    @Column({ type: 'text', nullable: false })
    content: string;

    @Column({ type: 'text', nullable: false })
    thumbnail: string;

    @Column({ type: 'datetime', nullable: false })
    createDate: string;

    @ManyToOne(() => CategoryEntity, (category) => category.posts)
    category: CategoryEntity;

    @OneToMany(() => ImageEntity, (image) => image.article, { onDelete: 'RESTRICT' })
    gallery: ImageEntity[];
}
