
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CategoryDto {
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
