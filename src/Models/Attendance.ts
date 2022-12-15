import { Prop , Schema , SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


export type AttendanceDocument = attendance & Document;

@Schema()
export class attendance{

    @Prop()
    id : string;
    
    @Prop()
    name : string;


}


export const AttendanceSchema = SchemaFactory.createForClass(attendance);