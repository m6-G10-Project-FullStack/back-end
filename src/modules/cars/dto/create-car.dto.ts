/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, MaxLength } from 'class-validator';

export class CreateCarDto {
  @ApiProperty({ example: '2020', description: 'Ano do carro' })
  @IsString()
  @IsNotEmpty()
  year: string;

  @ApiProperty({ example: 'Flex', description: 'Tipo de combustível' })
  @IsString()
  @IsNotEmpty()
  fuel: string;

  @ApiProperty({ example: '10000', description: 'Quilometragem do carro' })
  @IsNumber()
  @IsNotEmpty()
  km: number;

  @ApiProperty({ example: 'Prata', description: 'Cor do carro' })
  @IsString()
  @IsNotEmpty()
  color: string;

  @ApiProperty({
    example: '50000',
    description: 'Preço de acordo com a tabela FIPE',
  })
  @IsNumber()
  @IsNotEmpty()
  fipe: number;

  @ApiProperty({ example: '60000', description: 'Preço do carro' })
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString()
  @ApiProperty({
    example: 'Descição muito maneira',
    description: 'Descrição do carro',
  })
  @IsNotEmpty()
  @MaxLength(400)
  description: string;

  @ApiProperty({ example: 'Palio Weekend', description: 'Modelo do carro' })
  @IsString()
  @IsNotEmpty()
  model: string;

  @ApiProperty({
    example: '1',
    description: 'Referência ao ID da tabela de Brands',
  })
  @IsNumber()
  @IsNotEmpty()
  brandId: number;

  @ApiProperty({
    example: 'f9d8d558-637e-4e6a-83f2-9f61c86354c5',
    description: 'ID do usuário que está criando o carro',
  })
  @IsString()
  @IsNotEmpty()
  userId: string;

  @ApiProperty({
    example:
      'https://image.sitedecarro.com.br/_fotos/anunciousados/gigante/2023/202304/20230426/fiat-palio-weekend',
    description: 'Link da imagem de capa (principal) do carro',
  })
  @IsString()
  @IsNotEmpty()
  coverImage: string;
}
