import { PartialType } from '@nestjs/mapped-types';
import { IsEmpty, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateImageDto {
    @IsString()
    @IsUUID()
    @IsOptional()
    idArticle: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    describe: string;

    @IsNotEmpty()
    @IsString()
    url: string;
}

export class UpdateImageDto extends PartialType(CreateImageDto){}