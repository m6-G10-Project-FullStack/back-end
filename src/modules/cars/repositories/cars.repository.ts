/* eslint-disable prettier/prettier */
import { CreateCarDto } from '../dto/create-car.dto';
import { UpdateCarDto } from '../dto/update-car.dto';
import { Car } from '../entities/car.entity';

export abstract class CarsRepository {
  abstract createCar(data: CreateCarDto): Promise<Car>;
  abstract listAllCars(): Promise<Car[]>;
  abstract findCarById(id: string): Promise<Car>;
  abstract updateCar(id: string, data: UpdateCarDto): Promise<Car>;
  abstract softDelete(id: string): Promise<void>;
  abstract findManyWithCursor(page: string, limit: string): Promise<Car[]>;
}
