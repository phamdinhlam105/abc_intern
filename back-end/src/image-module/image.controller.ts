import { Request, Response } from 'express';
import { ImageService } from './image.service';
import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { CreateImageDto } from './image.dto';

@Controller('image')
export class ImageController {
    constructor(private imageService: ImageService) { }

    @Post()
    async createImage(@Body() req: CreateImageDto): Promise<void> {
        const newImage = await this.imageService.createImage(req);
    }

    @Get()
    async getAllImages(req: Request): Promise<void> {
        const images = await this.imageService.getAllImages();
    }

    @Get(':id')
    async getImageById(req: Request): Promise<void> {
        const image = await this.imageService.getImageById(req.params.id);

    }
    @Post(':id')
    async updateImage(req: Request): Promise<void> {
        const updatedImage = await this.imageService.updateImage(req.params.id, req.body);

    }
    @Delete(':id')
    async deleteImage(req: Request) {
        await this.imageService.deleteImage(req.params.id);
    }
}
