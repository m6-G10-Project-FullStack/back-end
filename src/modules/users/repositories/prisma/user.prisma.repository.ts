/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUserDto } from '../../dto/create-user.dto';
import { UpdateUserDto } from '../../dto/update-user.dto';
import { User } from '../../entities/user.entity';
import { UserRepository } from '../user.repository';

@Injectable()
export class UserPrismaRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}
  findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async createUser(data: CreateUserDto): Promise<User> {
    const user = new User();

    Object.assign(user, { ...data });

    const colors = [
      'random1',
      'random2',
      'random3',
      'random4',
      'random5',
      'random6',
      'random7',
      'random8',
      'random9',
      'random10',
      'random11',
      'random12',
    ];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const newUser = await this.prisma.user.create({
      data: {
        ...user,
        color: randomColor,
      },
      include: {
        cars: true,
      },
    });

    return plainToInstance(User, newUser);
  }

  async getUserById(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        cars: true,
      },
    });

    return plainToInstance(User, user);
  }

  async getUserByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  }

  async updateUser(data: UpdateUserDto, id: string): Promise<User> {
    const user = await this.prisma.user.update({
      where: {
        id,
      },
      data,
      include: {
        cars: true,
      },
    });

    return plainToInstance(User, user);
  }

  async deleteUser(id: string): Promise<void> {
    await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
