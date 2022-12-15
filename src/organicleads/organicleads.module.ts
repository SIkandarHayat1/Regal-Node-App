import { Module } from '@nestjs/common';
import { OrganicleadsService } from './organicleads.service';
import { OrganicleadsController } from './organicleads.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { organicleads, OrganicLeadsSchema } from 'src/Models/Organicleads';
import { users, UserSchema } from 'src/Models/Users';

@Module({
  imports : [
  MongooseModule.forFeature([{ name: organicleads.name, schema: OrganicLeadsSchema }]),
  MongooseModule.forFeature([{ name: users.name, schema: UserSchema }])

],
  controllers: [OrganicleadsController],
  providers: [OrganicleadsService]
})
export class OrganicleadsModule {}
