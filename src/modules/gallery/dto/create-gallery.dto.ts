/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateGalleryDto {
  @IsNotEmpty()
  @IsString()
  photo_link: string;

  @IsNotEmpty()
  @IsString()
  carId: string;
}
