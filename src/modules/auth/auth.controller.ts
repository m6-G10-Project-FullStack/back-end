import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

interface iClientLogin {
  email: string;
  password: string;
}

@ApiTags('Authorization')
@Controller('api')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiResponse({ status: 201, description: 'Fornece o token da aplicação' })
  @UseGuards(LocalAuthGuard)
  async login(@Body() body: iClientLogin) {
    return await this.authService.login(body.email);
  }
}
