import { Module } from "@nestjs/common";
import { ImageService } from "./image.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ImageEntity } from "./image.entity";
import { ImageController } from "./image.controller";
import { ArticleEntity } from "src/article-module/article.entity";
import { APP_GUARD } from "@nestjs/core";
import { AuthGuard } from "src/auth/auth.guard";

@Module({
  imports: [TypeOrmModule.forFeature([ImageEntity,ArticleEntity])],
  controllers: [ImageController],
  providers: [ImageService, {
      provide: APP_GUARD,
      useClass: AuthGuard
    }],
})
export class ImageModule { }