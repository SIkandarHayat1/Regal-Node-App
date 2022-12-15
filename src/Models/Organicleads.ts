import { Prop , Schema , SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


export type OrganicLeadsDocument = organicleads & Document;

@Schema()
export class organicleads{

    @Prop()
    id : string;

    @Prop()
    full_name : string;

    @Prop()
    agent : string;

    @Prop()
    contact_no : string;

    @Prop()
    whatsapp_no : string;

    @Prop()
    email : string;

    @Prop()
    project : string;

    @Prop()
    facebook : string;

    @Prop()
    linkedin : string;

    @Prop()
    instagram : string;

    @Prop()
    twitter : string;

    @Prop()
    comments : string;

    @Prop()
    status : string;

}


export const OrganicLeadsSchema = SchemaFactory.createForClass(organicleads);