/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';

export class Car {
  @ApiProperty({ example: 'fef4998f-ce7e-4b26-87dd-95b31bc6535b' })
  readonly id: string;

  @ApiProperty({ example: '2022' })
  year: string;

  @ApiProperty({ example: 'Flex' })
  fuel: string;

  @ApiProperty({ example: 20000 })
  km: number;

  @ApiProperty({ example: 'Branco' })
  color: string;

  @ApiProperty({ example: 50000 })
  fipe: number;

  @ApiProperty({ example: 55000 })
  price: number;

  @ApiProperty({ example: true })
  readonly is_promo: boolean;

  @ApiProperty({ example: 'Carro novinho em folha' })
  description: string;

  @ApiProperty({ example: true })
  is_active: boolean;

  @ApiProperty({ example: '3.0 COUPÉ 24V GASOLINA BI-TURBO 2P MANUAL' })
  model: string;

  @ApiProperty({
    example:
      'https://image.carrobacana.com.br//bmw-1-m-3.0-coupe-24v-gasolina-biturbo-2p-manual',
  })
  coverImage: string;

  @ApiProperty({ example: 1 })
  brandId: number;

  @ApiProperty({ example: 'f9d8d558-637e-4e6a-83f2-9f61c86354c5' })
  userId: string;

  constructor() {
    this.id = randomUUID();
  }
}
