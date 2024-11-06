
import { IsDateString, IsNotEmpty, IsString, IsUUID } from 'class-validator';
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
    describe: string;

    @IsString()
    @IsNotEmpty()
    thumbnail: string;

    @IsDateString()
    createDate: string;
    
}