
import { IsDateString, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateCategoryDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    slug: string;

    @IsUUID()
    @IsString()
    parentId: string;
}