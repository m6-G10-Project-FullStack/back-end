/* eslint-disable prettier/prettier */
import { Module, ClassSerializerInterceptor } from '@nestjs/common';
import { CarsModule } from './modules/cars/cars.module';
import { BrandsModule } from './modules/brands/brands.module';
import { GalleryModule } from './modules/gallery/gallery.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { CommentsModule } from './modules/comments/comments.module';

@Module({
  imports: [CarsModule, BrandsModule, GalleryModule, UsersModule, AuthModule, CommentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
