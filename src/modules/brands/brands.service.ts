import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { BrandRepository } from './repositories/brand.repository';

@Injectable()
export class BrandsService {
  constructor(private brandRepository: BrandRepository) {}

  async create(createBrandDto: CreateBrandDto) {
    return this.brandRepository.createBrand(createBrandDto);
  }

  async findAll() {
    return this.brandRepository.findAllBrands();
  }

  findOne(id: number) {
    return `This action returns a #${id} brand`;
  }
}
