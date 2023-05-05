/* eslint-disable prettier/prettier */
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './repositories/user.repository';
import { MailService } from 'src/utils/mail.service';
import { PrismaService } from 'src/database/prisma.service';
import { hashSync } from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(
    private userRepository: UserRepository,
    private mailService: MailService,
    private prisma: PrismaService,
  ) {}

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

  async sendResetEmailPassword(email: string) {
    const findUser = await this.userRepository.getUserByEmail(email);

    if (!findUser) {
      throw new NotFoundException('User could not be found, invalid email');
    }

    const resetToken = randomUUID();

    await this.prisma.user.update({
      where: { email: email },
      data: {
        token: resetToken,
      },
    });
    const resetPasswordTemplate = this.mailService.resetPassword(
      email,
      findUser.name,
      resetToken,
    );

    await this.mailService.sendEmail(resetPasswordTemplate);
  }

  async resetPassword(password: string, resetToken: string) {
    const user = await this.prisma.user.findFirst({
      where: { token: resetToken },
    });
    if (!user)
      throw new NotFoundException('User could not be found, invalid email');

    await this.prisma.user.update({
      where: { id: user.id },
      data: { password: hashSync(password, 10), token: null },
    });
  }
}
