import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AutenticatedhGuard } from './auth/auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return { msg: 'Loged In' };
  }

  @UseGuards(AutenticatedhGuard)
  @Get('protected')
  getHello(@Request() req) {
    return req.user;
  }
}
