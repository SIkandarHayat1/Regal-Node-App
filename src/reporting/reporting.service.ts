import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Console } from 'console';
import { Model } from 'mongoose';
import { async } from 'rxjs';
import { facebookleads, FacebookLeadsDocument } from 'src/Models/Facebookleads';
import { UserDocument, users } from 'src/Models/Users';
import { CreateReportingDto } from './dto/create-reporting.dto';
import { UpdateReportingDto } from './dto/update-reporting.dto';

@Injectable()
export class ReportingService {

  constructor(
    @InjectModel(facebookleads.name) private facebookLeadsModel : Model<FacebookLeadsDocument>,
    @InjectModel(users.name) private userModel : Model<UserDocument>
    
    ){}


  
  create(createReportingDto: CreateReportingDto) {
    return 'This action adds a new reporting';
  }
  
  async getLeadsReport(obj) {

   const to_date = new Date(obj.to_date).getTime().toString();

   const from_date = new Date(obj.from_date).getTime().toString();

   const response = await this.facebookLeadsModel.find({timestamp: { $gt:to_date , $lt:from_date}}).exec();

   return response ;
    
  }


  async getUserReport(obj) {

    const to_date = new Date(obj.to_date).getTime().toString();
 
     const from_date = new Date(obj.from_date).getTime().toString();

     const response = await this.userModel.find().exec();

     const data_arr = [{status : "close_clinets"} , { status : "dealer"} , { status : "follow_up"} , { status : "interested"} , { status : "no_answer/call_back"} , { status : "new"} , { status : "sale_maturity"} , { status : "visit_plan"}];

     var res_date = [];

     for(let i = 0 ; i < response.length ; i++){

          for(let i = 0 ; i < data_arr.length ; i++){
             
              const totals = await this.facebookLeadsModel.find({ user_id : response[i]._id.valueOf().toString() , status : data_arr[i].status  }).count().exec();
              
              //res_date.(push({full_name : response[i].full_name , status : data_arr[i].status , total : totals })
              // console.log(totals);
            
          }
      
      console.log("working....." , response[i]._id.valueOf().toString() );

     }

     

      //var test = [];

      // for(let i = 0 ; i < data_arr.length ; i++){
      //       const totals = await this.facebookLeadsModel.find({ user_id : data._id.valueOf().toString() , status : data_arr[i].status  }).count().exec();
      //       test.push({full_name : data.full_name , status : data_arr[i].status , total : totals })
           
          
      //     }

      

 

 
    // const response = await this.facebookLeadsModel.find({timestamp: { $gt:to_date , $lt:from_date}}).exec();
 
    // return response ;
     
   }



  findAll() {
    return `This action returns all reporting`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reporting`;
  }

  update(id: number, updateReportingDto: UpdateReportingDto) {
    return `This action updates a #${id} reporting`;
  }

  remove(id: number) {
    return `This action removes a #${id} reporting`;
  }
}
