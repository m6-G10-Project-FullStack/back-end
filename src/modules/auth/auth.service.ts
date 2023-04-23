import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validatedUser(userEmail: string, userPassword: string) {
    const user = await this.userService.findByEmail(userEmail);
    if (user) {
      const passwordMatch = await compare(userPassword, user.password);
      if (passwordMatch) {
        return { email: user.email };
      }
    }
    return null;
  }

  async login(email: string) {
    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw new NotFoundException('email does not exist');
    }
    const payload = { is_seller: user.is_seller, color: user.color };
    return {
      token: this.jwtService.sign({ payload }, { subject: user.id }),
    };
  }
}
