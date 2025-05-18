import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Region } from "../../region/schemas/region.schema";
import mongoose from "mongoose";
import { District } from "../../district/schemas/district.schema";

@Schema()
export class Venue {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  address: string;
  @Prop({ required: true })
  location: string;
  @Prop({ required: true })
  site: string;
  @Prop({ required: true })
  phone_number: string;
  @Prop({ required: true })
  schema: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Region" })
  region_id: Region;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "District" })
  district_id: District;
}

export const VenueSchema = SchemaFactory.createForClass(Venue);
