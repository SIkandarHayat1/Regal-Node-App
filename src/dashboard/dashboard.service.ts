import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { response } from 'express';
import { Model } from 'mongoose';
import { facebookleads, FacebookLeadsDocument } from 'src/Models/Facebookleads';
import { organicleads, OrganicLeadsDocument } from 'src/Models/Organicleads';
import { UpdateDashboardDto } from './dto/update-dashboard.dto';

@Injectable()
export class DashboardService {

  constructor(
  @InjectModel(facebookleads.name) private facebookLeadsModel : Model<FacebookLeadsDocument>,
  @InjectModel(organicleads.name) private organicLeadsModel : Model<OrganicLeadsDocument>
  ){}

 





  async total_leads() {

    const response =  await this.facebookLeadsModel.find().count().exec();
    return response ;

  }

  async total_organic_leads() {

    const response =  await this.organicLeadsModel.find().count().exec();
    return response ;

  }

  async total_user_leads(full_name) {

    const response =  await this.facebookLeadsModel.find({ agent : full_name}).count().exec();
    return response ;

  }

  async total_organic_user_leads(full_name) {

    const response =  await this.organicLeadsModel.find({ agent : full_name}).count().exec();
    return response ;

  }
  
  async total_new() {

    const response =  await this.facebookLeadsModel.find({status : "new"}).count().exec();
    return response ;

  }

  async total_organic_new() {

    const response =  await this.organicLeadsModel.find({status : "new"}).count().exec();
    return response ;

  }


  async total_user_new(full_name) {

    const response =  await this.facebookLeadsModel.find({status : "new" , agent : full_name }).count().exec();
    return response ;

  }

  async total_organic_user_new(full_name) {

    const response =  await this.organicLeadsModel.find({status : "new" , agent : full_name }).count().exec();
    return response ;

  }

  async total_closed_clients() {

    const response =  await this.facebookLeadsModel.find({status : "close_clients"}).count().exec();
    return response ;

  }


  async total_organic_closed_clients() {

    const response =  await this.organicLeadsModel.find({status : "close_clients"}).count().exec();
    return response ;

  }


  async total_user_closed_clients(full_name) {

    const response =  await this.facebookLeadsModel.find({status : "close_clients" ,  agent : full_name }).count().exec();
    return response ;

  }

  async total_organic_user_closed_clients(full_name) {

    const response =  await this.organicLeadsModel.find({status : "close_clients" ,  agent : full_name }).count().exec();
    return response ;

  }

  async total_dealer  () {

    const response =  await this.facebookLeadsModel.find({status : "dealer"}).count().exec();
    return response ;

  }


  async total_organic_dealer  () {

    const response =  await this.organicLeadsModel.find({status : "dealer"}).count().exec();
    return response ;

  }
  

  async total_user_dealer  (full_name) {

    const response =  await this.facebookLeadsModel.find({status : "dealer" , agent : full_name}).count().exec();
    return response ;

  }

  async total_organic_user_dealer  (full_name) {

    const response =  await this.organicLeadsModel.find({status : "dealer" , agent : full_name}).count().exec();
    return response ;

  }

  async total_follow_ups () {

    const response =  await this.facebookLeadsModel.find({status : "follow_up"}).count().exec();
    return response ;

  }

  async total_organic_follow_ups () {

    const response =  await this.organicLeadsModel.find({status : "follow_up"}).count().exec();
    return response ;

  }

  async total_user_follow_ups (full_name) {

    const response =  await this.facebookLeadsModel.find({status : "follow_up" ,  agent : full_name}).count().exec();
    return response ;

  }

  async total_organic_user_follow_ups (full_name) {

    const response =  await this.organicLeadsModel.find({status : "follow_up" ,  agent : full_name}).count().exec();
    return response ;

  }

  async total_interested () {

    const response =  await this.facebookLeadsModel.find({status : "interested"}).count().exec();
    return response ;

  }

  async total_organic_interested () {

    const response =  await this.organicLeadsModel.find({status : "interested"}).count().exec();
    return response ;

  }

