import { Prop , Schema , SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


export type ProjectDocument = projects & Document;

@Schema()
export class projects{

    @Prop()
    id : string

    @Prop()
    project_name : string;

}


export const ProjectSchema = SchemaFactory.createForClass(projects);