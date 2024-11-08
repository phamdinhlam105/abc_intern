import { ImageService } from './image.service';
import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateImageDto, UpdateImageDto } from './image.dto';
import Image from './image.interface';

@Controller('image')
export class ImageController {
    constructor(private imageService: ImageService) { }

    @Post()
    @UsePipes(new ValidationPipe({whitelist:true}))
    async createImage(@Body() req: CreateImageDto): Promise<Image> {
        return await this.imageService.createImage(req);
    }

    @Get()
    async getAllImages(): Promise<Image[]> {
        return await this.imageService.getAllImages();
    }

    @Get(':id')
    async getImageById(@Param('id') id: string): Promise<Image> {
        return await this.imageService.getImageById(id);
    }

    @Put(':id')
    @UsePipes(new ValidationPipe({whitelist:true}))
    async updateImage(@Param('id') id: string, @Body() req: UpdateImageDto): Promise<any> {
        return await this.imageService.updateImage(id, req);
    }

    @Delete(':id')
    async deleteImage(@Param('id') id: string): Promise<any> {
        return await this.imageService.deleteImage(id);
    }

    @Get('getByArticle/:id')
    async getByArticle(@Param('id') id: string) :Promise<Image[]>{
        return await this.imageService.getByArticle(id);
    }
}