  async total_user_interested (full_name) {

    const response =  await this.facebookLeadsModel.find({status : "interested" , agent : full_name}).count().exec();
    return response ;

  }

  async total_organic_user_interested (full_name) {

    const response =  await this.organicLeadsModel.find({status : "interested" , agent : full_name}).count().exec();
    return response ;

  }

  async total_no_answer_callback () {

    const response =  await this.facebookLeadsModel.find({status : "no_answer/call_back"}).count().exec();
    return response ;

  }


  async total_organic_no_answer_callback () {

    const response =  await this.organicLeadsModel.find({status : "no_answer/call_back"}).count().exec();
    return response ;

  }

  async total_user_no_answer_callback (full_name) {

    const response =  await this.facebookLeadsModel.find({status : "no_answer/call_back" , agent : full_name}).count().exec();
    return response ;

  }

  async total_organic_user_no_answer_callback (full_name) {

    const response =  await this.organicLeadsModel.find({status : "no_answer/call_back" , agent : full_name}).count().exec();
    return response ;

  }

  async total_sale_maturity () {

    const response =  await this.facebookLeadsModel.find({status : "sale_maturity"}).count().exec();
    return response ;

  }

  async total_organic_sale_maturity () {

    const response =  await this.organicLeadsModel.find({status : "sale_maturity"}).count().exec();
    return response ;

  }

  async total_user_sale_maturity (full_name) {

    const response =  await this.facebookLeadsModel.find({status : "sale_maturity" ,  agent : full_name}).count().exec();
    return response ;

  }

  async total_organic_user_sale_maturity (full_name) {

    const response =  await this.organicLeadsModel.find({status : "sale_maturity" ,  agent : full_name}).count().exec();
    return response ;

  }

  async total_visit_plan () {

    const response =  await this.facebookLeadsModel.find({status : "visit_plan"}).count().exec();
    return response ;

  }

  async total_organic_visit_plan () {

    const response =  await this.organicLeadsModel.find({status : "visit_plan"}).count().exec();
    return response ;

  }

  async total_user_visit_plan (full_name) {

    const response =  await this.facebookLeadsModel.find({status : "visit_plan" , agent : full_name}).count().exec();
    return response ;

  }

  async total_organic_user_visit_plan (full_name) {

    const response =  await this.organicLeadsModel.find({status : "visit_plan" , agent : full_name}).count().exec();
    return response ;

  }




  async FacebookLeadsStats(user_type , full_name) {

    let dashboard ;

    if(user_type !== "Admin"){

      dashboard = {

         total_leads : await this.total_user_leads(full_name),
        total_new : await this.total_user_new(full_name) ,
        total_closed_clients : await this.total_user_closed_clients(full_name),
        total_dealer : await this.total_user_dealer(full_name),
        total_interested : await this.total_user_interested(full_name),
        total_follow_ups : await this.total_user_follow_ups(full_name),
        total_no_answer_callback : await this.total_user_no_answer_callback(full_name),
        total_sale_maturity : await this.total_user_sale_maturity(full_name),
        total_visit_plan : await this.total_user_visit_plan(full_name)
  
      }

    }
    else{
      
      dashboard = {

        total_leads : await this.total_leads(),
        total_new : await this.total_new() ,
        total_closed_clients : await this.total_closed_clients(),
        total_dealer : await this.total_dealer(),
        total_interested : await this.total_interested(),
        total_follow_ups : await this.total_follow_ups(),
        total_no_answer_callback : await this.total_no_answer_callback(),
        total_sale_maturity : await this.total_sale_maturity(),
        total_visit_plan : await this.total_visit_plan()
  
      }
    }

    return dashboard ;
 

  }


