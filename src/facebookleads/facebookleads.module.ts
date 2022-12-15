import { Module } from '@nestjs/common';
import { FacebookleadsService } from './facebookleads.service';
import { FacebookleadsController } from './facebookleads.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { facebookleads, FacebookLeadsSchema } from 'src/Models/Facebookleads';
import { leadsassigngroup, LeadsAssignGroupSchema } from 'src/Models/Leadsassigngroup';

@Module({
  imports : [
  MongooseModule.forFeature([{ name: facebookleads.name, schema: FacebookLeadsSchema }]) , 
  MongooseModule.forFeature([{ name: leadsassigngroup.name, schema: LeadsAssignGroupSchema }])
],
  controllers: [FacebookleadsController],
  providers: [FacebookleadsService]
})
export class FacebookleadsModule {}
