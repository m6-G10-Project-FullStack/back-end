/* eslint-disable prettier/prettier */
import { PrismaService } from 'src/database/prisma.service';
import { CreateBrandDto } from '../../dto/create-brand.dto';
import { Brand } from '../../entities/brand.entity';
import { BrandRepository } from '../brand.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BrandPrismaRepository implements BrandRepository {
  constructor(private prisma: PrismaService) {}

  async createBrand(data: CreateBrandDto): Promise<Brand> {
    const brand = new Brand();
    Object.assign(brand, { ...data });
    const newBrand = await this.prisma.brand.create({ data: { ...brand } });
    return newBrand;
  }
  async findAllBrands(): Promise<Brand[]> {
    return await this.prisma.brand.findMany();
  }
}
