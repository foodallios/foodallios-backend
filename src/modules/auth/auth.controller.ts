import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { LocalAuthGuard } from 'src/guards/local-auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) { }

  @UseGuards(JwtAuthGuard)
  @Get()
  async testi() {
    return "Hi People";
  }


  @UseGuards(LocalAuthGuard)
  @Get('login')
  async login(@Body() bod, @Request() req) {

    return this.authService.login(req.body);
  }

  //@UseGuards(JwtAuthGuard)

}
