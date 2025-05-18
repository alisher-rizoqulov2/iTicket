import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Types } from "mongoose";

@Schema()
export class VenueType {
    @Prop({type:mongoose.Schema.Types.ObjectId, ref:"Type"})
    type_id: Types.ObjectId;
    @Prop({type:mongoose.Schema.Types.ObjectId, ref:"Venue"})
    venue_id: Types.ObjectId;
}
export const VenueTypeSchema = SchemaFactory.createForClass(VenueType);
