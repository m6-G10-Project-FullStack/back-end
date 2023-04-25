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

  async findAll(page: string, limit: string, brand: string) {
    if (brand) {
      return await this.prisma.car.findMany({
        skip: parseInt(page) * parseInt(limit),
        take: parseInt(limit),
        where: { Brand: { name: brand } },
        include: { Brand: true },
      });
    } else {
      return await this.prisma.car.findMany({
        take: parseInt(limit),
        skip: parseInt(page) * parseInt(limit),
        include: { Brand: true },
      });
    }
  }
}
