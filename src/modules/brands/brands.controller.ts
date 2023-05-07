/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, UseGuards, Param } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Brands')
@Controller('api/brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Criação de uma brand' })
  @UseGuards(JwtAuthGuard)
  create(@Body() createBrandDto: CreateBrandDto) {
    return this.brandsService.create(createBrandDto);
  }

  @Get(':name')
  @ApiResponse({ status: 200, description: 'Lista uma brand por meio do nome' })
  @UseGuards(JwtAuthGuard)
  findByName(@Param('name') name: string) {
    return this.brandsService.findByName(name);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Lista todas as brands' })
  findAll() {
    return this.brandsService.findAll();
  }
}
