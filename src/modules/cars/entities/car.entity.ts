/* eslint-disable prettier/prettier */
import { randomUUID } from 'crypto';

export class Car {
  readonly id: string;
  year: string;
  fuel: string;
  km: number;
  color: string;
  fipe: number;
  price: number;
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
