import { Module } from '@nestjs/common';
import { AnnouncementsService } from './announcements.service';
import { AnnouncementsController } from './announcements.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { announcements, AnnouncementsSchema } from 'src/Models/Announcements';

@Module({
  imports : [MongooseModule.forFeature([{ name: announcements.name, schema: AnnouncementsSchema }])],
  controllers: [AnnouncementsController],
  providers: [AnnouncementsService]
})
export class AnnouncementsModule {}
