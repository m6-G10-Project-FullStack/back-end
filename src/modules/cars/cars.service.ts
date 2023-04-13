import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { CarsRepository } from './repositories/cars.repository';

@Injectable()
export class CarsService {
  constructor(private carsRepository: CarsRepository) {}

  async create(createCarDto: CreateCarDto) {
    return await this.carsRepository.createCar(createCarDto);
  }

  findAll() {
    return `This action returns all cars`;
  }

  findOne(id: string) {
    return `This action returns a #${id} car`;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    return `This action updates a #${id} car`;
  }

  remove(id: string) {
    return `This action removes a #${id} car`;
  }
}
