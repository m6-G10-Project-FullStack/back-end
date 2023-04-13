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
  readonly is_active: boolean;
  model: string;
  brandId: number;

  constructor() {
    this.id = randomUUID();
    this.is_promo = this.price > this.fipe ? false : true;
  }
}
