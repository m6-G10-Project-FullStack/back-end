/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  Query,
  UseGuards,
  HttpCode,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
// import { UpdateCarDto } from './dto/update-car.dto';

@ApiTags('Cars')
@Controller('api/cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Criação de um anúncio' })
  @UseGuards(JwtAuthGuard)
  create(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Listagem dos carros; é possível usar as querys para filtrar',
  })
  findAll(
    @Query('page') page = '0',
    @Query('limit') limit = '12',
    @Query('brand') brand?: string,
    @Query('model') model?: string,
    @Query('color') color?: string,
    @Query('year') year?: string,
    @Query('fuel') fuel?: string,
  ) {
    return this.carsService.findAllPagination(
      page,
      limit,
      brand,
      model,
      color,
      year,
      fuel,
    );
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Listagem de anúncio por meio de um ID',
  })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Atualiza um anúncio' })
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDto: UpdateCarDto,
  ) {
    return this.carsService.update(id, updateCarDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 204, description: 'Desativa o anúncio' })
  @UseGuards(JwtAuthGuard)
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.remove(id);
  }

  @HttpCode(204)
  @Delete(':id/permanent')
  @ApiResponse({ status: 204, description: 'Deleta permanentemente o anúncio' })
  @UseGuards(JwtAuthGuard)
  delete(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.delete(id);
  }
}
