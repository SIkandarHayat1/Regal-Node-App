import { Prop , Schema , SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


export type AnnouncementsDocument = announcements & Document;

@Schema()
export class announcements{

    @Prop()
    id : string;

    @Prop()
    user_id : string;
    
    @Prop()
    user_name : string;

    @Prop()
    from_date : string;

    @Prop()
    to_date : string;

    @Prop()
    message : string;

    @Prop()
    status : string;


}


export const AnnouncementsSchema = SchemaFactory.createForClass(announcements);