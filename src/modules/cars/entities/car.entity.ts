/* eslint-disable prettier/prettier */
import { Decimal } from '@prisma/client/runtime';
import { randomUUID } from 'crypto';

export class Car {
  readonly id: string;
  year: number;
  fuel: string;
  km: number;
  color: string;
  fipe: Decimal;
  price: Decimal;
  readonly is_promo: boolean;
  description: string;
  is_active: boolean;
  model: string;
  coverImage: string;
  brandId: number;
  userId: string;

  constructor() {
    this.id = randomUUID();
  }
}
