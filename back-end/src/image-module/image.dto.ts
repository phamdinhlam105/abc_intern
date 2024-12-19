import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateImageDto {
    @IsString()
    @IsUUID()
    idArticle: string;

    @IsNotEmpty()
    @IsString()
    describe: string;

    @IsNotEmpty()
    @IsString()
    url: string;
}

export class UpdateImageDto extends PartialType(CreateImageDto){}