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
    const brand = await this.brandRepository.findbyName(createBrandDto.name);
    if (brand) {
      throw new ConflictException('Name already exists!');
    }

    return this.brandRepository.createBrand(createBrandDto);
  }

  async findByName(name: string) {
    const brand = await this.brandRepository.findbyName(name);

    if (!brand) {
      throw new NotFoundException('Name not found');
    }

    return brand;
  }

  async findAll() {
    return this.brandRepository.findAllBrands();
  }
}
