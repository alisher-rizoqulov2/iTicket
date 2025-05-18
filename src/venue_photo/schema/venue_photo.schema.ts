import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Venue } from "../../venue/schema/venue.schema";

@Schema()
export class VenuePhoto {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Venue" })
    venue_id: Venue;
    @Prop({ required: true })
    url: string;
}
export const VenuePhotoSchema = SchemaFactory.createForClass(VenuePhoto);
