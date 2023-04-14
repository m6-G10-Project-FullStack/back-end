/* eslint-disable prettier/prettier */
import { PrismaService } from 'src/database/prisma.service';
import { CreateCarDto } from '../../dto/create-car.dto';
import { Car } from '../../entities/car.entity';
import { CarsRepository } from '../cars.repository';
import { Injectable } from '@nestjs/common';
import { UpdateCarDto } from '../../dto/update-car.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class CarsPrismaRepository implements CarsRepository {
  constructor(private prisma: PrismaService) {}

  async listAllCars(): Promise<Car[]> {
    const cars = await this.prisma.car.findMany({
      include: {
        comments: true,
        photos: true,
        Brand: true,
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
        Brand: true,
      },
    });
    return car;
  }

  async createCar(data: CreateCarDto): Promise<Car> {
    const car = new Car();
    Object.assign(car, { ...data });
    const isPromo = car.price > car.fipe ? false : true;
    const newCar = await this.prisma.car.create({
      data: { ...car, is_promo: isPromo },
    });
    return newCar;
  }

  async updateCar(id: string, data: UpdateCarDto): Promise<Car> {
    const car = await this.prisma.car.update({
      where: { id },
      data: { ...data },
      include: { Brand: true },
    });
    return car;
  }

  async softDelete(id: string): Promise<void> {
    await this.prisma.car.update({
      where: { id },
      data: { is_active: false },
    });
  }

  async findManyWithCursor(
    page: number,
    limit: number,
    cursor?: Prisma.CarWhereUniqueInput,
  ): Promise<{ data: any[]; count: number }> {
    const take = limit;
    const skip = cursor ? 1 : page === 1 ? 0 : (page - 1) * limit;

    const [data, count] = await Promise.all([
      this.prisma.car.findMany({
        take: limit,
        skip,
        cursor: cursor ? { id: cursor.id } : undefined,
      }),
      this.prisma.car.count(),
    ]);
    return { data, count };
  }
}
