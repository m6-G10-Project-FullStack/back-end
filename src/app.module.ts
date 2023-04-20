/* eslint-disable prettier/prettier */
import { Module, ClassSerializerInterceptor } from '@nestjs/common';
import { CarsModule } from './modules/cars/cars.module';
import { BrandsModule } from './modules/brands/brands.module';
import { GalleryModule } from './modules/gallery/gallery.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [CarsModule, BrandsModule, GalleryModule, UsersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
