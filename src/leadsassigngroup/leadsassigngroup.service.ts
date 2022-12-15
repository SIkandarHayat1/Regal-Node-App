import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { leadsassigngroup, LeadsAssignGroupDocument } from 'src/Models/Leadsassigngroup';
import { UserDocument, users } from 'src/Models/Users';
import { CreateLeadsassigngroupDto } from './dto/create-leadsassigngroup.dto';
import { UpdateLeadsassigngroupDto } from './dto/update-leadsassigngroup.dto';
const fb = require('fb');

@Injectable()
export class LeadsassigngroupService {

  constructor(@InjectModel(leadsassigngroup.name) private leadAssignGroup : Model<LeadsAssignGroupDocument> , @InjectModel(users.name) private userModel : Model<UserDocument>){}


  async getAllLeadsGroup() {
    let response = await this.leadAssignGroup.find().exec()
    return  response  
  }

  


  async addLeadsAssignGroup(obj) {

    const leadsassigngroup = new this.leadAssignGroup();
    leadsassigngroup.group_name =  obj.group_name ? obj.group_name : '' ,
    leadsassigngroup.project_name =  obj.project_name ? obj.project_name : '' ,
    leadsassigngroup.group_user = obj.group_user ? obj.group_user : ''
    leadsassigngroup.save();

    return {status : 200 , message : "Add Group Successfully"}

 
  }

  async getFBProjects() {
  const access_token = 'EAAKwMqqwS3gBAIkxpxhGwO6Nka2kint5ftWZAlmz94IG6ZCXyLcIZB9tsZBwhD9UjH55rpOMCeCMTUYObharDVYbgXzbsJgGLtqjAOCdE6k9jI9RRzk3RUNer6WEunZAsvPbY05hI1BSBjLtbL1Ov4znjaqE8GD3ZCAuoZCvbKZBtPZCQgS29ZAAcU';
  fb.setAccessToken(access_token);
  fb.api(
    "/769028500152624/leadgen_forms",
    (response)=> {
      var arr = [];
      response.data.map((data)=>{
        arr.push(data)
      })

    }
  ); 

}


async facebookname(data) {

  console.log(data)


}

async updateOrganicLead(obj) {

  const updateorganiclead = {
     group_name : obj.group_name ? obj.group_name : '' ,
     project_name : obj.project_name ? obj.project_name : '',
     group_user : obj.group_user ? obj.group_user : ''
 }

    let response = await this.leadAssignGroup.updateOne({ _id : obj.id } , updateorganiclead).exec()

    return {status : 200 , message : "Group Update Successfully"};

}


async deleteGroup(id) {
        
  let response = await this.leadAssignGroup.deleteOne({ _id : id }).exec();
  return {status : 200 , message : "User Deleted Successfully" }
 
}


async getSingleOrganicLead(group_id) {

  const response = this.leadAssignGroup.find({_id : group_id}).exec();
  return response ;
  
}




async getUserlist() {
  let response = await this.userModel.find({} , {_id:1 , full_name:1}).exec()
  return  response  
}


  create(createLeadsassigngroupDto: CreateLeadsassigngroupDto) {
    return 'This action adds a new leadsassigngroup';
  }

  findAll() {
    return `This action returns all leadsassigngroup`;
  }

  findOne(id: number) {
    return `This action returns a #${id} leadsassigngroup`;
  }

  update(id: number, updateLeadsassigngroupDto: UpdateLeadsassigngroupDto) {
    return `This action updates a #${id} leadsassigngroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} leadsassigngroup`;
  }
}
