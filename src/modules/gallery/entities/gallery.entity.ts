import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export class Gallery {
  @ApiProperty({ example: '37cf0576-6972-4173-93ad-1229a2593598' })
  readonly id: number;

  @ApiProperty({
    example:
      'https://image.carrobacana.com.br//bmw-1-m-3.0-coupe-24v-gasolina-biturbo-2p-manual',
  })
  photo_link: string;

  @ApiProperty({ example: 'fef4998f-ce7e-4b26-87dd-95b31bc6535b' })
  @Exclude()
  carId: string;
}
