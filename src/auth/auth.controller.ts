import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Response, Request , Query } from '@nestjs/common';
import { authDto } from './auth.dto';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(@Body() obj: authDto, @Response() res, @Request() req) {
    const response = await this.authService.checkUserFromDB(obj)
    return res.status(HttpStatus.OK).json({
      response
    })
  }

  


}
