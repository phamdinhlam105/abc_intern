import { IsDateString, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateImageDto {
    @IsUUID()
    idArticle: string;

    @IsNotEmpty()
    @IsString()
    describe: string;

    @IsNotEmpty()
    @IsDateString()
    createDate: string;

    @IsNotEmpty()
    @IsString()
    url: string;
}