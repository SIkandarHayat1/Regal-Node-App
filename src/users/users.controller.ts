import { Controller , Get , Post , Patch, Body,  Response, HttpStatus ,
  Request,
  Param,
  Delete,
  Query , UseGuards } from '@nestjs/common';
import { appendFile } from 'fs';
import { identity } from 'rxjs';
import { usersDto } from './users.dto';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';



@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  
  @UseGuards(AuthGuard('jwt'))
  @Get()
  async GetAllUsers(@Body() obj: usersDto, @Response() res, @Request() req) {;
    const response = await this.usersService.getAll()
    return res.status(HttpStatus.OK).json({
      response ,
    })
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/get_single_user')
  async GetSingleUser(@Query() params, @Response() res, @Request() req) {
    //obj.email = req.user.email
    const user_id = params.id;
    const response = await this.usersService.getSingleUsers(user_id)
    return res.status(HttpStatus.OK).json({
      response ,
    })
  }


  @UseGuards(AuthGuard('jwt'))
  @Post()
  async addUser(@Body() obj: usersDto, @Response() res, @Request() req) {
    //obj.email = req.user.email
    const response = await this.usersService.addUsers(obj)
    return res.status(HttpStatus.OK).json({
      response,
    })
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch()
  async updateUsers(@Body() obj: usersDto, @Response() res, @Request() req) {
   const response = await this.usersService.updateUsers(obj)
   return res.status(HttpStatus.OK).json({
     response,
    })
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete()
  async addDelete(@Query() params, @Response() res, @Request() req) {
   const response = await this.usersService.deleteUsers(params.id)
   return res.status(HttpStatus.OK).json({
     response,
    })
  }


  


}
