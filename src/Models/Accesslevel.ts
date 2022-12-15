import { Prop , Schema , SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


export type AccessLevelDocument = accesslevel & Document;

@Schema()
export class accesslevel{

    @Prop()
    id : string;

    @Prop()
    user_id : string;
    
    @Prop()
    user_name : string;

    @Prop()
    Project_management_read : string;

    @Prop()
    Project_management_write : string;

    @Prop()
    Project_management_update : string;

    @Prop()
    Project_management_delete : string;

    @Prop()
    user_management_read : string;

    @Prop()
    user_management_write : string;

    @Prop()
    user_management_update : string;

    @Prop()
    user_management_delete : string;

    @Prop()
    leads_management_read : string;

    @Prop()
    leads_management_write : string;

    @Prop()
    leads_management_update : string;

    @Prop()
    leads_management_delete : string;

    @Prop()
    status : string;


}


export const AccessLevelSchema = SchemaFactory.createForClass(accesslevel);