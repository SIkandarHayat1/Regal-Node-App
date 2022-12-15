import { Module } from '@nestjs/common';
import { LeadsassigngroupService } from './leadsassigngroup.service';
import { LeadsassigngroupController } from './leadsassigngroup.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { leadsassigngroup, LeadsAssignGroupSchema } from 'src/Models/Leadsassigngroup';
import { users, UserSchema } from 'src/Models/Users';

@Module({
  imports : [
    MongooseModule.forFeature([{ name: leadsassigngroup.name, schema: LeadsAssignGroupSchema }]),
    MongooseModule.forFeature([{ name: users.name, schema: UserSchema }])
],
  controllers: [LeadsassigngroupController],
  providers: [LeadsassigngroupService]
})
export class LeadsassigngroupModule {}
