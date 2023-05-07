/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { hashSync } from 'bcryptjs';
import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'johndoe@mail.com', description: 'Email do usuário' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'John Doe', description: 'Nome do usuário' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: '999.999.999-99', description: 'CPF do usuário' })
  @IsString()
  @IsNotEmpty()
  cpf: string;

  @ApiProperty({
    example: '(99) 99999-9999',
    description: 'Telefone do usuário',
  })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ example: '25/12/2000', description: 'Aniversário do usuário' })
  @IsString()
  @IsNotEmpty()
  birthday: string;

  @ApiProperty({
    example: 'Anunciante perito e experiente',
    description: 'Descrição do usuário',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    example: true,
    description: 'Decide se o usuário é um anunciante',
  })
  @IsBoolean()
  @IsNotEmpty()
  is_seller: boolean;

  @ApiProperty({ example: 'SEnH@s3gUrA', description: 'Senha do usuário' })
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }: { value: string }) => hashSync(value, 10), {
    groups: ['transform'],
  })
  password: string;

  @ApiProperty({ example: '99999-999', description: 'CEP do usuário' })
  @IsString()
  @IsNotEmpty()
  cep: string;

  @ApiProperty({ example: 'Amazonas', description: 'Estado do usuário' })
  @IsString()
  @IsNotEmpty()
  state: string;

  @ApiProperty({ example: 'Ratanaba', description: 'Cidade do usuário' })
  @IsString()
  @IsNotEmpty()
  city: string;

  @ApiProperty({ example: 'Rua bacana', description: 'Rua do usuário' })
  @IsString()
  @IsNotEmpty()
  street: string;

  @ApiProperty({ example: '123', description: 'Número da casa do usuário' })
  @IsString()
  @IsNotEmpty()
  number: string;

  @ApiProperty({ example: 'apt. 10', description: 'Complemento do usuário' })
  @IsString()
  @IsOptional()
  complement?: string;
}
