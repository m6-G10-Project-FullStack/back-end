/* eslint-disable prettier/prettier */
import { PrismaService } from 'src/database/prisma.service';
import { CreateCarDto } from '../../dto/create-car.dto';
import { Car } from '../../entities/car.entity';
import { CarsRepository } from '../cars.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsPrismaRepository implements CarsRepository {
  constructor(private prisma: PrismaService) {}
  async listAllCars(): Promise<Car[]> {
    const cars = await this.prisma.car.findMany({
      include: {
        comments: true,
        photos: true,
      },
    });
    return cars;
  }
  async findCarById(id: string): Promise<Car> {
    const car = await this.prisma.car.findUnique({
      where: {
        id,
      },
      include: {
        comments: true,
        photos: true,
      },
    });
    return car;
  }

  async createCar(data: CreateCarDto): Promise<Car> {
    const car = new Car();
    Object.assign(car, { ...data });
    const newCar = await this.prisma.car.create({ data: { ...car } });
    return newCar;
  }
}
