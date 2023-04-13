/* eslint-disable prettier/prettier */
import { CreateBrandDto } from '../dto/create-brand.dto';
import { Brand } from '../entities/brand.entity';

export abstract class BrandRepository {
  abstract createBrand(data: CreateBrandDto): Promise<Brand>;
  abstract findAllBrands(): Promise<Brand[]>;
}
