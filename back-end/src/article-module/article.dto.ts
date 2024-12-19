import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateArticleDto {

    @IsUUID()
    @IsNotEmpty()
    idCategory: string;

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    content: string;
    
    @IsString()
    @IsNotEmpty()
    describe: string;

    @IsString()
    @IsNotEmpty()
    thumbnail: string;
    
}

export class UpdateArticlDto extends PartialType(CreateArticleDto){}