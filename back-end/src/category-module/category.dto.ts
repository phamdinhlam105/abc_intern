
import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateCategoryDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    slug: string;

    @IsUUID()
    @IsString()
    @IsOptional()
    parentId?: string;
}

export class UpdateCategoryDto extends PartialType(CreateCategoryDto){}