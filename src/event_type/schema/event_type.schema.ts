import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document, Types } from "mongoose";

@Schema()
export class EventType extends Document {
  @Prop()
  name: string;

  @Prop({ type:mongoose.Types.ObjectId, ref: "EventType"})
  parent_event_type_id: EventType
}

export const EventTypeSchema = SchemaFactory.createForClass(EventType);
