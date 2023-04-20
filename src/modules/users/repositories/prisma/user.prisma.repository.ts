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

  async createUser(data: CreateUserDto): Promise<User> {
    const user = new User();

    Object.assign(user, { ...data });

    const newUser = await this.prisma.user.create({
      data: {
        ...user,
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
