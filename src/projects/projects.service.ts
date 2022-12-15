import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProjectDocument, projects } from 'src/Models/Projects';

@Injectable()
export class ProjectsService {

    constructor(@InjectModel(projects.name) private projectModel : Model<ProjectDocument>){}

    
    async getAllProjects() {
        const response = this.projectModel.find().exec();
        return response ;

      }

    async getSingleProject(project_id) {
        const response = this.projectModel.findById({_id : project_id}).exec();
        return response ;
        
      }


    async addProject(obj) {
        const project = new this.projectModel();
        project.project_name = obj.project_name ? obj.project_name : '' 
        let resp = project.save();
        return {status : 200 , message : "Project Successfully Added"}
      }


    async updateProject(obj) {
        const updateorganiclead = {
           project_name : obj.project_name ? obj.project_name : '' 
            }
       let response = await this.projectModel.updateOne({ _id : obj.id } , updateorganiclead).exec()
       return {status : 200 , message : "Project Updated Successfully"}

    }

    async deleteProject(id) {
        let response = await this.projectModel.deleteOne({ _id : id }).exec();
        return {status : 200 , message : "Project Deleted Successfully" }
       
    }
}
