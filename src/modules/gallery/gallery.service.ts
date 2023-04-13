import { NotFoundException, Injectable } from '@nestjs/common';
import { CreateGalleryDto } from './dto/create-gallery.dto';
import { GalleryRepository } from './repositories/gallery.repository';

@Injectable()
export class GalleryService {
  constructor(private galleryRepository: GalleryRepository) {}

  async create(createGalleryDto: CreateGalleryDto) {
    return this.galleryRepository.createPhoto(createGalleryDto);
  }

  async findAll() {
    return this.galleryRepository.listAllPhotos();
  }

  async findOne(id: number) {
    const gallery = await this.galleryRepository.listPhotoById(id);
    if (!gallery) throw new NotFoundException();
    return gallery;
  }
}
