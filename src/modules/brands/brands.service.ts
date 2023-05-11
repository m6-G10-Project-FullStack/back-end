/* eslint-disable prettier/prettier */
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { BrandRepository } from './repositories/brand.repository';

@Injectable()
export class BrandsService {
  constructor(private brandRepository: BrandRepository) {}

  async create(createBrandDto: CreateBrandDto) {
    return this.brandRepository.createBrand(createBrandDto);
  }

  async findByName(name: string) {
    const brand = await this.brandRepository.findbyNameOrCreate(name);

    if (!brand) {
      throw new NotFoundException('Name not found');
    }

    return brand;
  }

  async findAll() {
    return this.brandRepository.findAllBrands();
  }
}
