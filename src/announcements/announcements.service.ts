import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { announcements, AnnouncementsDocument } from 'src/Models/Announcements';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { UpdateAnnouncementDto } from './dto/update-announcement.dto';


@Injectable()
export class AnnouncementsService {

  constructor(@InjectModel(announcements.name) private announcementsModel : Model<AnnouncementsDocument> )
  {}

  async addAnnouncements(obj) {

    const announcements = new this.announcementsModel()
    announcements.user_id = "15847848"
    announcements.save();


    
  }




  create(createAnnouncementDto: CreateAnnouncementDto) {
    return 'This action adds a new announcement';
  }

  findAll() {
    return `This action returns all announcements`;
  }

  findOne(id: number) {
    return `This action returns a #${id} announcement`;
  }

  update(id: number, updateAnnouncementDto: UpdateAnnouncementDto) {
    return `This action updates a #${id} announcement`;
  }

  remove(id: number) {
    return `This action removes a #${id} announcement`;
  }
}
