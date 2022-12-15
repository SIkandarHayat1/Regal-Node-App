import { Prop , Schema , SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


export type FacebookLeadsDocument = facebookleads & Document;

@Schema()
export class facebookleads{

    @Prop()
    id : string;

    @Prop()
    user_id : string;

    @Prop()
    leads_id : string;

    @Prop()
    agent : string;

    @Prop()
    project : string;

    @Prop()
    created_time : string;

    @Prop()
    your_whatsapp_number : string;

    @Prop()
    full_name : string;

    @Prop()
    phone_number : string;

    @Prop()
    email : string;

    @Prop()
    city : string;

    @Prop()
    date : string;

    @Prop()
    status : string;

    @Prop()
    comments : string;

    @Prop()
    empty : string;


    @Prop()
    timestamp : string;


}


export const FacebookLeadsSchema = SchemaFactory.createForClass(facebookleads);