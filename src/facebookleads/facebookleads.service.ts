import { ConsoleLogger, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { facebookleads, FacebookLeadsDocument } from 'src/Models/Facebookleads';
import { leadsassigngroup, LeadsAssignGroupDocument } from 'src/Models/Leadsassigngroup';
import { OrganicLeadsDocument } from 'src/Models/Organicleads';
import { arrayBuffer } from 'stream/consumers';
import { CreateFacebookleadDto } from './dto/create-facebooklead.dto';
import { UpdateFacebookleadDto } from './dto/update-facebooklead.dto';
const adsSdk = require('facebook-nodejs-business-sdk');
const bizSdk = require('facebook-nodejs-business-sdk');
const fb = require('fb')
const nodeCron = require('node-cron');


@Injectable()
export class FacebookleadsService {

  constructor(@InjectModel(facebookleads.name) private facebookLeadsModel : Model<FacebookLeadsDocument> , @InjectModel(leadsassigngroup.name) private leadsAssignGroup : Model<LeadsAssignGroupDocument>  ){}
  

  async getAllFacebookLeads() {

    const response =  this.facebookLeadsModel.find().sort({timestamp : -1}).exec();
    return response ;

  }


  // job = nodeCron.schedule("*/5 * * * *", async () => {

  //   console.log("working.............")
  //   this.facebookLeads();
  //   this.assignleads();
      
  //    }, {
  //       scheduled: true,
  //       timezone: "Asia/Karachi"
  //    });

  job = nodeCron.schedule("58 17 * * *", async () => {

    console.log("working.............");
      
     }, {
        scheduled: true,
        timezone: "Asia/Karachi"
     });






  async facebookLeads() {

  const access_token = 'EAAKwMqqwS3gBAIkxpxhGwO6Nka2kint5ftWZAlmz94IG6ZCXyLcIZB9tsZBwhD9UjH55rpOMCeCMTUYObharDVYbgXzbsJgGLtqjAOCdE6k9jI9RRzk3RUNer6WEunZAsvPbY05hI1BSBjLtbL1Ov4znjaqE8GD3ZCAuoZCvbKZBtPZCQgS29ZAAcU';
  
  const Ad = adsSdk.Ad;
  const api = adsSdk.FacebookAdsApi.init(access_token);
  
  //const leads = new Ad(id).getLeads();
  //const showDebugingInfo = true;
  //api.setDebug(true);
  


  fb.setAccessToken(access_token);

  fb.api(
    "/769028500152624/leadgen_forms",
     (response)=> {
      response.data.map((data)=>{
        const leads = new Ad(data.id).getLeads();
        this.facebookLeadsData(leads , data.name);

      })
    }
  );

  
  }


  async facebookLeadsData(leads , project_name) {

    //if you want to understand the logic please check this link here

    const fb_lead = await leads;

    fb_lead.forEach((data)=>{ 
      
    this.facebookLeadsModel.find({ leads_id : data._data.id }).exec().then((checked)=>{

        if(checked.length === 0){

          let lead = {leads_id : data._data.id ,  created_time : data._data.created_time , status :  "new" , comments : "" , project : project_name , date : new Date().toString().slice(0, 24) , timestamp : new Date().getTime().toString() , user_id : "" , agent : ""}
         
          let from_feilds = [];

          for(let i = 0 ; i < data._data.field_data.length ; i++ ){
            
             from_feilds.push({[data._data.field_data[i].name.replace("?", "")] : data._data.field_data[i]['values'][0]})
             
             Object.assign(lead, from_feilds[i]) // convert multiple objects to single object and push all feilds in lead array object please console log the lead object 
         
          }
            
           const facebooklead = new this.facebookLeadsModel({...lead}) 
          
           facebooklead.save(); 

           
             }

         }) 
  
     })   

     console.log("success");

  }



  async getSingleFacebookLead(facebook_lead_id) {

    const response = this.facebookLeadsModel.find({_id : facebook_lead_id}).exec();
  
    return response ;
    
  }

  



  async updateFacebookLeadWithComments(obj) {

    const updateorganicleadwithcomments = {
       comments : obj.comments ? obj.comments : '',
       status : obj.status ? obj.status : ''

   }

   let response = await this.facebookLeadsModel.updateOne({ _id : obj.id } , updateorganicleadwithcomments).exec()

   return {status : 200 , message : "Add Comment Successfully"}

}



  async assignleads() {

    let random_number = [];

    const user_groups = await this.leadsAssignGroup.find().exec(); 

    user_groups.map((data)=>{
      
      this.facebookLeadsModel.find({ project : data.project_name}).lean().exec().then((datas)=>{

        for(let i = 0 ; i < datas.length ; i++){

        if(datas[i].project === data.project_name){

          if(datas[i].agent === "" || datas[i].agent === null ){

           let json = JSON.parse(data.group_user);

           let random = Math.floor(Math.random() * json.length);

           let merge_array = {...datas[i] , user_id  : json[random]._id ? json[random]._id : '' , agent : json[random].full_name ? json[random].full_name : '' }

           this.facebookLeadsModel.updateOne({ _id : datas[i]._id } , merge_array).exec()

           }

          }

        }
                   
      })

    })

    
    
  }

  



  findOne(id: number) {
    return `This action returns a #${id} facebooklead`;
  }

  update(id: number, updateFacebookleadDto: UpdateFacebookleadDto) {
    return `This action updates a #${id} facebooklead`;
  }

  remove(id: number) {
    return `This action removes a #${id} facebooklead`;
  }
}
