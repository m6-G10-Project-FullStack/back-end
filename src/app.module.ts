/* eslint-disable prettier/prettier */
import { Module, ClassSerializerInterceptor } from '@nestjs/common';
import { CarsModule } from './modules/cars/cars.module';
import { BrandsModule } from './modules/brands/brands.module';
import { GalleryModule } from './modules/gallery/gallery.module';

@Module({
  imports: [CarsModule, BrandsModule, GalleryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
