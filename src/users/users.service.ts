import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument, users } from 'src/Models/Users';

@Injectable()
export class UsersService {

    constructor(@InjectModel(users.name) private userModel : Model<UserDocument>){}


    async getAll() {
      let response = await this.userModel.find().exec()
      return  response   
    }

    
    
     async getSingleUsers(user_id) {
       let response = await this.userModel.findById({_id : user_id}).exec();
       return  response; 
      
      }



      async addUsers(obj) {
        const user = new this.userModel();
        user.full_name = obj.full_name ? obj.full_name : '' ,
        user.email = obj.email ? obj.email : '',
        user.password = obj.password ? obj.password : '',
        user.contact_number = obj.contact_number ? obj.contact_number : '',
        user.other_mobile = obj.other_mobile ? obj.other_mobile : '',
        user.cnic = obj.cnic ? obj.cnic : '',
        user.date_of_birth = obj.date_of_birth ? obj.date_of_birth : '',
        user.working_start_date = obj.working_start_date ? obj.working_start_date : '',
        user.user_type = obj.user_type ? obj.user_type : '',
        user.under_supervision = obj.under_supervision ? obj.under_supervision : '',
        user.gender = obj.gender ? obj.gender : '',
        user.region = obj.region ? obj.region : '',
        user.status = obj.status ? obj.status : '',
        user.address = obj.address ? obj.address : ''
        let resp = user.save();
        return {status : 200 , message : "User Successfully Added"}
      }


      async updateUsers(obj) {
         const updatedata = {
         full_name : obj.full_name ? obj.full_name : '' ,
         email : obj.email ? obj.email : '',
         password : obj.password ? obj.password : '',
         contact_number : obj.contact_number ? obj.contact_number : '',
         other_mobile : obj.other_mobile ? obj.other_mobile : '',
         cnic : obj.cnic ? obj.cnic : '',
         date_of_birth : obj.date_of_birth ? obj.date_of_birth : '',
         working_start_date : obj.working_start_date ? obj.working_start_date : '',
         user_type : obj.user_type ? obj.user_type : '',
         under_supervision : obj.under_supervision ? obj.under_supervision : '',
         gender : obj.gender ? obj.gender : '',
         region : obj.region ? obj.region : '',
         status : obj.status ? obj.status : '',
         address : obj.address ? obj.address : ''
        }

        let response = await this.userModel.updateOne({ _id : obj.id } , updatedata).exec()

        return {status : 200 , message : "User Update Successfully"}
        
       
      }



      async deleteUsers(id) {
        
        let response = await this.userModel.deleteOne({ _id : id }).exec();
        return {status : 200 , message : "User Deleted Successfully" }
       
      }



}


