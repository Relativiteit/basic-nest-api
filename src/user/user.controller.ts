import {
  Controller,
  Get,
  Req,
  UseGuards,
  Patch,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { request } from 'http';
import { JwtGuard } from 'src/auth/guard';
import { Request } from 'express';
import { GetUser } from 'src/auth/decorator';
import { User } from '@prisma/client';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  @Get('me')
  getMe(
    @GetUser() user: User,
    @GetUser('email') email: string,
  ) {
    console.log(email);
    return user;
  }
  @Patch()
  editUser() {}
}
