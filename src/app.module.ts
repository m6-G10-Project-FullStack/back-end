import { Module } from '@nestjs/common';
import { CarsModule } from './modules/cars/cars.module';
import { BrandsModule } from './modules/brands/brands.module';

@Module({
  imports: [CarsModule, BrandsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
