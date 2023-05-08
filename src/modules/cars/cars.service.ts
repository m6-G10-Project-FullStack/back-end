/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { CarsRepository } from './repositories/cars.repository';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  constructor(private carsRepository: CarsRepository) {}

  async create(createCarDto: CreateCarDto) {
    return await this.carsRepository.createCar(createCarDto);
  }

  async findOne(id: string) {
    const car = await this.carsRepository.findCarById(id);
    if (!car) throw new NotFoundException('Invalid car Id');
    return car;
  }

  async update(id: string, updateCarDto: UpdateCarDto) {
    const car = await this.carsRepository.findCarById(id);
    if (!car) throw new NotFoundException('Invalid car Id');
    return this.carsRepository.updateCar(id, updateCarDto);
  }

  async findAllPagination(
    page: string,
    limit: string,
    brand: string,
    model: string,
    color: string,
    year: string,
    fuel: string,
  ) {
    return await this.carsRepository.findAll(
      page,
      limit,
      brand,
      model,
      color,
      year,
      fuel,
    );
  }

  async remove(id: string) {
    const car = await this.carsRepository.findCarById(id);
    if (!car) throw new NotFoundException('Invalid car Id');
    return this.carsRepository.softDelete(id);
  }

  async delete(id: string) {
    const car = await this.carsRepository.findCarById(id);
    if (!car) throw new NotFoundException('Invalid car Id');
    return this.carsRepository.permanentDelete(id);
  }
}
