/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { randomUUID } from 'crypto';

export class User {
  @ApiProperty({ example: 'f9d8d558-637e-4e6a-83f2-9f61c86354c5' })
  readonly id: string;

  @ApiProperty({ example: 'johndoe@mail.com' })
  email: string;

  @ApiProperty({ example: 'John Doe' })
  name: string;

  @ApiProperty({ example: '999.999.999-99' })
  cpf: string;

  @ApiProperty({ example: '99 99999-9999' })
  phone: string;

  @ApiProperty({ example: '25/12/2000' })
  birthday: string;

  @ApiProperty({ example: 'Anunciante perito e experiente' })
  description: string;

  @ApiProperty({ example: true })
  is_seller: boolean;

  @Exclude()
  @ApiProperty({ example: 'SEnH@s3gUrA' })
  password: string;

  @ApiProperty({ example: '99999-999' })
  cep: string;

  @ApiProperty({ example: 'Amazonas' })
  state: string;

  @ApiProperty({ example: 'Ratanaba' })
  city: string;

  @ApiProperty({ example: 'Rua bacana' })
  street: string;

  @ApiProperty({ example: '123' })
  number: string;

  @ApiProperty({ example: 'apt. 10' })
  complement?: string;

  @ApiProperty({ example: 'random-1' })
  color?: string;

  constructor() {
    this.id = randomUUID();
  }
}
