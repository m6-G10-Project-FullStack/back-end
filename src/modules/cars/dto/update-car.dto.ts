/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateCarDto } from './create-car.dto';
import { IsBoolean, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCarDto extends PartialType(CreateCarDto) {
  @ApiProperty({
    example: false,
    description: 'Define se o anúncio está ativo ou não',
  })
  @IsBoolean()
  @IsOptional()
  is_active: boolean;
}
