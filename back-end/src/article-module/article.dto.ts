
import { IsDateString, IsNotEmpty, isString, IsString, IsUUID } from 'class-validator';
import { UUID } from 'crypto';

export class CreateArticleDto {

    @IsUUID()
    @IsNotEmpty()
    idCategory: UUID;

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    content: string;

    @IsString()
    @IsNotEmpty()
    thumbnail: string;

    @IsDateString()
    createDate: string;
    
}
