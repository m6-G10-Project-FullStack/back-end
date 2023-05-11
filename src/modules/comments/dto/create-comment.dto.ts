import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCommentDto {
  @ApiProperty({
    example: 'Carro muito bacana',
    description: 'Comentário de um carro',
  })
  @IsNotEmpty()
  @IsString()
  comment: string;

  @ApiProperty({
    example: 'f9d8d558-637e-4e6a-83f2-9f61c86354c5',
    description: 'ID do usuário que está fazendo o comentário',
  })
  @IsNotEmpty()
  @IsString()
  userId: string;

  @ApiProperty({
    example: 'fef4998f-ce7e-4b26-87dd-95b31bc6535b',
    description: 'ID do carro onde o comentário está sendo inserido',
  })
  @IsNotEmpty()
  @IsString()
  carId: string;
}
