/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SendMailDto {
  @ApiProperty({
    example: 'janadoe@mail.com',
    description: 'Email de quem receberá a mensagem',
  })
  @IsString()
  @IsNotEmpty()
  to: string;

  @ApiProperty({
    example: 'Recuperação de senha',
    description: 'Título do email',
  })
  @IsString()
  @IsNotEmpty()
  subject: string;

  @ApiProperty({
    example: 'Acesse o link: https://sitebacana.com/recuperar',
    description: 'Conteúdo do email',
  })
  @IsString()
  @IsNotEmpty()
  text: string;
}
