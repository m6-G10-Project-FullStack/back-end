import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsController } from './brands.controller';
import { PrismaService } from 'src/database/prisma.service';
import { BrandRepository } from './repositories/brand.repository';
import { BrandPrismaRepository } from './repositories/prisma/brand.prisma.repository';

@Module({
  controllers: [BrandsController],
  providers: [
    BrandsService,
    PrismaService,
    { provide: BrandRepository, useClass: BrandPrismaRepository },
  ],
})
export class BrandsModule {}
