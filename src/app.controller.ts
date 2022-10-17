import { ExceptionCode } from '@capacitor/core';
import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './modules/auth/auth.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    if (req.user !== null) {
      console.log("HI " +req.user.username)
      return this.authService.validateEntity(req.user.username, req.user.password)
      //return true;
      //return this.authService.login(req.user);
    }

    return null;
    
  }

  @UseGuards(LocalAuthGuard)
  @Post('test')
  async test(@Request() req) {
    if (req.username !== null) {
      console.log("HI " +req.username)
      return true;
      //return this.authService.login(req.user);
    }

    return null;
    
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Get()
  getHello(): string {
    console.log("hi")
    console.log(module.exports)
    return this.appService.getHello();
  }
}
