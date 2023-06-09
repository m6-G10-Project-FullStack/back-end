/* eslint-disable prettier/prettier */
import { CreateCarDto } from '../dto/create-car.dto';
import { UpdateCarDto } from '../dto/update-car.dto';
import { Car } from '../entities/car.entity';

export abstract class CarsRepository {
  abstract createCar(data: CreateCarDto): Promise<Car>;
  abstract findCarById(id: string): Promise<Car>;
  abstract updateCar(id: string, data: UpdateCarDto): Promise<Car>;
  abstract softDelete(id: string): Promise<void>;
  abstract findAll(
    page: string,
    limit: string,
    brand?: string,
    model?: string,
    color?: string,
    year?: string,
    fuel?: string,
  ): Promise<Car[]>;
  abstract permanentDelete(id: string): Promise<void>;
}
