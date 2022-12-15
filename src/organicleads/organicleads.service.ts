import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { organicleads, OrganicLeadsDocument } from 'src/Models/Organicleads';
import { UserDocument, users } from 'src/Models/Users';

@Injectable()
export class OrganicleadsService {
    
    constructor(@InjectModel(organicleads.name) private organicLeadsModel : Model<OrganicLeadsDocument> ,  @InjectModel(users.name) private userModel : Model<UserDocument>){}
    
    
    async getAllOrganicLead(user_type , full_name) {

      if(user_type !== "Admin"){

        const response = this.organicLeadsModel.find({ agent : full_name}).exec();
        return response ;

      } else{

        const response = this.organicLeadsModel.find().exec();
        return response ;

      }

      }

    async getSingleOrganicLead(organicleads_id) {

        const response = await this.organicLeadsModel.find({_id : organicleads_id}).exec();
        return response ;
        
      }


    async addOrganicLead(obj) {
        const organicleads = new this.organicLeadsModel();
        organicleads.full_name = obj.full_name ? obj.full_name : '' ,
        organicleads.agent = obj.agent ? obj.agent : '' ,
        organicleads.contact_no = obj.contact_no ? obj.contact_no : '',
        organicleads.whatsapp_no = obj.whatsapp_no ? obj.whatsapp_no : '',
        organicleads.email = obj.email ? obj.email : '',
        organicleads.project = obj.project ? obj.project : '',
        organicleads.facebook = obj.facebook ? obj.facebook : '',
        organicleads.linkedin = obj.linkedin ? obj.linkedin : '',
        organicleads.instagram = obj.instagram ? obj.instagram : '',
        organicleads.twitter = obj.twitter ? obj.twitter : '',
        organicleads.comments = obj.comments ? obj.comments : '',
        organicleads.status = obj.status ? obj.status : 'new'
        let resp = organicleads.save();
        return {status : 200 , message : "Organic Leads Successfully Added"}
      }


    async updateOrganicLead(obj) {

        const updateorganiclead = {
           full_name : obj.full_name ? obj.full_name : '' ,
           contact_no : obj.contact_no ? obj.contact_no : '',
           agent : obj.agent ? obj.agent : '',
           whatsapp_no : obj.whatsapp_no ? obj.whatsapp_no : '',
           email : obj.email ? obj.email : '',
           project : obj.project ? obj.project : '',
           facebook : obj.facebook ? obj.facebook : '',
           linkedin : obj.linkedin ? obj.linkedin : '',
           instagram : obj.instagram ? obj.instagram : '',
           twitter : obj.twitter ? obj.twitter : '',

       }

      let response = await this.organicLeadsModel.updateOne({ _id : obj.id } , updateorganiclead).exec()

      return {status : 200 , message : "Organic Lead Updated Successfully"}

    }


    async getUserlist() {
      let response = await this.userModel.find({} , {_id:1 , full_name:1}).exec()
      return  response  
    }




    async updateOrganicLeadWithComments(obj) {

      console.log("working.....");

      const updateorganicleadwithcomments = {
         comments : obj.comments ? obj.comments : '',
         status : obj.status ? obj.status : ''

     }

     let response = await this.organicLeadsModel.updateOne({ _id : obj.id } , updateorganicleadwithcomments).exec()

     return {status : 200 , message : "Organic Lead Updated Successfully"}

  }


      

}
