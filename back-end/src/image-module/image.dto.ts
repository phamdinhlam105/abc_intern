import { IsDateString, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateImageDto {
    @IsString()
    @IsUUID()
    idArticle: string;

    @IsNotEmpty()
    @IsString()
    describe: string;

    @IsDateString()
    createDate: string;

    @IsNotEmpty()
    @IsString()
    url: string;
}