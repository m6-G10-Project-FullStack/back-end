import { randomUUID } from 'node:crypto';

export class Comment {
  readonly id: string;
  readonly created_at: Date;
  comment: string;
  userId: string;
  carId: string;

  constructor() {
    this.id = randomUUID();
  }
}
