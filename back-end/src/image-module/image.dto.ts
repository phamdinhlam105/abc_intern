import { Expose } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateImageDto {
    @IsString()
    @IsUUID()
    @Expose()
    idArticle: string;

    @IsNotEmpty()
    @IsString()
    @Expose()
    describe: string;

    @IsNotEmpty()
    @IsString()
    @Expose()
    url: string;
}