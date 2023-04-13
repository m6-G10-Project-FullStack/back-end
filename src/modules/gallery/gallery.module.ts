/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { GalleryService } from './gallery.service';
import { GalleryController } from './gallery.controller';
import { PrismaService } from 'src/database/prisma.service';
import { GalleryRepository } from './repositories/gallery.repository';
import { GalleryPrismaRepository } from './repositories/prisma/gallery.prisma.repository';

@Module({
  controllers: [GalleryController],
  providers: [
    GalleryService,
    PrismaService,
    { provide: GalleryRepository, useClass: GalleryPrismaRepository },
  ],
})
export class GalleryModule {}
