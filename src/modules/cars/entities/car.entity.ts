/* eslint-disable prettier/prettier */
import { Prisma } from '@prisma/client';
import { randomUUID } from 'crypto';

export class Car {
  readonly id: string;
  year: number;
  fuel: string;
  km: number;
  color: string;
  fipe: Prisma.Decimal;
  price: Prisma.Decimal;
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
