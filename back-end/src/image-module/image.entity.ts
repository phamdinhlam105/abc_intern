

import { UUID } from "crypto";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ArticleEntity } from '../article-module/article.entity'; 

//Image:
//-id uuid
//-idArticle uuid
//-describe string
//-createDate string
//-url string

@Entity('image')
export class ImageEntity {
    @PrimaryGeneratedColumn('uuid')
    id: UUID;

    @Column({ type: 'uuid', nullable: false })
    idArticle: UUID;

    @Column({type:'text', nullable:false})
    describe: string

    @Column({ type: 'text', nullable: false })
    url: string;

    @Column({type:'timestamp',nullable:false})
    createDate: Date;

    @ManyToOne(() => ArticleEntity, (article) => article.gallery)
    article: ArticleEntity;
}