  async OrganicLeadsStats(user_type , full_name) {

    let dashboard ;

    if(user_type !== "Admin"){

      dashboard = {

        total_organic_leads : await this.total_organic_user_leads(full_name),
        total_organic_new : await this.total_organic_user_new(full_name) ,
        total_organic_closed_clients : await this.total_organic_user_closed_clients(full_name),
        total_organic_dealer : await this.total_organic_user_dealer(full_name),
        total_organic_interested : await this.total_organic_user_interested(full_name),
        total_organic_follow_ups : await this.total_organic_user_follow_ups(full_name),
        total_organic_no_answer_callback : await this.total_organic_user_no_answer_callback(full_name),
        total_organic_sale_maturity : await this.total_organic_user_sale_maturity(full_name),
        total_organic_visit_plan : await this.total_organic_user_visit_plan(full_name)
  
      }

    }
    else{
      
      dashboard = {

        total_organic_leads : await this.total_organic_leads(),
        total_organic_new : await this.total_organic_new() ,
        total_organic_closed_clients : await this.total_organic_closed_clients(),
        total_organic_dealer : await this.total_organic_dealer(),
        total_organic_interested : await this.total_organic_interested(),
        total_organic_follow_ups : await this.total_organic_follow_ups(),
        total_organic_no_answer_callback : await this.total_organic_no_answer_callback(),
        total_organic_sale_maturity : await this.total_organic_sale_maturity(),
        total_organic_visit_plan : await this.total_organic_visit_plan()
  
      }
    }

    return dashboard ;
 

  }


  async getTotalLeads(user_type , full_name) {

    let response ;

    if(user_type !== "Admin"){

      response =  await this.facebookLeadsModel.find({agent : full_name}).exec();
    }
    
    else{
       response =  await this.facebookLeadsModel.find().exec(); 
    }

    return response ;
 
  }

  async getOrganicTotalLeads(user_type , full_name) {

    let response ;

    if(user_type !== "Admin"){

      response =  await this.organicLeadsModel.find({agent : full_name}).exec();
    }
    
    else{
       response =  await this.organicLeadsModel.find().exec(); 
    }

    return response ;
 
  }


  async getTotalNewLeads(user_type , full_name) {

    let response ;

    if(user_type !== "Admin"){

      response =  await this.facebookLeadsModel.find({status : "new" , agent : full_name }).exec();
  
    } 
    else{

      response =  await this.facebookLeadsModel.find({status : "new" }).exec();
  
    }

    return response ;
 
  }

  async getTotalOrganicNewLeads(user_type , full_name) {

    let response ;

    if(user_type !== "Admin"){

      response =  await this.organicLeadsModel.find({status : "new" , agent : full_name }).exec();
  
    } 
    else{

      response =  await this.organicLeadsModel.find({status : "new" }).exec();
  
    }

    return response ;
 
  }


  async getTotalFollowUp(user_type , full_name) {

    let response ;

    if(user_type !== "Admin"){

      response =  await this.facebookLeadsModel.find({status : "follow_up" , agent : full_name }).exec();
  
    } 
    else{

      response =  await this.facebookLeadsModel.find({status : "follow_up" }).exec();
  
    }

    return response ;
 
  }


  async getTotalOrganicFollowUp(user_type , full_name) {

    let response ;

    if(user_type !== "Admin"){

      response =  await this.organicLeadsModel.find({status : "follow_up" , agent : full_name }).exec();
  
    } 
    else{

      response =  await this.organicLeadsModel.find({status : "follow_up" }).exec();
  
    }

    return response ;
 
  }



  async getTotalInterested(user_type , full_name) {

    let response ;

    if(user_type !== "Admin"){

      response =  await this.facebookLeadsModel.find({status : "interested" , agent : full_name }).exec();
  
    } 
    else{

      response =  await this.facebookLeadsModel.find({status : "interested" }).exec();
  
    }

    return response ;
 
  }

  async getTotalOrganicInterested(user_type , full_name) {

    let response ;

    if(user_type !== "Admin"){

      response =  await this.organicLeadsModel.find({status : "interested" , agent : full_name }).exec();
  
    } 
    else{

      response =  await this.organicLeadsModel.find({status : "interested" }).exec();
  
    }

    return response ;
 
  }



