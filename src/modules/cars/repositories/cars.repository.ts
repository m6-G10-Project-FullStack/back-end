/* eslint-disable prettier/prettier */
import { CreateCarDto } from '../dto/create-car.dto';
import { Car } from '../entities/car.entity';

export abstract class CarsRepository {
  abstract createCar(data: CreateCarDto): Promise<Car>;
}
