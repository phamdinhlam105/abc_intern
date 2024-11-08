
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CategoryDto {
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
