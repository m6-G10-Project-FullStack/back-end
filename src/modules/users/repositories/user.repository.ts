/* eslint-disable prettier/prettier */
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';

export abstract class UserRepository {
  abstract createUser(data: CreateUserDto): Promise<User>;
  abstract getUserById(id: string): Promise<User>;
  abstract getUserByEmail(email: string): Promise<User>;
  abstract updateUser(data: UpdateUserDto, id: string): Promise<User>;
  abstract deleteUser(id: string): Promise<void>;
  abstract findAll(): Promise<User[]>;
}
