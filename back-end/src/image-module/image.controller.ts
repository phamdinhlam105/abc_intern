import { ImageService } from './image.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateImageDto } from './image.dto';
import Image from './image.interface';

@Controller('image')
export class ImageController {
    constructor(private imageService: ImageService) { }

    @Post()
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
    async updateImage(@Param('id') id: string, @Body() req: Partial<Image>): Promise<any> {
        return await this.imageService.updateImage(id, req);
    }

    @Delete(':id')
    async deleteImage(@Param('id') id: string): Promise<any> {
        await this.imageService.deleteImage(id);
    }

    @Get('getByArticle/:id')
    async getByArticle(@Param('id') id: string) {
        return await this.imageService.getByArticle(id);
    }
}
