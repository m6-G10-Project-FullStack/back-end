/* eslint-disable prettier/prettier */
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './repositories/user.repository';

@Injectable()
export class UsersService {
  constructor(private userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto) {
    const findUser = await this.userRepository.getUserByEmail(
      createUserDto.email,
    );

    if (findUser) throw new ConflictException('This email is not avaliable');

    const newUser = await this.userRepository.createUser(createUserDto);

    return newUser;
  }

  async findById(id: string) {
    const findUser = await this.userRepository.getUserById(id);

    if (!findUser)
      throw new NotFoundException('User could not be found, invalid Id');

    return findUser;
  }

  async findByEmail(email: string) {
    const findUser = await this.userRepository.getUserByEmail(email);

    if (!findUser)
      throw new NotFoundException('User could not be found, invalid email');

    return findUser;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const findUser = await this.userRepository.getUserById(id);

    if (!findUser)
      throw new NotFoundException('User could not be found, invalid Id');

    return await this.userRepository.updateUser(updateUserDto, id);
  }

  async remove(id: string) {
    const findUser = await this.userRepository.getUserById(id);

    if (!findUser)
      throw new NotFoundException('User could not be found, invalid Id');

    return await this.userRepository.deleteUser(id);
  }

  async findAll() {
    return this.userRepository.findAll();
  }
}
