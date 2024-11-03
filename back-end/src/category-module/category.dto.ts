
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

class CategoryDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    slug: string;
}

export class CreateCategoryDto extends CategoryDto {
    @IsUUID()
    @IsString()
    parentId: string;
}

export class UpdateCategoryDto extends CategoryDto {
    @IsUUID()
    @IsString()
    newParentId: string;
}