import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoryEntity } from "./category.entity";
import { CategoryService } from "./category.service";
import { CategoryController } from "./category.controller";
import { APP_GUARD } from "@nestjs/core";
import { AuthGuard } from "src/auth/auth.guard";

@Module({
    imports: [TypeOrmModule.forFeature([CategoryEntity])],
    controllers: [CategoryController],
    providers: [CategoryService,{
        provide: APP_GUARD,
        useClass: AuthGuard
      }],
})
export class CategoryModule { }