/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, IsNumber, MaxLength } from 'class-validator';

export class CreateCarDto {
  @IsString()
  @IsNotEmpty()
  year: string;

  @IsString()
  @IsNotEmpty()
  fuel: string;

  @IsNumber()
  @IsNotEmpty()
  km: number;

  @IsString()
  @IsNotEmpty()
  color: string;

  @IsNumber()
  @IsNotEmpty()
  fipe: number;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(400)
  description: string;

  @IsString()
  @IsNotEmpty()
  model: string;

  @IsNumber()
  @IsNotEmpty()
  brandId: number;

  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  coverImage: string;
}
