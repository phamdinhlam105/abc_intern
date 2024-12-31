import { Module } from '@nestjs/common';
import { ImageModule } from './image-module/image.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageEntity } from './image-module/image.entity';
import { ArticleEntity } from './article-module/article.entity';
import { CategoryEntity } from './category-module/category.entity';
import { CategoryModule } from './category-module/category.module';
import { ArticleModule } from './article-module/article.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ImageModule,CategoryModule,ArticleModule,
    ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get<string>('DATABASE_USERNAME'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        entities: [ImageEntity, ArticleEntity, CategoryEntity],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
