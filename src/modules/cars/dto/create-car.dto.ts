/* eslint-disable prettier/prettier */
import { Prisma } from '@prisma/client';
import {
  IsNotEmpty,
  IsString,
  IsNumber,
  MaxLength,
  Max,
  Min,
  IsDecimal,
} from 'class-validator';

export class CreateCarDto {
  @IsNumber()
  @IsNotEmpty()
  @Max(2023)
  @Min(2017)
  year: number;

  @IsString()
  @IsNotEmpty()
  fuel: string;

  @IsNumber()
  @IsNotEmpty()
  km: number;

  @IsString()
  @IsNotEmpty()
  color: string;

  @IsDecimal()
  @IsNotEmpty()
  fipe: Prisma.Decimal;

  @IsDecimal()
  @IsNotEmpty()
  price: Prisma.Decimal;

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
