import { UUID } from "crypto";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ArticleEntity } from '../article-module/article.entity'; 

@Entity('image')
export class ImageEntity {
    @PrimaryGeneratedColumn('uuid')
    id: UUID;

    @Column({type:'text', nullable:false})
    describe: string

    @Column({ type: 'text', nullable: false })
    url: string;

    @Column({type:'timestamp',nullable:false})
    createDate: Date;

    @ManyToOne(() => ArticleEntity, (article) => article.gallery, {nullable:true}) 
    article: ArticleEntity;
}
