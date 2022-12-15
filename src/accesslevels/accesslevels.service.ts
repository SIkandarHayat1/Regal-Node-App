import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { accesslevel, AccessLevelDocument } from 'src/Models/Accesslevel';
import { CreateAccesslevelDto } from './dto/create-accesslevel.dto';
import { UpdateAccesslevelDto } from './dto/update-accesslevel.dto';

@Injectable()
export class AccesslevelsService {

  constructor(@InjectModel(accesslevel.name) private access_level : Model<AccessLevelDocument>){}

  async addAccessLevelStatus(obj) {

    const access_level = new this.access_level();
    access_level.user_id = obj.user_id ? obj.user_id : '',
    access_level.user_name = obj.user_name ? obj.user_name : ''
    access_level.save();


  }

  
  create(createAccesslevelDto: CreateAccesslevelDto) {
    return 'This action adds a new accesslevel';
  }

  findAll() {
    return `This action returns all accesslevels`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accesslevel`;
  }

  update(id: number, updateAccesslevelDto: UpdateAccesslevelDto) {
    return `This action updates a #${id} accesslevel`;
  }

  remove(id: number) {
    return `This action removes a #${id} accesslevel`;
  }
}
