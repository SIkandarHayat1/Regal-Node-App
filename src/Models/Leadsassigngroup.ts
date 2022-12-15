import { Prop , Schema , SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


export type LeadsAssignGroupDocument = leadsassigngroup & Document;

@Schema()
export class leadsassigngroup{

    @Prop()
    id : string;

    @Prop()
    group_name : string;

    @Prop()
    project_name : string;

    @Prop()
    group_user : string;

}


export const LeadsAssignGroupSchema = SchemaFactory.createForClass(leadsassigngroup);