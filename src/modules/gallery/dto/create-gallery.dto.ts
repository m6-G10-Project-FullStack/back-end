/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGalleryDto {
  @ApiProperty({
    example:
      'https://image.sitedecarro.com.br/_fotos/anunciousados/gigante/2023/202304/20230426/fiat-palio-weekend',
    description: 'Link da imagem',
  })
  @IsNotEmpty()
  @IsString()
  photo_link: string;

  @ApiProperty({
    example: 'fef4998f-ce7e-4b26-87dd-95b31bc6535b',
    description: 'ID do carro que a imagem está referenciada',
  })
  @IsNotEmpty()
  @IsString()
  carId: string;
}
