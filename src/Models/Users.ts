import { Prop , Schema , SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


export type UserDocument = users & Document;

@Schema()
export class users{

    @Prop()
    id : string

    @Prop()
    full_name : string;

    @Prop()
    email : string;

    @Prop()
    password : string;

    @Prop()
    contact_number : string;

    @Prop()
    other_mobile : string;

    @Prop()
    cnic : string;

    @Prop()
    date_of_birth : string;

    @Prop()
    working_start_date : string;

    @Prop()
    user_type : string;

    @Prop()
    under_supervision : string;

    @Prop()
    gender : string;

    @Prop()
    region : string;

    @Prop()
    status : string;

    @Prop()
    address : string;



}


export const UserSchema = SchemaFactory.createForClass(users);