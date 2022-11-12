import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
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
  @Post('login')
  async login(@Request() req) {
    console.log("Hello from the other side")
    return this.authService.login(req.body);
  }

  //@UseGuards(SignupAuthGuard)
  @Post('register')
  async register(@Request() req) {
    console.log(req.body)
    return this.authService.register(req.body);
  }


}
