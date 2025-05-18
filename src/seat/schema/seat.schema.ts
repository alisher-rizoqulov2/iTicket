import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Types } from "mongoose";

@Schema()
export class Seat {
  @Prop({ required: true })
  sector: number;
  @Prop({ required: true })
  row_number: number;
  @Prop({ required: true })
  number: number;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Venue" })
  venue_id: Types.ObjectId;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "SeatType" })
  seat_type_id: Types.ObjectId;
  @Prop({ required: true })
  location_in_schema: string;
}
export const SeatSchema = SchemaFactory.createForClass(Seat);