  async getTotalDealer(user_type , full_name) {

    let response ;

    if(user_type !== "Admin"){

      response =  await this.facebookLeadsModel.find({status : "dealer" , agent : full_name }).exec();
  
    } 
    else{

      response =  await this.facebookLeadsModel.find({status : "dealer" }).exec();
  
    }

    return response ;
 
  }


  async getTotalOrganicDealer(user_type , full_name) {

    let response ;

    if(user_type !== "Admin"){

      response =  await this.organicLeadsModel.find({status : "dealer" , agent : full_name }).exec();
  
    } 
    else{

      response =  await this.organicLeadsModel.find({status : "dealer" }).exec();
  
    }

    return response ;
 
  }


  async getTotalCloseClients(user_type , full_name) {

    let response ;

    if(user_type !== "Admin"){

      response =  await this.facebookLeadsModel.find({status : "close_clients" , agent : full_name }).exec();
  
    } 
    else{

      response =  await this.facebookLeadsModel.find({status : "close_clients" }).exec();
  
    }

    return response ;
 
  }


  async getTotalOrganicCloseClients(user_type , full_name) {

    let response ;

    if(user_type !== "Admin"){

      response =  await this.organicLeadsModel.find({status : "close_clients" , agent : full_name }).exec();
  
    } 
    else{

      response =  await this.organicLeadsModel.find({status : "close_clients" }).exec();
  
    }

    return response ;
 
  }


  async getTotalSalesMaturity(user_type , full_name) {

    let response ;

    if(user_type !== "Admin"){

      response =  await this.facebookLeadsModel.find({status : "sale_maturity" , agent : full_name }).exec();
  
    } 
    else{

      response =  await this.facebookLeadsModel.find({status : "sale_maturity" }).exec();
  
    }

    return response ;
 
  }

  async getTotalOrganicSalesMaturity(user_type , full_name) {

    let response ;

    if(user_type !== "Admin"){

      response =  await this.organicLeadsModel.find({status : "sale_maturity" , agent : full_name }).exec();
  
    } 
    else{

      response =  await this.organicLeadsModel.find({status : "sale_maturity" }).exec();
  
    }

    return response ;
 
  }


  async getTotalVisitPlan(user_type , full_name) {

    let response ;

    if(user_type !== "Admin"){

      response =  await this.facebookLeadsModel.find({status : "visit_plan" , agent : full_name }).exec();
  
    } 
    else{

      response =  await this.facebookLeadsModel.find({status : "visit_plan" }).exec();
  
    }

    return response ;
 
  }


  async getTotalOrganicVisitPlan(user_type , full_name) {

    let response ;

    if(user_type !== "Admin"){

      response =  await this.organicLeadsModel.find({status : "visit_plan" , agent : full_name }).exec();
  
    } 
    else{

      response =  await this.organicLeadsModel.find({status : "visit_plan" }).exec();
  
    }

    return response ;
 
  }


  async getTotalCallBack(user_type , full_name) {

    let response ;

    if(user_type !== "Admin"){

      response =  await this.facebookLeadsModel.find({status : "no_answer/call_back" , agent : full_name }).exec();
  
    } 
    else{

      response =  await this.facebookLeadsModel.find({status : "no_answer/call_back" }).exec();
  
    }

    return response ;
 
  }

  async getTotalOrganicCallBack(user_type , full_name) {


    let response ;

    if(user_type !== "Admin"){

      response =  await this.organicLeadsModel.find({status : "no_answer/call_back" , agent : full_name }).exec();
  
    } 
    else{

      response =  await this.organicLeadsModel.find({status : "no_answer/call_back" }).exec();
  
    }

    return response ;
 
  }


  findAll() {
    return `This action returns all dashboard`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dashboard`;
  }

  update(id: number, updateDashboardDto: UpdateDashboardDto) {
    return `This action updates a #${id} dashboard`;
  }

  remove(id: number) {
    return `This action removes a #${id} dashboard`;
  }
}
