import { Module } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { facebookleads, FacebookLeadsSchema } from 'src/Models/Facebookleads';
import { organicleads, OrganicLeadsSchema } from 'src/Models/Organicleads';

@Module({
  imports : [
  MongooseModule.forFeature([{ name: facebookleads.name, schema: FacebookLeadsSchema }]),
  MongooseModule.forFeature([{ name: organicleads.name, schema: OrganicLeadsSchema }])
],
  controllers: [DashboardController],
  providers: [DashboardService]
})
export class DashboardModule {}
