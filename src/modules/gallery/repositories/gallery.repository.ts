/* eslint-disable prettier/prettier */
import { CreateGalleryDto } from '../dto/create-gallery.dto';
import { Gallery } from '../entities/gallery.entity';

export abstract class GalleryRepository {
  abstract createPhoto(data: CreateGalleryDto): Promise<Gallery>;
  abstract listAllPhotos(): Promise<Gallery[]>;
  abstract listPhotoById(id: number): Promise<Gallery>;
}
