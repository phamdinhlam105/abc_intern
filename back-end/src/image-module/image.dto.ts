import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateImageDto {
    @IsString()
    @IsUUID()
    idArticle: string;

    @IsNotEmpty()
    @IsString()
    describe: string;

    @IsOptional()
    @IsString()
    createDate: string;

    @IsNotEmpty()
    @IsString()
    url: string;
}