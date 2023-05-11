import { ApiProperty } from '@nestjs/swagger';

/* eslint-disable prettier/prettier */
export class Brand {
  @ApiProperty({ example: 1 })
  readonly id: number;

  @ApiProperty({ example: 'BMW' })
  name: string;
}
