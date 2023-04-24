/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, UseGuards, Param } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('api/brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createBrandDto: CreateBrandDto) {
    return this.brandsService.create(createBrandDto);
  }

  @Get(':name')
  @UseGuards(JwtAuthGuard)
  findByName(@Param('name') name: string) {
    return this.brandsService.findByName(name);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.brandsService.findAll();
  }
}
