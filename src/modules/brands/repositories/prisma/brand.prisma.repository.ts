/* eslint-disable prettier/prettier */
import { PrismaService } from 'src/database/prisma.service';
import { CreateBrandDto } from '../../dto/create-brand.dto';
import { Brand } from '../../entities/brand.entity';
import { BrandRepository } from '../brand.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BrandPrismaRepository implements BrandRepository {
  constructor(private prisma: PrismaService) {}

  async findbyName(name: string): Promise<Brand> {
    const lowerName = name.toLowerCase();

    const brand = await this.prisma.brand.findUnique({
      where: { name: lowerName },
    });
    return brand;
  }

  async createBrand(data: CreateBrandDto): Promise<Brand> {
    const name = data.name.toLowerCase();
    const brand = new Brand();
    Object.assign(brand, { name });
    const newBrand = await this.prisma.brand.create({ data: { ...brand } });
    return newBrand;
  }
  async findAllBrands(): Promise<Brand[]> {
    return await this.prisma.brand.findMany();
  }
}
