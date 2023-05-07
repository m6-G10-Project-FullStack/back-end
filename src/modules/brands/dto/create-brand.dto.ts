/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBrandDto {
  @ApiProperty({ example: 'BMW', description: 'Nome da marca' })
  @IsString()
  @IsNotEmpty()
  name: string;
}
