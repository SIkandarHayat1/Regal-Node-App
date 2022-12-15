import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { users, UserSchema } from 'src/Models/Users';

@Module({
  imports : [MongooseModule.forFeature([{ name: users.name, schema: UserSchema }])],
  controllers: [UsersController],
  providers: [UsersService] ,
  exports : [UsersService]
})
export class UsersModule {}
