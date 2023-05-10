import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'node:crypto';

export class Comment {
  @ApiProperty({ example: '93ac8414-514b-4138-a2bc-b434aec1fc84' })
  readonly id: string;

  @ApiProperty({ example: 'Dom Fev 01 2023 00:00:00 GMT+0000 (GMT)' })
  readonly created_at: Date;

  @ApiProperty({ example: 'Incrível!' })
  comment: string;

  @ApiProperty({ example: 'f9d8d558-637e-4e6a-83f2-9f61c86354c5' })
  userId: string;

  @ApiProperty({ example: 'fef4998f-ce7e-4b26-87dd-95b31bc6535b' })
  carId: string;

  constructor() {
    this.id = randomUUID();
  }
}
