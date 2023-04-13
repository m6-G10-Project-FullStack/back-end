/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { CarsRepository } from './repositories/cars.repository';

@Injectable()
export class CarsService {
  constructor(private carsRepository: CarsRepository) {}

  async create(createCarDto: CreateCarDto) {
    return await this.carsRepository.createCar(createCarDto);
  }

  async findAll() {
    return await this.carsRepository.listAllCars();
  }

  async findOne(id: string) {
    const car = await this.carsRepository.findCarById(id);
    if (!car) throw new NotFoundException('Invalid car Id');
    return car;
  }

  // update(id: string, updateCarDto: UpdateCarDto) {
  //   return `This action updates a #${id} car`;
  // }

  // remove(id: string) {
  //   return `This action removes a #${id} car`;
  // }
}
