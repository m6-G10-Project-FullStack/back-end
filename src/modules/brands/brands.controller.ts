/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, UseGuards, Param } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ApiResponse, ApiResponseProperty, ApiTags } from '@nestjs/swagger';
import { Brand } from './entities/brand.entity';

@ApiTags('Brands')
@Controller('api/brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Criação de uma brand',
    type: Brand,
  })
  @UseGuards(JwtAuthGuard)
  create(@Body() createBrandDto: CreateBrandDto) {
    return this.brandsService.create(createBrandDto);
  }

  @Get(':name')
  @ApiResponse({
    status: 200,
    description: 'Lista uma brand por meio do nome',
    type: Brand,
  })
  @UseGuards(JwtAuthGuard)
  findByName(@Param('name') name: string) {
    return this.brandsService.findByName(name);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Lista todas as brands',
    schema: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/Brand',
      },
    },
  })
  findAll() {
    return this.brandsService.findAll();
  }
}
