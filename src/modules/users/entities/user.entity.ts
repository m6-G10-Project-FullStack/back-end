/* eslint-disable prettier/prettier */
import { Exclude } from 'class-transformer';
import { randomUUID } from 'crypto';

export class User {
  readonly id: string;
  email: string;
  name: string;
  cpf: string;
  phone: string;
  birthday: string;
  description: string;
  is_seller: boolean;

  @Exclude()
  password: string;

  cep: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement?: string;
  color?: string;
  coverImage: string;

  constructor() {
    this.id = randomUUID();
  }
}
