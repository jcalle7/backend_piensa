import { Controller, Get, Post, Body, Param, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';  
import { LoginDto } from 'src/auth/dto/login.dto';  // Importa el DTO de login
import { RegisterDto } from 'src/auth/dto/register.dto';
/*import * as bcrypt from 'bcrypt'; // Para comparar contraseñas*/

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('')
  async register(@Body() registerDto: RegisterDto) {
    return this.usersService.create(registerDto);
  }

  /*@Post('')
  async login(@Body() loginDto: LoginDto) {
    const { username, password } = loginDto;
    const user = await this.usersService.findByUsername(username);

    if (!user) {
      throw new BadRequestException('Invalid username or password');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new BadRequestException('Invalid username or password');
    }

    return {
      message: 'Login successful',
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    };
  }*/

  @Get(':id')
  async getUserById(@Param('id') id: number) {
    const user = await this.usersService.findById(id);
    return user;
  }
}
