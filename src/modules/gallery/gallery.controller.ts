/* eslint-disable prettier/prettier */
import {
  ParseIntPipe,
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { GalleryService } from './gallery.service';
import { CreateGalleryDto } from './dto/create-gallery.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Gallery')
@Controller('api/gallery')
export class GalleryController {
  constructor(private readonly galleryService: GalleryService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Cria uma referência de imagem' })
  create(@Body() createGalleryDto: CreateGalleryDto) {
    return this.galleryService.create(createGalleryDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Lista todas as imagens' })
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.galleryService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Lista uma imagem por meio de um ID',
  })
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.galleryService.findOne(+id);
  }
}
