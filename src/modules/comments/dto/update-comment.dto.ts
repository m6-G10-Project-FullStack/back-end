/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateCommentDto {
  @ApiProperty({
    example: 'Carro muito bacana',
    description: 'Comentário de um carro',
  })
  @IsNotEmpty()
  @IsString()
  comment: string;
}
