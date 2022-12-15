import { Module } from '@nestjs/common';
import { ReportingService } from './reporting.service';
import { ReportingController } from './reporting.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { facebookleads, FacebookLeadsSchema } from 'src/Models/Facebookleads';
import { users, UserSchema } from 'src/Models/Users';

@Module({
  imports : [
  MongooseModule.forFeature([{ name: facebookleads.name, schema: FacebookLeadsSchema }]) ,
  MongooseModule.forFeature([{ name: users.name, schema: UserSchema }])
],
  controllers: [ReportingController],
  providers: [ReportingService]
})
export class ReportingModule {}
