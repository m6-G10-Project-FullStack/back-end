/* eslint-disable prettier/prettier */
import { PrismaService } from 'src/database/prisma.service';
import { Injectable } from '@nestjs/common';
import { GalleryRepository } from '../gallery.repository';
import { CreateGalleryDto } from '../../dto/create-gallery.dto';
import { Gallery } from '../../entities/gallery.entity';

@Injectable()
export class GalleryPrismaRepository implements GalleryRepository {
  constructor(private prisma: PrismaService) {}

  async createPhoto(data: CreateGalleryDto): Promise<Gallery> {
    const gallery = new Gallery();
    Object.assign(gallery, { ...data });
    const newGallery = await this.prisma.gallery.create({
      data: { ...gallery },
    });
    return newGallery;
  }

  async listAllPhotos(): Promise<Gallery[]> {
    return await this.prisma.gallery.findMany();
  }

  async listPhotoById(id: number): Promise<Gallery> {
    return await this.prisma.gallery.findUnique({ where: { id } });
  }
}
