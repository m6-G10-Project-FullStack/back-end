/* eslint-disable prettier/prettier */
import { Decimal } from '@prisma/client/runtime';
import {
  IsNotEmpty,
  IsString,
  IsNumber,
  MaxLength,
  Max,
  Min,
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

  @IsNumber()
  @IsNotEmpty()
  fipe: Decimal;

  @IsNumber()
  @IsNotEmpty()
  price: Decimal;

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
}
