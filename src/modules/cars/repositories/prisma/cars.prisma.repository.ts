/* eslint-disable prettier/prettier */
import { PrismaService } from 'src/database/prisma.service';
import { CreateCarDto } from '../../dto/create-car.dto';
import { Car } from '../../entities/car.entity';
import { CarsRepository } from '../cars.repository';
import { Injectable } from '@nestjs/common';
import { UpdateCarDto } from '../../dto/update-car.dto';

@Injectable()
export class CarsPrismaRepository implements CarsRepository {
  constructor(private prisma: PrismaService) {}

  async findCarById(id: string): Promise<Car> {
    const car = await this.prisma.car.findUnique({
      where: {
        id,
      },
      include: {
        Brand: true,
        photos: { select: { photo_link: true } },
        User: { select: { name: true, color: true, description: true } },
        comments: {
          include: { User: { select: { color: true, name: true } } },
        },
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

  async findAll(
    page: string,
    limit: string,
    brand: string,
    model: string,
    color: string,
    year: string,
    fuel: string,
  ) {
    if (brand || model || color || year || year || fuel) {
      return await this.prisma.car.findMany({
        skip: parseInt(page) * parseInt(limit),
        take: parseInt(limit),
        where: {
          Brand: { name: brand },
          model: model,
          color: color,
          year: year,
          fuel: fuel,
        },
        include: {
          Brand: true,
          photos: true,
          User: { select: { name: true } },
        },
      });
    } else {
      return await this.prisma.car.findMany({
        take: parseInt(limit),
        skip: parseInt(page) * parseInt(limit),
        include: {
          Brand: true,
          photos: true,
          User: { select: { name: true } },
        },
      });
    }
  }

  async permanentDelete(id: string): Promise<void> {
    await this.prisma.car.delete({
      where: {
        id,
      },
    });
  }
}
