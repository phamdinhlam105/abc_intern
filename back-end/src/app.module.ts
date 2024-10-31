import { Module } from '@nestjs/common';
import { ImageModule } from './image-module/image.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageEntity } from './image-module/image.entity';
import { ArticleEntity } from './article-module/article.entity';
import { CategoryEntity } from './category-module/category.entity';
import { CategoryModule } from './category-module/category.module';
import { ArticleModule } from './article-module/article.module';

@Module({
  imports: [ImageModule,CategoryModule,ArticleModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host:'localhost',
      port:5432,
      username: 'postgres',
      password:'123456',
      database:'abc intern',
      entities: [ImageEntity,ArticleEntity,CategoryEntity],
      synchronize:true,
    })],
  controllers: [],
  providers: [],
})
export class AppModule {}
