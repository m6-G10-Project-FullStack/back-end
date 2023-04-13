import { Exclude } from 'class-transformer';

export class Gallery {
  readonly id: number;

  photo_link: string;

  @Exclude()
  carId: string;
}
