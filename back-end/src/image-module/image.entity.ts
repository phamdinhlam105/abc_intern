import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ArticleEntity } from '../article-module/article.entity';

@Entity('image')
export class ImageEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 225, nullable: false })
    describe: string

    @Column({ type: 'text', nullable: false })
    url: string;

    @CreateDateColumn({ type: 'timestamp without time zone', default: () => 'CURRENT_TIMESTAMP' })
    createDate: Date;

    @ManyToOne(() => ArticleEntity, (article) => article.gallery, { nullable: true })
    article: ArticleEntity;

    @Column({ default: true })
    isActive: boolean;
}
