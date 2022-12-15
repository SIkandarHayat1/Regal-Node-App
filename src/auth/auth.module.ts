import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/jwt.strategy';
import { UsersService } from 'src/users/users.service';
import { users, UserSchema } from 'src/Models/Users';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports : [JwtModule.register({
    secret : 'super-secret-cat'
  }) ,  
  MongooseModule.forFeature([{ name: users.name, schema: UserSchema }])
  ],
  controllers: [AuthController],
  providers: [AuthService , JwtStrategy , UsersService],
})
export class AuthModule {}
