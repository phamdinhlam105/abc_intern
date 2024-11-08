
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateArticleDto {

    @IsUUID()
    @IsNotEmpty()
    @Expose()
    idCategory: string;

    @IsString()
    @IsNotEmpty()
    @Expose()
    title: string;

    @IsString()
    @IsNotEmpty()
    @Expose()
    content: string;
    
    @IsString()
    @IsNotEmpty()
    describe: string;

    @IsString()
    @IsNotEmpty()
    @Expose()
    thumbnail: string;
    
}
